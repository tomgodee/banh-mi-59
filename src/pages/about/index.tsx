import Image from "next/image";

import banhmi from "@/public/banhmi.jpg";
import hero from "@/public/hero.jpg";
import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

export default function About() {
  const screenSize = useBreakpointValue({ base: "md", lg: "lg" });

  return (
    <Flex flexDirection="column">
      <Image
        src={hero}
        sizes="100vw"
        priority
        alt="Hero image"
        aria-label="Hero image"
        style={{ width: "100%", minHeight: 150 }}
      />
      <Flex mx={[10, 16, 20, 24, 40, 80]} mt={8} flexDirection="column">
        <Flex
          justifyContent="stretch"
          flexDirection={screenSize === "md" ? "column" : "row"}
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            width={screenSize === "md" ? "100%" : "50%"}
            bg="orange.100"
            py="auto"
          >
            <Text px={4} py={screenSize === "md" ? 2 : 0} fontSize="lg">
              We are a local store dedicated to bringing the authentic taste of
              Vietnamese baguettes to food lovers around the world. Vietnamese
              baguette, also known as Bánh mì, is a culinary creation that has
              its roots in the French colonial era of Vietnam. The baguette was
              introduced to Vietnam by the French in the late 19th century, and
              it quickly became a staple food in the country. However, the
              Vietnamese people made it their own by incorporating their own
              flavors and ingredients, such as pickled carrots, lettuce,
              cilantro, and a variety of meats and spreads, to create a unique
              fusion of French and Vietnamese cuisine. Our passion for creating
              delicious, fresh, and crispy baguettes has been inspired by this
              rich history, and we are committed to upholding the tradition
              while also exploring new and exciting flavors to delight our
              customers. Join us on this journey of discovering the true essence
              of Vietnamese baguettes, steeped in history and full of flavor.
            </Text>
          </Flex>
          <Box width={screenSize === "md" ? "100%" : "50%"}>
            <Image
              style={{ height: "100%", width: "100%" }}
              src={banhmi}
              priority
              alt=" Baguette"
              aria-label=" Baguette"
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
