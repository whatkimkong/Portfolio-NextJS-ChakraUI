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
  Switch,
  Spinner,
  useBoolean,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { SiGithub } from "react-icons/si";
import { Repos } from "./Repos";
import { NoCodeJS } from "./NoCodeJS";
import Embed from "../Embed.js";
import { Color } from "../types.js";

export interface Project {
    title: string;
    description: string;
    status: string;
    serverUrl?: string;
    clientUrl?: string;
    repoUrl?: string;
    image: Object;
    imageDark?: Object;
    githubImage?: Object;
}

export const Projects = () => {
  
  const projects: Project[] = [...Repos, ...NoCodeJS];

  const [flag, setFlag] = useBoolean();
  const router = useRouter();
  const id = Number(router.query.id!);
  const p: Project = projects[id];

  const { colorMode } = useColorMode();
  const color: Color = {
    light: "tomato",
    dark: "orange.300",
  };
  const bgColor: Color = {
    light: "red.600",
    dark: "orange.800",
  };
  const iconColor: Color = {
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
              ) : <Text color={color[colorMode]}> Source Code </Text>}
                <ChakraLink isExternal href={p.clientUrl ?? p.repoUrl} flexGrow={2} mx={2}>
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
              </Flex>
            </Flex>
            </WrapItem>
            <WrapItem width='50vw' display='flex' justifyContent='center'>
            {flag === true ? (
              <Embed key={id} url={p.githubImage} alt={p.githubImage} />
            ) : (
              <Embed key={id} url={p.image} alt={p.image} />
            )}
            </WrapItem>
          </Wrap>
        </>
      )}
    </Flex>
  );
};
