import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import FoodItem from "@/components/FoodItem";
import FoodModal from "@/components/FoodModal";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

import { baguetteItems, bunboItems, drinkItems } from "@/database";
import styles from "./menu.module.scss";

import type { Food } from "@/types";

export default function Menu() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState<Food>(baguetteItems[0]);

  const baguetteRef = useRef<HTMLDivElement>(null);
  const bunboRef = useRef<HTMLDivElement>(null);

  const handleClickFoodItem = (food: Food) => {
    setSelectedFood(food);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (bunboRef?.current && "Bún Bò Nam Bộ" === router.query.name) {
      bunboRef.current.scrollIntoView();
    }
    if (baguetteRef?.current && "Vietnamese Baguette" === router.query.name) {
      baguetteRef.current.scrollIntoView();
    }
  }, [bunboRef, baguetteRef, router.query.name]);

  return (
    <Flex mx={[6, 16, 20, 24, 40, 80]} mt={8} flexDirection="column">
      <Box position="relative" py={4} ref={baguetteRef}>
        <Text
          color="orange-500"
          fontSize="4xl"
          fontWeight="bold"
          className={styles.titleMenu}
        >
          Vietnamese Baguette
        </Text>
      </Box>

      <SimpleGrid minChildWidth="240px" spacing={10}>
        {baguetteItems.map((food) => (
          <FoodItem
            key={food.name}
            food={food}
            handleClick={handleClickFoodItem}
          />
        ))}
      </SimpleGrid>

      <Box position="relative" py={4} mt={16} ref={bunboRef}>
        <Text
          color="orange-500"
          fontSize="4xl"
          fontWeight="bold"
          className={styles.titleMenu}
        >
          Bún Bò Nam Bộ
        </Text>
      </Box>

      <SimpleGrid minChildWidth="240px" spacing={10}>
        {bunboItems.map((food) => (
          <FoodItem
            key={food.name}
            food={food}
            handleClick={handleClickFoodItem}
          />
        ))}
        {/* Stub some empty boxes for the grid parent */}
        <Box />
        <Box />
        <Box />
      </SimpleGrid>

      <Box position="relative" py={4} mt={16}>
        <Text
          color="orange-500"
          fontSize="4xl"
          fontWeight="bold"
          className={styles.titleMenu}
        >
          Drinks
        </Text>
      </Box>

      <SimpleGrid minChildWidth="240px" spacing={10}>
        {drinkItems.map((food) => (
          <FoodItem
            key={food.name}
            food={food}
            handleClick={handleClickFoodItem}
          />
        ))}
      </SimpleGrid>

      <FoodModal
        food={selectedFood}
        isModalOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
      />
    </Flex>
  );
}
