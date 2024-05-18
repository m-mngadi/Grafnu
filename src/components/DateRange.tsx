import { useState } from "react";
import { addDays, differenceInCalendarDays, format } from "date-fns";
import { IconCalendar } from "@tabler/icons-react";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const useDateRangePicker = () => {
  const [selectedDateRange, setSelectedDateRange] = useState<
    DateRange | undefined
  >({ from: undefined, to: undefined });

  const handleDateSelect = (dateRange: DateRange | undefined) => {
    setSelectedDateRange(dateRange);
  };

  const numberOfDays =
    selectedDateRange === undefined ||
    selectedDateRange.from === undefined ||
    selectedDateRange.to === undefined
      ? 0
      : differenceInCalendarDays(
          selectedDateRange?.to,
          selectedDateRange?.from
        );

  return {
    selectedDateRange,
    handleDateSelect,
    numberOfDays,
  };
};

export const DateRangePicker = (props: {
  value: DateRange | undefined;
  className: any;
  onChange: any;
  onBlur: any;
}) => {
  const disabledDays = [
    { from: new Date(1900, 1, 1), to: addDays(new Date(), -1) },
  ];

  const { className, onChange, onBlur, value } = props;

  return (
    <div className={"grid gap-2"}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"ghost"}
            className={`w-full justify-start text-left font-normal ${className} ${
              !value && "text-muted-foreground"
            }`}
          >
            <IconCalendar className="mr-2 h-4 w-4" />
            {value?.from ? (
              value.to ? (
                <>
                  {format(value?.from, "LLL dd, y")} -{" "}
                  {format(value?.to, "LLL dd, y")}
                </>
              ) : (
                format(value.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={value?.from}
            selected={value}
            onSelect={onChange}
            numberOfMonths={1}
            disabled={disabledDays}
            onDayBlur={onBlur}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
