import {
  Image
} from "@chakra-ui/react";
import { Headline } from "../components/Headline";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import CVphoto from "../../public/images/CVphoto.png";
import { Projects } from "../components/Projects";
// import Link from 'next/link';

const Index = () => {
  return (
  <Container height="100vh">
    <Headline />
    <Image
        mt='-90vh'
        ml='-50vw'
        borderRadius="full"
        boxSize="150px"
        src={CVphoto}
        alt="Dan Abramov"
        fallbackSrc="https://via.placeholder.com/150"
    />
    <DarkModeSwitch />
    <CTA />
  </Container>
  )
};

export default Index;