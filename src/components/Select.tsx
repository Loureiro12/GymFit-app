import {
  Select as SelectUi,
  Icon,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  ChevronDownIcon,
} from "@gluestack-ui/themed";
import { ComponentProps } from "react";

interface SelectProps extends ComponentProps<typeof SelectUi> {
  placeholder: string;
  icon?: any;
  items: {
    label: string;
    value: string;
  }[];
}

export function Select({ placeholder, icon, items, ...rest }: SelectProps) {
  return (
    <SelectUi width={"$full"} height={58}>
      <SelectTrigger
        variant="outline"
        size="md"
        rounded={14}
        height={58}
        width={"$full"}
        backgroundColor="#F7F8F8"
        paddingLeft={icon ? 15 : 0}
        {...rest}
      >
        {icon && <Icon as={icon} color="#7B6F72" />}
        <SelectInput placeholder={placeholder} />
        <SelectIcon mr="$3">
          <Icon as={ChevronDownIcon} />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>

          {items &&
            items.map((item) => (
              <SelectItem
                key={item.value}
                label={item.label}
                value={item.value}
              />
            ))}
        </SelectContent>
      </SelectPortal>
    </SelectUi>
  );
}
