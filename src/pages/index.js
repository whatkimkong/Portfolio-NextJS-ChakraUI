import {
  Image
} from "@chakra-ui/react";
import { Headline } from "../components/Headline";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";

const Index = () => {
  return (
  <Container height="100vh">
    <Headline />
    <Image
        mt='-90vh'
        ml='-50vw'
        borderRadius="full"
        boxSize="200px"
        loading="eager"
        src="/CVphotoPink.jpeg"
        alt="Dan Abramov"
        fallbackSrc="https://via.placeholder.com/150"
    />
    <DarkModeSwitch />
    <CTA />
  </Container>
  )
};

export default Index;