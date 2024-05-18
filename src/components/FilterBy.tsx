import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FilterBy = ({
  defaultValue,
  label,
  items,
}: {
  defaultValue?: string;
  label?: string;
  items: { value: string; label: string }[];
}) => {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger className="size-full h-[48px]">
        <SelectValue placeholder={label ?? "Select item..."} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {items.map((item) => {
            return (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterBy;
