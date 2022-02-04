import {
    Flex, Heading, Text
  } from "@chakra-ui/react";
  import { Link } from "./Link";
  import { useRouter } from "next/router";

  export const Directions = () => {
    const router = useRouter();
    const { id } = router.query;
    
    const next = () => {
      if (id >= 5) {
        return <Text></Text>;
      } else if (id < 5) {
        return <Link title='Next' direction='next'/>
      }
    }

    return (
      <Flex
        alignItems="center"
        justifyContent="space-evenly"
        width='100%'
        height="100vh"
        mt='-40vh'
      > <Link title='Previous' direction='previous'/>
        {next()}
      </Flex>
    );
  };
  
  Directions.defaultProps = {
    title: "Next",
    direction: "next",
  };
  