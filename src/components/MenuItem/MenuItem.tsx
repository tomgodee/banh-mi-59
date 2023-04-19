import Image from "next/image";

// import menu_baguette from "@/public/menu_baguette.jpg";
import menu_baguette from "@/public/menu_baguette.jpg";
import { Box, Text } from "@chakra-ui/react";

import styles from "./MenuItem.module.scss";

import type { MenuItem as MenuItemType } from "@/types";

interface MenuItemProps {
  menuItem: MenuItemType;
}

export const MenuItem = (props: MenuItemProps) => {
  const { menuItem } = props;
  return (
    <Box className={styles.menuItemContainer}>
      <Image
        className={styles.menuItemImage}
        src={menu_baguette}
        height={480}
        priority
        alt={menuItem.name}
        aria-label={menuItem.name}
      />

      <Text fontSize="5xl" fontWeight="bold" className={styles.menuItemTitle}>
        {menuItem.name}
      </Text>
    </Box>
  );
};
