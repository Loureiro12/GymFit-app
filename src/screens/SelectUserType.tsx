import { StatusBar, TouchableOpacity } from "react-native";
import {
  Heading,
  Text,
  VStack,
  ScrollView,
  MailIcon,
  LockIcon,
  ButtonText,
  HStack,
  Box,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Button } from "@components/Button";

export function SelectUserType() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const handleButton = () => {
    navigation.navigate("CompleteUserInformation");
  };

  return (
    <>
      <StatusBar
        backgroundColor="#FFD600"
        barStyle={"dark-content"}
        translucent
      />

      <VStack flex={1} bg={"$yellow10"} justifyContent="center" padding={30}>
        <Text
          color="$black100"
          fontSize={"$3xl"}
          fontWeight="$bold"
          lineHeight={"$2xl"}
          marginBottom={"$10"}
        >
          Você quer se cadastrar como aluno ou treinador?
        </Text>
        <Button
          title="Treinador"
          variant="black"
          marginBottom={"$5"}
          onPress={handleButton}
        />
        <Button title="Aluno" variant="black" onPress={handleButton} />
      </VStack>
    </>
  );
}
