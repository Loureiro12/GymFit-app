import { StatusBar } from "react-native";
import { Heading, Text, VStack, Image, ScrollView } from "@gluestack-ui/themed";

import BackgroundImg from "@assets/onboarding/Frame4.png";

import { ProgressButton } from "@components/ProgressButton";

export function LetImproveSleep() {
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
              Vamos melhorar o sono
            </Heading>
            <Text fontSize={"$sm"} mt={10} color="$black200" lineHeight={"$md"}>
              Melhore a qualidade do seu sono connosco, um sono de boa qualidade
              pode trazer bom humor pela manhã
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
