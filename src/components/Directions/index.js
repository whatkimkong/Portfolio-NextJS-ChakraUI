import {
    Flex,
  } from "@chakra-ui/react";
  import { Link } from "./Link";
  
  export const Directions = () => {
    return (
      <Flex
        alignItems="center"
        justifyContent="space-evenly"
        width='100%'
        height="100vh"
        mt='-40vh'
      > <Link title='Previous' direction='previous'/>
        <Link title='Next' direction='next'/>
      </Flex>
    );
  };
  
  Directions.defaultProps = {
    title: "Next",
    direction: "next",
  };
  