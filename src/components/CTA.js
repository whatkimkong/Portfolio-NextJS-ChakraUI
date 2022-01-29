import {
  Link as ChakraLink,
  HStack,
  Circle,
  Popover,
  PopoverBody,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import { PhoneIcon, AtSignIcon } from "@chakra-ui/icons";

import { Container } from "./Container";

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom="0"
    width="100%"
    maxWidth="48rem"
    py={2}
  >
    <Popover flexGrow={1} mx={2}>
      <PopoverTrigger>
        <HStack>
          <Circle size="40px" bg="tomato" color="white">
            <AtSignIcon />
          </Circle>
        </HStack>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Email me at:</PopoverHeader>
        <PopoverBody>whatkimkong@gmail.com</PopoverBody>
      </PopoverContent>
    </Popover>

    <ChakraLink
      isExternal
      href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui"
      flexGrow={1}
      mx={2}
    >
      <HStack>
        <Circle size="40px" bg="tomato" color="white">
          <PhoneIcon />
        </Circle>
      </HStack>
    </ChakraLink>
  </Container>
);
