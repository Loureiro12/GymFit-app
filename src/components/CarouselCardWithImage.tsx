import {
  VStack,
  Text,
  Image,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckIcon,
} from "@gluestack-ui/themed";
import { useState } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type CarouselCardWithImageProps = TouchableOpacityProps & {
  title: string;
  description: string;
  image: string;
  isSelected: boolean;
};

export function CarouselCardWithImage({
  title,
  description,
  image,
  isSelected,
  ...rest
}: CarouselCardWithImageProps) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      style={{
        backgroundColor: "#FFD600",
        borderRadius: 24,
        padding: 28,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        maxHeight: 478,
        width: 275,
        opacity: isSelected ? 0.3 : 1,
      }}
    >
      <VStack width={"80%"} height={"70%"}>
        {image && (
          <Image
            source={image}
            alt="Pessoa treinando"
            role="img"
            resizeMode="contain"
            width={"$full"}
            height={"$full"}
          />
        )}
      </VStack>
      <Text
        color="$white"
        fontSize={"$lg"}
        fontWeight="$semibold"
        marginBottom={"$3"}
        marginTop={"$5"}
      >
        {title}
      </Text>
      <Text
        color="$white"
        fontSize={"$md"}
        fontWeight="$normal"
        textAlign="center"
      >
        {description}
      </Text>
    </TouchableOpacity>
  );
}
