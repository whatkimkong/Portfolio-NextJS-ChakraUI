import { Flex, Heading, useColorMode, Text, Code } from "@chakra-ui/react";
import Image from "./Image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Projects = ({ title, description, image, status }) => {
  const projects = [
    {
      title: "You're on one already!",
      description:
        "Portfolio showcasing the behind the scene builds and the variety of designs",
      status: "pre-launch",
      image:
        "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Howdiy",
      description: "hey why cant I see this",
      status: "pre-launch",
      image:
        "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "KanKan",
      description: "",
      status: "pre-launch",
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
      image:
        "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Devotox",
      description: "",
      status: "launched",
      image:
        "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
  ];


  const router = useRouter();
  const { id } = router.query;

  if (id) {
    const p = projects[id];
    console.log("here is p", p);
    console.log("heres the ID", id);
  }

  const { title, description, image, status } = p;

  const { colorMode } = useColorMode();
  const color = { light: "tomato", dark: "orange.300" };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="50vh"
      mt="-35vh"
    >
      <Heading pb="4vh" fontSize="4vw" color={color[colorMode]}>
        {title}
      </Heading>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        height="50vh"
        mr="4vw"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          height="50vh"
          mx="4vw"
        >
          <Text fontSize="lg" color={color[colorMode]}>
            {description}
          </Text>
          <Text pt="3vh" fontSize="1xl" color={color[colorMode]}>
            Status: <Code>{status}</Code>
          </Text>
        </Flex>
        <Image key={id} url={image} alt={image} />
      </Flex>
    </Flex>
  );
};
