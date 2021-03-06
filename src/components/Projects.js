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
import { SpinnerIcon } from '@chakra-ui/icons';
import { Switch } from "@chakra-ui/react";
import { ImSpinner3 } from "react-icons/im";
import { Spinner } from "@chakra-ui/spinner"

export const Projects = () => {
  const projects = [
    {
      title: "You're on one already!",
      description:
        "Portfolio showcasing the behind the scene builds and the variety of designs",
      status: "pre-launch",
      serverUrl: "",
      clientUrl: "",
      image:
        "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Howdiy",
      description:
        "A community-building app surrounding natural DIY recipes, pair-programmed and conceptualised by myself and @emballeur",
      status: "pre-launch",
      serverUrl: "https://github.com/emballeur/howdiy-server",
      clientUrl: "https://github.com/emballeur/howdiy-client",
      githubImage:
        "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      image:
        "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "KanKan",
      description: "",
      status: "pre-launch",
      serverUrl: "",
      clientUrl: "",
      image:
        "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Haiku",
      description: "",
      status: "pre-launch",
      image:
        "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Empress Voroti",
      description: "",
      status: "pre-launch",
      serverUrl: "",
      clientUrl: "",
      image:
        "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Devotox",
      description: "",
      status: "launched",
      serverUrl: "",
      clientUrl: "",
      image:
        "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
  ];

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
//             alignItems="center"
//             flexDirection="row"
//             height="50vh"
//             mr="4vw">