import { TextInputProps } from 'react-native';

import {
  FormControl,
  InputField,
  Input as NativeBaseInput,
  Icon,
  FormControlErrorText,
  FormControlError,
} from '@gluestack-ui/themed';

export type Props = TextInputProps & {
  errorMensagem?: string | null;
  error?: boolean;
  placeholder: string;
  icon?: unknown;
  mb?: number;
  width?: string;
};

export function Input({
  errorMensagem = null,
  placeholder,
  width,
  error,
  icon,
  mb,
  ...rest
}: Props) {
  return (
    <FormControl width={width || '$full'} marginBottom={mb} isInvalid={error}>
      <NativeBaseInput
        height={58}
        width="$full"
        rounded={14}
        backgroundColor="#F7F8F8"
        borderWidth={1}
        justifyContent="center"
        alignItems="center"
        paddingLeft={15}
        {...rest}
      >
        {icon && <Icon as={icon} color="#7B6F72" />}
        <InputField placeholder={placeholder} color="#ADA4A5" fontSize="$md" {...rest} />
      </NativeBaseInput>
      <FormControlError>
        <FormControlErrorText>{errorMensagem}</FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}
