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

import Facebook from "@assets/svgs/facebook.svg";
import Google from "@assets/svgs/google.svg";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNext() {
    navigation.navigate("EatWell");
  }

  return (
    <>
      <StatusBar
        backgroundColor="#FFD600"
        barStyle={"dark-content"}
        translucent
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        backgroundColor="white"
      >
        <VStack
          flex={1}
          bg={"$white"}
          justifyContent="space-around"
          padding={30}
        >
          <VStack alignItems="center">
            <Text fontSize={"$md"} fontWeight="$normal">
              Olá,
            </Text>
            <Heading fontSize={"$xl"} fontWeight="$bold" marginBottom={46}>
              Bem-vindo!
            </Heading>
            <Input placeholder="Email" icon={MailIcon} mb={15} />
            <Input placeholder="Senha" icon={LockIcon} />

            <ButtonText
              marginTop={10}
              color="#ADA4A5"
              fontSize={"$sm"}
              textDecorationLine="underline"
            >
              Esqueceu sua senha?
            </ButtonText>
          </VStack>

          <VStack alignItems="center">
            <Button title="Entrar" />

            <HStack alignItems="center" marginBottom={30} marginTop={30}>
              <Box width={"40%"} height={1} bgColor="#DDDADA" />
              <Text marginLeft={10} marginRight={10}>
                ou
              </Text>
              <Box width={"40%"} height={1} bgColor="#DDDADA" />
            </HStack>

            <HStack marginBottom={30}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  alignItems: "center",
                  height: 50,
                  width: 50,
                  borderWidth: 1,
                  borderColor: "#DDDADA",
                  justifyContent: "center",
                  borderRadius: 8,
                  marginRight: 30,
                }}
              >
                <Facebook width={20} height={20} />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  alignItems: "center",
                  height: 50,
                  width: 50,
                  borderWidth: 1,
                  borderColor: "#DDDADA",
                  justifyContent: "center",
                  borderRadius: 8,
                }}
              >
                <Google width={20} height={20} />
              </TouchableOpacity>
            </HStack>

            <ButtonText fontWeight="$normal" fontSize={"$sm"} color="$black100">
              Não tem uma conta ainda? Registre-se
            </ButtonText>
          </VStack>
        </VStack>
      </ScrollView>
    </>
  );
}
