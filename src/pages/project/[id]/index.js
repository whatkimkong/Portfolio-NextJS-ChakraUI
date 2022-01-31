import {
    Image,
  } from "@chakra-ui/react";
  import { Container } from "../../../components/Container";
  import { Main } from "../../../components/Main";
  import { DarkModeSwitch } from "../../../components/DarkModeSwitch";
  import { CTA } from "../../../components/CTA";
  import { Directions } from "../../../components/Directions";
  import { Projects } from "../../../components/Projects";
  import CVphoto from "../../../../public/images/CVphoto.png";
  // import Link from 'next/link';
  
  const Project = () => (
    <Container height="100vh">
      <Directions />
      <Projects/>
      <DarkModeSwitch />
      <CTA />
    </Container>
  );
  
  export default Project;