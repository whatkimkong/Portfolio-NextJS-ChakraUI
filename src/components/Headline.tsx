import {
  Flex,
  Heading,
  useColorMode,
  Link as ChakraLink,
  LinkProps,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Color } from "../types";

type HeadlineProps = LinkProps & {
  title: string;
  children: React.ReactNode;
};

export const Headline = ({ title, children, ...props}: HeadlineProps) => {
  const { colorMode } = useColorMode();
  
  const color: Color = { light: "tomato", dark: "orange.300" };
  const bgColor: Color = { light: "#ebedf0", dark: "gray.700" };

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
          {children}<ArrowForwardIcon />
        </ChakraLink>
      </Heading>
    </Flex>
  );
};
