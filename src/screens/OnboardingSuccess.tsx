import { StatusBar } from 'react-native';

import { VStack, Text, Image } from '@gluestack-ui/themed';

import BloomManSuccessfully from '@assets/bloom-man-successfully.png';

import { Button } from '@components/Button';

function OnboardingSuccess() {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" translucent />
      <VStack flex={1} bg="$white" justifyContent="center" padding={30} alignItems="center">
        <VStack maxWidth={218}>
          <Text
            color="$black100"
            fontSize="$xl"
            fontWeight="$bold"
            textAlign="center"
            lineHeight="$xl"
            marginBottom="$2"
          >
            Tudo pronto, Gabriel!{' '}
          </Text>
          <Text
            color="$black200"
            fontSize="$xs"
            fontWeight="$normal"
            lineHeight="$xs"
            marginBottom="$5"
            textAlign="center"
          >
            Você está pronto, agora vamos alcançar seus objetivos junto com a gente
          </Text>
        </VStack>

        <VStack width="$full" height="$2/5">
          <Image
            source={BloomManSuccessfully}
            alt="Pessoa treinando"
            role="img"
            resizeMode="contain"
            width="$full"
            height="$full"
          />
        </VStack>

        <Text
          color="$black200"
          fontSize="$xs"
          fontWeight="$normal"
          lineHeight="$xs"
          textAlign="center"
          marginTop="$6"
          marginBottom="$12"
        >
          Veja seu treino e aproveite o GymFit
        </Text>
        <Button title="Continuar" />
      </VStack>
    </>
  );
}

export default OnboardingSuccess;
