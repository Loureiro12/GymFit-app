import {
  Button as ButtonNativeBase,
  ButtonSpinner,
  ButtonText,
} from "@gluestack-ui/themed";

import { ComponentProps } from "react";

type VariantePros = "solid" | "outline" | 'black'

export interface Props extends ComponentProps<typeof ButtonNativeBase> {
  title: string;
  variant?: VariantePros
  loading?: boolean;
}

const buttonColorVariation: {
  [key in VariantePros]: string
} = {
  solid: '$yellow10',
  outline: "$white",
  black: '$black100',
}

const buttonTextColorVariation: {
  [key in VariantePros]: string
} = {
  solid: '$white',
  outline: "$yellow10",
  black: '$white',
}

export function Button({ title, variant = "solid", loading, ...rest }: Props) {
  return (
    <ButtonNativeBase
      h={60}
      width={"$full"}
      rounded={"$full"}
      bg={buttonColorVariation[variant]}
      {...rest}
    >
      {loading && (
        <ButtonSpinner
          mr="$5"
          color={buttonTextColorVariation[variant]}
        />
      )}
      <ButtonText
        fontSize={"$md"}
        fontWeight="$bold"
        color={buttonTextColorVariation[variant]}
      >
        {loading ? "Carregando..." : title}
      </ButtonText>
    </ButtonNativeBase>
  );
}
