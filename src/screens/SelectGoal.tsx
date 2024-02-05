import { FlatList, StatusBar } from "react-native";
import { VStack, Text, ScrollView } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Button } from "@components/Button";
import { CarouselCardWithImage } from "@components/CarouselCardWithImage";

import Hypertrophy from "@assets/goal/hypertrophy.png";
import ImproveShape from "@assets/goal/improve_shape.png";
import LoseFat from "@assets/goal/lose_fat.png";
import { useState } from "react";

const selectOption = [
  {
    id: "1",
    title: "Hipertrofia",
    description: "Eu quero aprender a adicionar  músculo da maneira certa",
    image: Hypertrophy,
  },
  {
    id: "2",
    title: "Melhorar a forma",
    description:
      "Tenho uma quantidade baixa de gordura corporal e preciso/quero construir mais músculos",
    image: ImproveShape,
  },
  {
    id: "3",
    title: "Perder gordura",
    description: "Eu quero largar toda essa gordura e ganhar massa muscular",
    image: LoseFat,
  },
];

export function SelectGoal() {
  const [isSelected, setIsSelected] = useState("");
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  return (
    <>
      <StatusBar
        backgroundColor="white"
        barStyle={"dark-content"}
        translucent
      />
      <VStack
        flex={1}
        justifyContent="center"
        alignItems="center"
        borderStartColor={"$white"}
      >
        <VStack
          alignItems="center"
          paddingLeft={"$7"}
          paddingRight={"$7"}
          w={"$full"}
        >
          <Text
            fontSize={"$xl"}
            fontWeight="$bold"
            lineHeight={"$2xl"}
            color="$black100"
          >
            Qual é o seu objetivo?
          </Text>
          <Text
            fontSize={"$md"}
            fontWeight="$normal"
            color="$black200"
            textAlign="center"
            marginBottom={"$7"}
          >
            Isso nos ajudará a escolher o melhor programa para você
          </Text>
        </VStack>

        <ScrollView
          horizontal
          maxHeight={478}
          showsHorizontalScrollIndicator={false}
          margin={20}
        >
          {selectOption &&
            selectOption.map((item) => {
              return (
                <CarouselCardWithImage
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  isSelected={isSelected === item.id}
                  onPress={() => {
                    setIsSelected(item.id);
                  }}
                />
              );
            })}
        </ScrollView>

        <VStack paddingLeft={"$7"} paddingRight={"$7"} w={"$full"}>
          <Button
            title="Continuar"
            disabled={isSelected.length === 0}
            onPress={() => navigation.navigate("AddCoach")}
          />
        </VStack>
      </VStack>
    </>
  );
}
