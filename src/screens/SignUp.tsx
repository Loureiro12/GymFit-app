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
  CheckboxLabel,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckIcon,
} from "@gluestack-ui/themed";
import { User } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Facebook from "@assets/svgs/facebook.svg";
import Google from "@assets/svgs/google.svg";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useState } from "react";

type FormDataProps = {
  fist_name: string;
  last_name: string;
  email: string;
  password: string;
};

const signUpSchema = yup.object({
  fist_name: yup
    .string()
    .required("Informe o primeiro nome")
    .min(3, "Nome muito curto"),
  last_name: yup
    .string()
    .required("Informe o Sobrenome")
    .min(3, "Sobrenome muito curto"),
  email: yup.string().email("E-mail inválido").required("Informe o e-mail"),
  password: yup.string().required("Informe a senha"),
});

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const [acceptedTerm, setAcceptedTerm] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignUp = (data: FormDataProps) => {

    if (!acceptedTerm) {
      console.log("precisa aceitar os termos de uso e política de privacidade");
      return
    }

    console.log("data", data);

    // navigation.navigate("SelectUserType");
  };

  return (
    <>
      <StatusBar
        backgroundColor="white"
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
              Crie sua conta!
            </Heading>
            <Controller
              control={control}
              name="fist_name"
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Primeiro nome"
                  icon={User}
                  mb={15}
                  onChangeText={onChange}
                  error={!!errors.fist_name}
                  errorMensagem={errors.fist_name?.message}
                  autoCorrect={false}
                />
              )}
            />

            <Controller
              control={control}
              name="last_name"
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Ultimo nome"
                  icon={User}
                  mb={15}
                  onChangeText={onChange}
                  error={!!errors.last_name}
                  errorMensagem={errors.last_name?.message}
                  autoCorrect={false}
                />
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Email"
                  icon={MailIcon}
                  mb={15}
                  onChangeText={onChange}
                  error={!!errors.email}
                  errorMensagem={errors.email?.message}
                  keyboardType="email-address"
                  autoCorrect={false}
                  autoCapitalize="none"
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Senha"
                  icon={LockIcon}
                  onChangeText={onChange}
                  error={!!errors.password}
                  errorMensagem={errors.password?.message}
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              )}
            />

            <Box mt={20}>
              <Checkbox
                size="md"
                isInvalid={false}
                isDisabled={false}
                value="aceitar-termos"
                aria-label="Aceitar termos de uso e política de privacidade"
                onChange={() => setAcceptedTerm(!acceptedTerm)}
              >
                <CheckboxIndicator mr={10}>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel fontSize={"$xs"} textAlign="justify">
                  Aceitar a Política de Privacidade e Termos de Uso.
                </CheckboxLabel>
              </Checkbox>
            </Box>
          </VStack>

          <VStack alignItems="center">
            <Button title="Cadastrar" onPress={handleSubmit(handleSignUp)} />

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

            <ButtonText
              fontWeight="$normal"
              fontSize={"$sm"}
              color="$black100"
              onPress={() => navigation.navigate("SignIn")}
            >
              já tem uma conta? Conecte-se
            </ButtonText>
          </VStack>
        </VStack>
      </ScrollView>
    </>
  );
}
