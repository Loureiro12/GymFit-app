import { StatusBar } from "react-native";
import { Heading, Text, VStack, Image, ScrollView } from "@gluestack-ui/themed";

import BackgroundImg from "@assets/onboarding/Frame3.png";

import { ProgressButton } from "@components/ProgressButton";

export function EatWell() {
  function handleNext() {}

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
      >
        <VStack flex={1} bg={"$white"} justifyContent="space-between">
          <VStack maxHeight={450}>
            <Image
              source={BackgroundImg}
              alt="Pessoas treinando"
              role="img"
              resizeMode="cover"
              position="relative"
              width={"$full"}
              height={"$full"}
            />
          </VStack>
          <VStack
            paddingLeft={30}
            paddingRight={30}
            marginTop={20}
            justifyContent="center"
            alignContent="space-between"
          >
            <Heading fontSize={"$2xl"} color="$black100">
              Comer bem
            </Heading>
            <Text fontSize={"$sm"} mt={10} color="$black200" lineHeight={"$md"}>
              Vamos começar um estilo de vida saudável conosco, podemos
              determinar sua dieta todos os dias. alimentação saudável é
              divertido
            </Text>
            <VStack alignItems="flex-end" marginBottom={40}>
              <ProgressButton onPress={() => {}} />
            </VStack>
          </VStack>

          <VStack />
        </VStack>
      </ScrollView>
    </>
  );
}
