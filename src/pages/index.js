import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Image,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import { Hero } from "../components/Heading";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import CVphoto from "../../public/images/CVphoto.png";

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <Image
        borderRadius="full"
        boxSize="150px"
        src={CVphoto}
        alt="Dan Abramov"
        fallbackSrc="https://via.placeholder.com/150"
      />
    </Main>
    <DarkModeSwitch />
    <Footer>
      <Text>Welcome</Text>
    </Footer>
    <CTA />
  </Container>
);

export default Index;