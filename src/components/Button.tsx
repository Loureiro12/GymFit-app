import {
  Button as ButtonNativeBase,
  ButtonSpinner,
  ButtonText,
} from "@gluestack-ui/themed";

import { ComponentProps } from "react";

export interface Props extends ComponentProps<typeof ButtonNativeBase> {
  title: string;
  variant?: "solid" | "outline";
  loading?: boolean;
}

export function Button({ title, variant = "solid", loading, ...rest }: Props) {
  return (
    <ButtonNativeBase
      h={60}
      width={"$full"}
      rounded={"$full"}
      bg={variant === "solid" ? "$yellow10" : "$white"}
      {...rest}
    >
      {loading && (
        <ButtonSpinner
          mr="$5"
          color={variant === "solid" ? "$white" : "$yellow10"}
        />
      )}
      <ButtonText
        fontSize={"$md"}
        fontWeight="$bold"
        color={variant === "solid" ? "$white" : "$yellow10"}
      >
        {loading ? "Carregando..." : title}
      </ButtonText>
    </ButtonNativeBase>
  );
}
