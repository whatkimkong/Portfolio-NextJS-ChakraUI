import {
    Link as ChakraLink,
    Image,
  } from "@chakra-ui/react";
  import { Headline } from "../components/Headline";
  import { Container } from "../components/Container";
  import { Main } from "../components/Main";
  import { DarkModeSwitch } from "../components/DarkModeSwitch";
  import { CTA } from "../components/CTA";
  import CVphoto from "../../public/images/CVphoto.png";
  import { Projects } from "../components/Projects";
  // import Link from 'next/link';
  
  const Project = () => (
    <Container height="100vh">
      <Headline />
      <Main>
        <Image
          borderRadius="full"
          boxSize="150px"
          src={CVphoto}
          alt="Dan Abramov"
          fallbackSrc="https://via.placeholder.com/150"
        />
        <ChakraLink href="/project">next</ChakraLink>
        <Projects/>
      </Main>
      <DarkModeSwitch />
      <CTA />
    </Container>
  );
  
  export default Project;