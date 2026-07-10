import { Flex, FlexProps, useColorMode } from '@chakra-ui/react'
import { Color } from '../types'

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode()

  const bgColor: Color = { light: 'gray.50', dark: 'gray.900' }
  const color: Color = { light: 'black', dark: 'white' }

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}
