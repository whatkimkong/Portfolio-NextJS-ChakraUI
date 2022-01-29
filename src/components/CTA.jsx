import {
  Link as ChakraLink,
  HStack,
  Circle,
  Popover,
  PopoverBody,
  PopoverArrow,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import { PhoneIcon, AtSignIcon} from "@chakra-ui/icons";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { Container } from "./Container";
import { useColorMode } from '@chakra-ui/react'


export const CTA = () => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'tomato', dark: 'orange.300' }

  const color = { light: 'black', dark: 'white' }
  return (
  <Container
    flexDirection="row"
    position="fixed"
    bottom="0"
    width="100%"
    maxWidth="48rem"
    
    py={3}
  >
  <ChakraLink
      flexGrow={2}
      mx={2}
    ><Popover>
      <PopoverTrigger>
        <HStack>
          <Circle size="40px" bg={bgColor[colorMode]}
      color={color[colorMode]}>
            <AtSignIcon/>
          </Circle>
        </HStack>
      </PopoverTrigger>
      <PopoverContent borderColor='orange.300'>
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
    <ChakraLink
      isExternal
      href="https://linkedin.com/whatkimkong"
      flexGrow={2}
      mx={2}
    ><HStack>
        <Circle size="40px" bg="tomato" color="white">
          <FaLinkedinIn />
        </Circle>
      </HStack>
    </ChakraLink>
  </Container>
  )
};
