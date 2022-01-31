import {
  Flex,
  Heading,
  useColorMode,
  Link as ChakraLink,
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
          href="/project"
          borderRadius='15px'
          py="2px"
          px="10px"
          _hover={{
            bg: bgColor[colorMode],
            transform: "scale(0.98)",
            border: "none",
          }}
          _active={{
            border: "none",
          }}
          _focus={{
            border: "none",
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}
          textDecoration="none"
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
