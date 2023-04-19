import Image from "next/image";
import NextLink from "next/link";

import logo from "@/public/logo.jpeg";
import { Box, Flex, Link, useBreakpointValue } from "@chakra-ui/react";

import styles from "./Header.module.scss";

export const Header = () => {
  const screenSize = useBreakpointValue({ base: "xs", sm: "sm" });

  return (
    <Flex
      justifyContent="space-between"
      alignItems={screenSize === "xs" ? "flex-start" : "center"}
      position="sticky"
      width="100vw"
      className={styles.header}
      flexDirection={screenSize === "xs" ? "column" : "row"}
      py={4}
    >
      <Box ml={[6, 16, 20, 24, 40, 80]}>
        <Link as={NextLink} href="/">
          <Image
            src={logo}
            alt="Logo"
            width={90}
            height={90}
            aria-label="Banh mi 59 homepage"
          />
        </Link>
      </Box>

      <Flex mt={[4, 0]} ml={[6, 0]} mr={[0, 16, 20, 24, 40, 80]}>
        <nav>
          <ul className={styles.headerNavList}>
            <li>
              <Link
                as={NextLink}
                href="/about"
                fontSize="xl"
                fontWeight="bold"
                className={styles.link}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                as={NextLink}
                href="/menu"
                fontSize="xl"
                fontWeight="bold"
                className={styles.link}
              >
                Menu
              </Link>
            </li>
          </ul>
        </nav>
      </Flex>
    </Flex>
  );
};
