import { StatusBar } from "react-native";
import { Heading, Text, VStack, Image, ScrollView } from "@gluestack-ui/themed";

import BackgroundImg from "@assets/onboarding/Frame.png";

import { ProgressButton } from "@components/ProgressButton";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function TrackYourGoal() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNext() {
    navigation.navigate("BurnCalories");
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
              Acompanhe seu objetivo
            </Heading>
            <Text fontSize={"$sm"} mt={10} color="$black200" lineHeight={"$md"}>
              Não se preocupe se você tiver problemas para determinar seus
              objetivos, podemos ajudá-lo a determinar seus objetivos e
              acompanhar seus objetivos
            </Text>
            <VStack alignItems="flex-end" marginBottom={40}>
              <ProgressButton onPress={handleNext} />
            </VStack>
          </VStack>

          <VStack />
        </VStack>
      </ScrollView>
    </>
  );
}
