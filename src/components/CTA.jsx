import {
  Link as ChakraLink,
  HStack,
  Circle,
  Popover,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import { PhoneIcon, AtSignIcon, CopyIcon } from "@chakra-ui/icons";

import { SiGithub } from "react-icons/si";

import { Container } from "./Container";

export function CTA() {

  return (
  <Container
    flexDirection="row"
    position="fixed"
    bottom="0"
    width="100%"
    maxWidth="48rem"
    py={2}
  >
  <ChakraLink
      flexGrow={2}
      mx={2}
    ><Popover>
      <PopoverTrigger>
        <HStack>
          <Circle size="40px" bg="tomato" color="white">
            <AtSignIcon />
          </Circle>
        </HStack>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>whatkimkong@gmail.com</PopoverBody>
      </PopoverContent>
    </Popover>
    </ChakraLink>
    <ChakraLink
      flexGrow={2}
      mx={2}
    >
    <Popover>
      <PopoverTrigger>
        <HStack>
          <Circle size="40px" bg="tomato" color="white">
            <PhoneIcon />
          </Circle>
        </HStack>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>+34601904284 [mon-fri 10-6]</PopoverBody>
      </PopoverContent> 
    </Popover>
    </ChakraLink>
    <ChakraLink
      isExternal
      href="https://github.com/whatkimkong"
      flexGrow={2}
      mx={2}
    ><HStack>
        <Circle size="40px" bg="tomato" color="white">
          <SiGithub />
        </Circle>
      </HStack>
    </ChakraLink>
  </Container>
  )
};
