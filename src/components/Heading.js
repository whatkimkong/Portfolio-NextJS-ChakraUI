import { Flex, Heading, useColorMode } from '@chakra-ui/react'

export const Heading = ({ title }) => {
  const { colorMode } = useColorMode()
  
  const color = { light: 'tomato', dark: 'orange.300' }
  return (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Heading
      fontSize="8vw"
      color={color[colorMode]}
    >
      {title}
    </Heading>
  </Flex>
  )
}

Heading.defaultProps = {
  title: 'Portfolio',
}
