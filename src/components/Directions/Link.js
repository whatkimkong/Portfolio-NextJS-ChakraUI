import {
    Heading,
    useColorMode,
    Link as ChakraLink,
  } from "@chakra-ui/react";
  import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
  import { useRouter } from "next/router";
  
  export const Link = ({ title, direction}) => {
    const { colorMode } = useColorMode();
  
    const color = { light: "tomato", dark: "orange.300" };
    const bgColor = { light: "#ebedf0", dark: "gray.700" };


    const router = useRouter();
    const { id } = router.query;
    
    const href = () => {
      if (direction === 'previous' && id === 0 ) {
        return "/"
      } else if (direction === 'previous') {
        return `/project/${Number(id)-1}`
      } else if (direction === 'next') {
        return `/project/${Number(id)+1}`
      }
    } 
  
    return (
      <>
        <Heading fontSize="3vw" color={color[colorMode]}>
          <ChakraLink
            href={href()}
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
          > {direction === 'previous' && <ArrowBackIcon/>} {title} {direction === 'next' && <ArrowForwardIcon/>}
          </ChakraLink>
        </Heading>
      </>
    );
  };
  
  Link.defaultProps = {
    title: "next",
    direction: 'next'
  };