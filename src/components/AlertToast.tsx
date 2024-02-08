import {
  Toast,
  ToastDescription,
  ToastTitle,
  VStack,
} from "@gluestack-ui/themed";

type AlertToastProps = {
  title: string;
  description: string;
  action?: "error" | "warning" | "success" | "info" | "attention" | undefined;
};

export function AlertToast({ title, description, action }: AlertToastProps) {
  return (
    <Toast action={action} variant="accent">
      <VStack space="xs">
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </VStack>
    </Toast>
  );
}
