import { Sofia_Sans } from "next/font/google";
import NextLink from "next/link";
import { useState } from "react";

import FoodItem from "@/components/FoodItem";
import FoodModal from "@/components/FoodModal";
import MenuItem from "@/components/MenuItem";
import {
  Box,
  Flex,
  Link,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import styles from "./Body.module.scss";

import type { Food } from "@/types";

const SofiaSans = Sofia_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const menuItems = [{ name: "Bún Bò Nam Bộ" }, { name: "Vietnamese Baguette" }];

const foods = [
  {
    name: "Beef Baguette",
    price: "30.000đ",
    image: "beef_baguette",
    ingredients: [
      {
        name: "Beef",
      },
      {
        name: "Lettuce",
      },
      {
        name: "Coriander",
      },
      {
        name: "Cucumber",
      },
      {
        name: "Mayonnaise (Optional)",
      },
      {
        name: "Chilli (Optional)",
      },
    ],
  },
  {
    name: "Traditional Baguette",
    price: "20.000đ",
    image: "traditional_baguette",
    ingredients: [
      {
        name: "Lettuce",
      },
    ],
  },
  {
    name: "Bún Bò Nam Bộ",
    price: "40.000đ",
    image: "bunbo",
    ingredients: [
      {
        name: "Noodles",
      },
      {
        name: "Beef",
      },
      {
        name: "Lettuce",
      },
      {
        name: "Mung Bean Sprouts",
      },
      {
        name: "Peanuts",
      },
      {
        name: "Sweetened Fish Sauce",
      },
    ],
  },
];

export const Body = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState<Food>(foods[0]);

  const screenSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });

  const handleClickFoodItem = (food: Food) => {
    setSelectedFood(food);
    setIsModalOpen(true);
  };

  return (
    <Flex mx={[10, 16, 20, 24, 40, 80]} mt={8} flexDirection="column">
      <Box position="relative" py={4}>
        <Text
          fontSize="4xl"
          fontWeight="bold"
          className={styles.titleBestseller}
        >
          Bestsellers
        </Text>
      </Box>

      <Flex
        justifyContent="space-between"
        className={SofiaSans.className}
        flexWrap="wrap"
      >
        {foods.map((food, index) => (
          <Box
            key={food.name}
            width={
              screenSize === "sm" ? "100%" : screenSize === "md" ? "48%" : "31%"
            }
            mb={
              (screenSize === "sm" || screenSize === "md") &&
              index !== foods.length - 1
                ? 8
                : 0
            }
          >
            <FoodItem food={food} handleClick={handleClickFoodItem} />
          </Box>
        ))}
      </Flex>

      <Box position="relative" py={4} mt={10}>
        <Text
          color="orange-500"
          fontSize="4xl"
          fontWeight="bold"
          className={styles.titleMenu}
        >
          Menu
        </Text>
      </Box>

      <SimpleGrid
        minChildWidth="320px"
        spacing={10}
        className={SofiaSans.className}
      >
        {menuItems.map((menuItem) => (
          <Link
            as={NextLink}
            href={`/menu?name=${menuItem.name}`}
            className={styles.link}
            key={menuItem.name}
          >
            <MenuItem menuItem={menuItem} />
          </Link>
        ))}
      </SimpleGrid>

      <FoodModal
        food={selectedFood}
        isModalOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
      />
    </Flex>
  );
};
