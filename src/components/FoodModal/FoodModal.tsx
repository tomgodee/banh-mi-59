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
  useBreakpointValue,
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
  const screenSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={handleClose}
      isCentered
      size={screenSize === "sm" ? "sm" : "2xl"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            gap={8}
            py={4}
            flexDirection={screenSize === "sm" ? "column" : "row"}
          >
            <Box width="50%">
              <Image
                className={styles.image}
                src={getImage(food.image)}
                priority
                alt={food.name}
                aria-label={food.name}
              />
            </Box>

            <Flex
              flexDirection="column"
              width={screenSize === "sm" ? "100%" : "50%"}
            >
              <Text fontSize="3xl" fontWeight="bold" mb={4}>
                {food.name}
              </Text>
              <UnorderedList mb={screenSize === "sm" ? 6 : 2}>
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
