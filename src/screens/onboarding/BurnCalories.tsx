import { StatusBar, TouchableOpacity } from "react-native";
import { Heading, Text, VStack, Image, ScrollView } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

import BackgroundImg from "@assets/onboarding/Frame2.png";

import { ProgressButton } from "@components/ProgressButton";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function BurnCalories() {
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
              Queime calorias
            </Heading>
            <Text fontSize={"$sm"} mt={10} color="$black200" lineHeight={"$md"}>
              Vamos continuar queimando, para alcançar seus objetivos, apenas no
              começo doí depois vem o resultado.
            </Text>
            <VStack
              alignItems="flex-end"
              flexDirection="row"
              justifyContent="space-between"
              marginBottom={40}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("SignIn")}
              >
                <Text color="$warmGray400">Pular</Text>
              </TouchableOpacity>
              <ProgressButton onPress={handleNext} />
            </VStack>
          </VStack>

          <VStack />
        </VStack>
      </ScrollView>
    </>
  );
}
