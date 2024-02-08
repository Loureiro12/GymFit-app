import { useEffect } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
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
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Facebook from '@assets/svgs/facebook.svg';
import Google from '@assets/svgs/google.svg';

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import ONBOARDING_COMPLETED from '@storage/storageConfig';

import { Button } from '@components/Button';
import { Input } from '@components/Input';

type FormDataProps = {
  email: string;
  password: string;
};

const signInSchema = yup.object({
  email: yup.string().email('E-mail inválido').required('Informe o e-mail'),
  password: yup.string().required('Informe a senha'),
});

function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  });

  const onboardingCompleted = async () => {
    await AsyncStorage.setItem(ONBOARDING_COMPLETED, 'true');
  };

  const handleSignUp = async (data: FormDataProps) => {
    console.log('Login', data);
  };

  useEffect(() => {
    onboardingCompleted();
  }, []);

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" translucent />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : undefined}
          enabled
          style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
          }}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            backgroundColor="white"
          >
            <VStack flex={1} bg="$white" justifyContent="space-around" padding={30}>
              <VStack alignItems="center">
                <Text fontSize="$md" fontWeight="$normal">
                  Olá,
                </Text>
                <Heading fontSize="$xl" fontWeight="$bold" marginBottom={46}>
                  Bem-vindo!
                </Heading>
                <Controller
                  control={control}
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
                  name="email"
                />

                <Controller
                  control={control}
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
                  name="password"
                />

                <ButtonText
                  marginTop="$2.5"
                  color="#ADA4A5"
                  fontSize="$sm"
                  textDecorationLine="underline"
                  marginBottom="$4"
                >
                  Esqueceu sua senha?
                </ButtonText>
              </VStack>

              <VStack alignItems="center">
                <Button title="Entrar" onPress={handleSubmit(handleSignUp)} />

                <HStack alignItems="center" marginBottom={30} marginTop={30}>
                  <Box width="40%" height={1} bgColor="#DDDADA" />
                  <Text marginLeft={10} marginRight={10}>
                    ou
                  </Text>
                  <Box width="40%" height={1} bgColor="#DDDADA" />
                </HStack>

                <HStack marginBottom={30}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                      alignItems: 'center',
                      height: 50,
                      width: 50,
                      borderWidth: 1,
                      borderColor: '#DDDADA',
                      justifyContent: 'center',
                      borderRadius: 8,
                      marginRight: 30,
                    }}
                  >
                    <Facebook width={20} height={20} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                      alignItems: 'center',
                      height: 50,
                      width: 50,
                      borderWidth: 1,
                      borderColor: '#DDDADA',
                      justifyContent: 'center',
                      borderRadius: 8,
                    }}
                  >
                    <Google width={20} height={20} />
                  </TouchableOpacity>
                </HStack>

                <ButtonText
                  fontWeight="$normal"
                  fontSize="$sm"
                  color="$black100"
                  onPress={() => navigation.navigate('SignUp')}
                >
                  Não tem uma conta ainda? Registre-se
                </ButtonText>
              </VStack>
            </VStack>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
}

export default SignIn;
