import { StatusBar } from "react-native";
import {
  VStack,
  ScrollView,
  Image,
  Text,
  LockIcon,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

import CompleteUserInformationImg from "@assets/CompleteUserInformationImg.png";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Select } from "@components/Select";
import { Input } from "@components/Input";
import { CalendarDays, Users } from "lucide-react-native";

const selectOption = [
  { label: "Masculino", value: "masculino" },
  { label: "Feminino", value: "Feminino" },
  { label: "Prefiro não informar", value: "Não informado" },
];

export function CompleteUserInformation() {
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

          <VStack>
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

          <Input placeholder="Data de aniversário" icon={CalendarDays} />
        </VStack>
      </ScrollView>
    </>
  );
}
