import Image from "next/image";
import NextLink from "next/link";

import logo from "@/public/logo.png";
import { Box, Flex, Link } from "@chakra-ui/react";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems={{ base: "flex-start", sm: "center" }}
      position="sticky"
      width="100vw"
      className={styles.header}
      flexDirection={{ base: "column", sm: "row" }}
      py={4}
    >
      <Box ml={[10, 16, 20, 24, 40, 80]}>
        <Link as={NextLink} href="/">
          <Image
            src={logo}
            alt="Logo"
            width={140}
            height={140}
            aria-label="Banh mi 59 homepage"
          />
        </Link>
      </Box>

      <Flex mt={[4, 0]} ml={[10, 0]} mr={[0, 16, 20, 24, 40, 80]}>
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
