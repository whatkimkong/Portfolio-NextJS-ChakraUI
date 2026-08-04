import {
    Image,
  } from "@chakra-ui/react";
  import { Container } from "../../../components/Container";
  import { Main } from "../../../components/Main";
  import { DarkModeSwitch } from "../../../components/DarkModeSwitch";
  import { CTA } from "../../../components/CTA";
  import { PageNavigator } from "../../../components/PageNavigator";
  import { Projects } from "../../../components/Projects";
  
  const Project = () => {
    return (
      <Container height="100vh">
        <PageNavigator direction='Next'/>
        <Projects/>
        <DarkModeSwitch />
        <CTA />
      </Container>
    )
  };
  
  export default Project;