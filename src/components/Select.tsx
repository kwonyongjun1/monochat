import { Select as PrimitiveSelect } from "radix-ui";
import { cn } from "@/utils/cn";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

interface SelectProps {
  placeholder?: string;
  item: { label: string; value: string }[];
  defaultValue?: string;
  handleChange?: (value: string) => void;
}

const Select = ({
  placeholder,
  item,
  defaultValue,
  handleChange,
}: SelectProps) => {
  return (
    <PrimitiveSelect.Root
      onValueChange={handleChange}
      defaultValue={defaultValue}
    >
      <PrimitiveSelect.Trigger
        className="inline-flex h-[35px] items-center justify-center gap-[5px] rounded bg-white px-[15px] text-[13px] leading-none text-violet11 shadow-[0_2px_10px] shadow-black/10 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9"
        aria-label="lang"
      >
        <PrimitiveSelect.Value placeholder={placeholder} />
        <PrimitiveSelect.Icon className="text-violet11">
          <ChevronDownIcon />
        </PrimitiveSelect.Icon>
      </PrimitiveSelect.Trigger>
      <PrimitiveSelect.Portal>
        <PrimitiveSelect.Content className="overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <PrimitiveSelect.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-violet11">
            <ChevronUpIcon />
          </PrimitiveSelect.ScrollUpButton>
          <PrimitiveSelect.Viewport className="p-[5px]">
            {item.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </PrimitiveSelect.Viewport>
          <PrimitiveSelect.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-violet11">
            <ChevronDownIcon />
          </PrimitiveSelect.ScrollDownButton>
        </PrimitiveSelect.Content>
      </PrimitiveSelect.Portal>
    </PrimitiveSelect.Root>
  );
};

const SelectItem = ({
  children,
  className,
  ...props
}: PrimitiveSelect.SelectItemProps) => {
  return (
    <PrimitiveSelect.Item
      className={cn(
        "relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none text-violet11 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 data-[highlighted]:outline-none",
        className
      )}
      {...props}
    >
      <PrimitiveSelect.ItemText>{children}</PrimitiveSelect.ItemText>
      <PrimitiveSelect.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
        <CheckIcon />
      </PrimitiveSelect.ItemIndicator>
    </PrimitiveSelect.Item>
  );
};

export default Select;
