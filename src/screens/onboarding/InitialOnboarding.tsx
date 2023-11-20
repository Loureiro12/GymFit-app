import { StatusBar } from "react-native";
import { VStack, ScrollView, Image, Center } from "@gluestack-ui/themed";

import Logo from "@assets/logo.png";
import { Button } from "@components/Button";

export function InitialOnboarding() {
  function handleNext() {}

  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle={"dark-content"} translucent />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <VStack
          flex={1}
          bg={"$white"}
          justifyContent="space-between"
          marginBottom={40}
        >
          <VStack />
          <Center>
            <Image
              source={Logo}
              alt="Logo Gym Fit"
              role="img"
              width={283}
              height={199}
            />
          </Center>
          <VStack paddingLeft={30} paddingRight={30}>
            <Button title="Iniciar" />
          </VStack>
        </VStack>
      </ScrollView>
    </>
  );
}
