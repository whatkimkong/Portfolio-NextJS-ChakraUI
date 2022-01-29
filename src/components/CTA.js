import { Link as ChakraLink, Button, HStack, Circle  } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'

import { Container } from './Container'

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom="0"
    width="100%"
    maxWidth="48rem"
    py={2}
  >
    <ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mx={2}>
      <Button width="100%" bgGradient="linear(to-tr, teal.300,yellow.400)">
        chakra-ui
      </Button>
    </ChakraLink>

    <ChakraLink
      isExternal
      href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui"
      flexGrow={1}
      mx={2}
    ><HStack>
      <Circle size='40px' bg='tomato' color='white'>
       <PhoneIcon />
      </Circle>
    </HStack>
    </ChakraLink>
  </Container>
)
