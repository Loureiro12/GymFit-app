import { StatusBar } from "react-native";
import { VStack, ScrollView, Image, Text, HStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

import CompleteUserInformationImg from "@assets/CompleteUserInformationImg.png";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Select } from "@components/Select";
import { Input } from "@components/Input";
import { CalendarDays, Ruler, Users, Weight } from "lucide-react-native";
import { Button } from "@components/Button";

const selectOption = [
  { label: "Masculino", value: "masculino" },
  { label: "Feminino", value: "Feminino" },
  { label: "Prefiro não informar", value: "Não informado" },
];

export function SelectGoal() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

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
        padding={30}
      >
        <VStack
          flex={1}
          bg={"$white"}
          justifyContent="center"
          alignItems="center"
        >
          <VStack height={300} width={"$full"}>
            <Image
              source={CompleteUserInformationImg}
              alt="Pessoas treinando"
              role="img"
              resizeMode="contain"
              width={"$full"}
              height={"$full"}
            />
          </VStack>

          <VStack marginBottom={"$7"} alignItems="center">
            <Text fontSize={"$xl"} fontWeight="bold" color="$black100">
              Vamos completar seu perfil
            </Text>
            <Text fontSize={"$xs"} fontWeight="$normal" color="$black200">
              Isso nos ajudará a saber mais sobre você!
            </Text>
          </VStack>

          <Select
            placeholder="Escolha seu sexo"
            items={selectOption}
            icon={Users}
          />

          <Input
            placeholder="Data de aniversário"
            icon={CalendarDays}
            marginBottom={"$3.5"}
            marginTop={"$3.5"}
          />

          <HStack
            width={"$full"}
            justifyContent="space-between"
            marginBottom={"$3.5"}
          >
            <Input placeholder="Seu peso" icon={Weight} width={"$5/6"} />
            <VStack
              bg="$black100"
              height={58}
              width={48}
              borderRadius={14}
              justifyContent="center"
              alignItems="center"
            >
              <Text color="$white" fontSize={"$xs"} fontWeight="$bold">
                KG
              </Text>
            </VStack>
          </HStack>

          <HStack
            width={"$full"}
            justifyContent="space-between"
            marginBottom={"$7"}
          >
            <Input placeholder="Sua altura" icon={Ruler} width={"$5/6"} />
            <VStack
              bg="$black100"
              height={58}
              width={48}
              borderRadius={14}
              justifyContent="center"
              alignItems="center"
            >
              <Text color="$white" fontSize={"$xs"} fontWeight="$bold">
                CM
              </Text>
            </VStack>
          </HStack>

          <Button title="Continuar" />
        </VStack>
      </ScrollView>
    </>
  );
}
