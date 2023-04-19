import Image from "next/image";

import { getImage } from "@/utils";
import { Flex, Text } from "@chakra-ui/react";

import styles from "./FoodItem.module.scss";

import type { Food } from "@/types";

interface FoodItemProps {
  food: Food;
  handleClick: (food: Food) => void;
}

export const FoodItem = (props: FoodItemProps) => {
  const { food, handleClick } = props;

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      borderRadius={8}
      className={styles.container}
      onClick={() => handleClick(food)}
    >
      <Image
        className={styles.image}
        src={getImage(food.image)}
        priority
        alt="Beef Baguette"
        aria-label="Beef Baguette"
      />

      <Text fontSize="2xl" my={4} textAlign="center">
        {food.name}
      </Text>
      <Text fontSize="2xl" mt="auto" pb={4} color="orange.500">
        {food.price}
      </Text>
    </Flex>
  );
};
