import { Flex, Heading, useColorMode } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import Image from './Image';

export const Projects = () => {
  const projects = [
    {
      title: "You're on one already!",
      description: "",
      image:
        "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "",
      description: "",
      image:
        "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "",
      description: "",
      image:
        "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "",
      description: "",
      image:
        "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "",
      description: "",
      image:
        "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "",
      description: "",
      image:
        "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
  ];

  const router = useRouter();
  const { id } = router.query;
  const p = projects[id];

    const { colorMode } = useColorMode()
  const color = { light: 'tomato', dark: 'orange.300' }

  return (
  <Flex justifyContent="center" alignItems="center" flexDirection="column" height="50vh">
    <Heading
      fontSize="4vw"
      color={color[colorMode]}
    >
      {title}
    </Heading>
    <Image key={images[0]} url={images[0]} alt={images[0]} />
  </Flex>
  )
}

Projects.defaultProps = {
  title: 'Project',
}
