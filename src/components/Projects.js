import {
  Flex,
  Heading,
  useColorMode,
  Text,
  Code,
  Link as ChakraLink,
  HStack,
  Circle,
  FormControl,
  FormLabel,
  useBoolean,
  Wrap, WrapItem
} from "@chakra-ui/react";
import Image from "./Image";
import { useRouter } from "next/router";
import { SiGithub } from "react-icons/si";
import { Switch } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner"
import { Repos } from "./Repos.ts";
import { NoCodeJS } from "./NoCodeJS.ts";

export const Projects = () => {
  
  const projects = [...Repos, ...NoCodeJS];

  const [flag, setFlag] = useBoolean();
  const router = useRouter();
  const { id } = router.query;
  const p = projects[id];

  const { colorMode } = useColorMode();
  const color = {
    light: "tomato",
    dark: "orange.300",
  };
  const bgColor = {
    light: "red.600",
    dark: "orange.800",
  };
  const iconColor = {
    light: "white",
    dark: "black",
  };
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="50vh"
      mt="-35vh"
    >
      {!p ? (
        <Spinner speed='0.8s' color={color[colorMode]} size="xl"/>
      ) : (
        <>
          <Heading pb="4vh" fontSize="4vw" color={color[colorMode]}>
            {p.title}
          </Heading>
          <Wrap spacing='30px' justify='center'>
          <WrapItem width='30vw'>
            <Flex
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              height="50vh"
              ml="4vw">
              <Text fontSize="2vh" color={color[colorMode]}>
                {p.description}
              </Text>
              <Text pt="3vh" fontSize="2vh" color={color[colorMode]}>
                Status: <Code> {p.status} </Code>
              </Text>
              <FormControl display="flex" alignItems="center" justifyContent="center" mt="2vh">
              <FormLabel htmlFor="github-toggle" mb="0" color={color[colorMode]} fontSize="2vh">
                preview code
              </FormLabel>
              <Switch id="github-toggle" onChange={setFlag.toggle} />
              </FormControl>
              <Flex
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
              height="10vh">
              {p.serverUrl ? (
                <Text color={color[colorMode]}> Server </Text>
              ) : null}
              {p.serverUrl ? (
                <ChakraLink isExternal href={p.serverUrl} flexGrow={2} mx={2}>
                  <HStack>
                    <Circle
                      size="40px"
                      bg={bgColor[colorMode]}
                      color={iconColor[colorMode]}
                    
                    >
                      <SiGithub />
                    </Circle>
                  </HStack>
                </ChakraLink>
              ) : null}
              {p.clientUrl ? (
                <Text color={color[colorMode]}> Client </Text>
              ) : null}
              {p.clientUrl ? (
                <ChakraLink isExternal href={p.clientUrl} flexGrow={2} mx={2}>
                  <HStack>
                    <Circle
                      size="40px"
                      bg={bgColor[colorMode]}
                      color={iconColor[colorMode]}
                    >
                      <SiGithub />
                    </Circle>
                  </HStack>
                </ChakraLink>
              ) : null}
              </Flex>
            </Flex>
            </WrapItem>
            <WrapItem width='50vw' justify='center'>
            {flag === true ? (
              <Image key={id} url={p.githubImage} alt={p.githubImage} />
            ) : (
              <Image key={id} url={p.image} alt={p.image} />
            )}
            </WrapItem>
          </Wrap>
        </>
      )}
    </Flex>
  );
};

// Flex
// justifyContent="center"
//  alignItems="center"
//  flexDirection="row"
//  height="50vh"
//  mr="4vw">