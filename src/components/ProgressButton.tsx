import { Icon, Button, ChevronRightIcon } from '@gluestack-ui/themed';

type Props = {
  onPress: () => void;
};

function ProgressButton({ onPress }: Props) {
  return (
    <Button
      w={60}
      h={60}
      marginTop={70}
      justifyContent="center"
      alignItems="center"
      borderRadius={50}
      backgroundColor="$yellow10"
      onPress={onPress}
    >
      <Icon as={ChevronRightIcon} color="$white" size="xl" />
    </Button>
  );
}

export default ProgressButton;
