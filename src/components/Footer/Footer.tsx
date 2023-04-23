import Image from "next/image";

import google_maps from "@/public/google_maps.png";
import tripadvisor from "@/public/tripadvisor.png";
import { Box, Flex, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <>
      <Flex
        p={10}
        bg="red.50"
        justifyContent="center"
        gap={10}
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Box>
          <Text fontWeight="bold" fontSize="lg" mb={4}>
            CONTACT
          </Text>
          <Box>
            Address:{" "}
            <a href="https://goo.gl/maps/iXBFcn6DN4fSxEwA8" target="_blank">
              59b Cửa Nam, Hoàn Kiếm, Hà Nội
            </a>
          </Box>
        </Box>
        <Box>
          <Text fontWeight="bold" fontSize="lg" mb={4}>
            FOLLOW & RATE US
          </Text>
          <Flex alignItems="center">
            <Image
              src={google_maps}
              alt="Google Maps"
              aria-label="Google Maps"
              height={8}
              width={22}
            />
            <Text ml={1}>
              <a href="https://goo.gl/maps/iXBFcn6DN4fSxEwA8" target="_blank">
                Google Maps
              </a>
            </Text>
          </Flex>
          <Flex alignItems="center" mt={2}>
            <Image
              src={tripadvisor}
              alt="Tripadvisor"
              aria-label="Tripadvisor"
              height={8}
              width={22}
            />
            <Text ml={1}>
              <a
                href="https://www.tripadvisor.com.vn/Restaurant_Review-g293924-d25344067-Reviews-Banh_mi_59-Hanoi.html"
                target="_blank"
              >
                Tripadvisor
              </a>
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Box p={3} bg="orange.200" textAlign="center">
        <Text fontWeight="bold">
          Site made by{" "}
          <span>
            <a href="https://tomgodee.github.io/resume/" target="_blank">
              Tom
            </a>
          </span>
        </Text>
      </Box>
    </>
  );
};
