import {
  Flex,
  Heading,
  useColorMode,
  Link as ChakraLink
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export const Headline = ({ title, props
 }) => {
  const { colorMode } = useColorMode();

  const color = { light: "tomato", dark: "orange.300" };
  const bgColor = { light: "#ebedf0", dark: "gray.700" };
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="100vh"
    >
      <Heading fontSize="8vw" color={color[colorMode]}>
        {title}
      </Heading>
      <Heading fontSize="3vw" color={color[colorMode]}>
        <ChakraLink {...props}
          href="/project/0"
          borderRadius='15px'
          py="2px"
          px="10px"
          _hover={{ bg: bgColor[colorMode], transform: "scale(0.98)" }}
        >
          View Projects <ArrowForwardIcon />
        </ChakraLink>
      </Heading>
    </Flex>
  );
};

Headline.defaultProps = {
  title: "Portfolio",
};
