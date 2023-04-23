import Image from "next/image";

import { getImage } from "@/utils";
import {
  Box,
  Flex,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

import styles from "./FoodModal.module.scss";

import type { Food } from "@/types";

interface FoodModalProps {
  food: Food;
  isModalOpen: boolean;
  handleClose: () => void;
}

export const FoodModal = (props: FoodModalProps) => {
  const { food, isModalOpen, handleClose } = props;

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={handleClose}
      isCentered
      size={{
        base: "sm",
        sm: "2xl",
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody px={6} pt={{ base: 12, md: 6 }} pb={{ base: 6, md: 4 }}>
          <Flex gap={8} flexDirection={{ base: "column", md: "row" }}>
            <Box width={{ base: "100%", md: "50%" }}>
              <Image
                className={styles.image}
                src={getImage(food.image)}
                priority
                alt={food.name}
                aria-label={food.name}
              />
            </Box>

            <Flex flexDirection="column" width={{ base: "100%", md: "50%" }}>
              <Text fontSize="3xl" fontWeight="bold" mb={4}>
                {food.name}
              </Text>
              <UnorderedList mb={{ base: 6, md: 2 }}>
                {food.ingredients.map((ingredient) => (
                  <ListItem key={ingredient.name} fontSize="lg">
                    {ingredient.name}
                  </ListItem>
                ))}
              </UnorderedList>
              <Text fontSize="xl" color="orange.500" mt="auto">
                Price: {food.price}
              </Text>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
