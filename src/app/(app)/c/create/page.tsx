"use client";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { DateRangePicker, useDateRangePicker } from "@/components/DateRange";
import { Button } from "@/components/ui/button";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDays, differenceInCalendarDays } from "date-fns";
import { DateRange } from "react-day-picker";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const schema = z.object({
  title: z.string().min(3, { message: "Title must have 3 characters or more" }),
  websiteLink: z.string().url({ message: "URL must include https://" }),
  description: z.string().min(3, { message: "Must include a description" }),
  videoLength: z
    .string({ message: "Video length required" })
    .regex(/^\d*\.?\d+$/, "Video length must be positive number"),
  videoTags: z
    .string()
    .regex(/[\w\s-]+(?:,[\w\s-]+)*/g, {
      message: "Video tags must be comma seperated",
    })
    .min(3, { message: "Must include at least 1 hashtag" }),
  duration: z.object({
    from: z.date({ required_error: "Start date required" }),
    to: z.date({ required_error: "End date required" }),
  }),
  numberOfDays: z
    .number({ message: "" })
    .gte(1, { message: "Campaign duration should be 1 day or more" }),
});

type FormFields = z.infer<typeof schema>;

const CreateCampaignPage = () => {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    data = {
      ...data,
      numberOfDays: differenceInCalendarDays(
        addDays(data.duration.to, 1),
        data.duration.from
      ), // check numberOfDays again incase value was change on DOM input field, used dateRange values since they are not visible on DOM
    };
    console.log(data);
  };

  return (
    <div className="flex flex-grow flex-col p-4 gap-2 w-full">
      <header className="flex px-4 py-2">
        <h3 className="text-2xl md:text-4xl">Create campaign</h3>
      </header>
      <section className="max-w-7xl w-full h-full px-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2 text-lg">
            <p className="md:text-2xl">General</p>
            <input
              type="text"
              {...register("title")}
              placeholder="Title"
              className="input input-bordered md:max-w-md"
            />
            {errors.title && (
              <p className="text-rose-500">{errors.title?.message}</p>
            )}
            <input
              type="text"
              {...register("websiteLink")}
              placeholder="Website Link"
              className="input input-bordered md:max-w-md"
            />
            {errors.websiteLink && (
              <p className="text-rose-500">{errors.websiteLink?.message}</p>
            )}
            <textarea
              {...register("description")}
              placeholder="Description"
              className="textarea textarea-bordered resize-none md:max-w-md text-base appearance-none"
            />
            {errors.description && (
              <p className="text-rose-500">{errors.description?.message}</p>
            )}
            <p className="md:text-2xl">Requirements</p>
            <input
              type="number"
              {...register("videoLength")}
              placeholder="Video length (seconds)"
              className="input input-bordered md:max-w-md"
            />
            {errors.videoLength && (
              <p className="text-rose-500">{errors.videoLength?.message}</p>
            )}
            <input
              type="text"
              {...register("videoTags")}
              placeholder="Video hashtags (comma separated)"
              className="input input-bordered md:max-w-md"
            />
            {errors.videoTags && (
              <p className="text-rose-500">{errors.videoTags?.message}</p>
            )}
            <p className="md:text-2xl">Duration</p>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <DateRangePicker
                  className="input input-bordered md:max-w-md h-12 bg-transparent hover:bg-transparent hover:text-base-content"
                  onChange={(e: DateRange) => {
                    setValue(
                      "numberOfDays",
                      e === undefined ||
                        e.from === undefined ||
                        e.to === undefined
                        ? 0
                        : differenceInCalendarDays(addDays(e.to, 1), e.from),
                      { shouldTouch: true, shouldValidate: true }
                    );
                    onChange(e);
                  }}
                  {...{ onBlur, value }}
                />
              )}
              name="duration"
            />
            {errors.duration && (
              <p className="text-rose-500">{errors.duration?.message}</p>
            )}
            {errors.duration?.from && (
              <p className="text-rose-500">{errors.duration?.from?.message}</p>
            )}
            {errors.duration?.to && (
              <p className="text-rose-500">{errors.duration?.to?.message}</p>
            )}
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      className="btn md:max-w-md disabled:bg-transparent disabled:text-base-content"
                      variant={"ghost"}
                      disabled
                    >{`${value ?? 0} day(s)`}</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <input
                      className="hidden"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value ?? 0}
                      readOnly
                    />
                  </PopoverContent>
                </Popover>
              )}
              name="numberOfDays"
            />
            {errors.numberOfDays && (
              <p className="text-rose-500">{errors.numberOfDays?.message}</p>
            )}
            <Button
              className="btn md:max-w-md btn-neutral text-neutral-content border border-base-content"
              variant="ghost"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-loader-quarter animate-spin"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 6l0 -3" />
                  <path d="M6 12l-3 0" />
                  <path d="M7.75 7.75l-2.15 -2.15" />
                </svg>
              )}
              Publish
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateCampaignPage;
