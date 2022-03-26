import React from 'react';
import { Box, Container, HStack } from '@chakra-ui/react';

import Logo from './logo';
import Searchbar from './searchbar';

const Navbar = (props: any) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      p={2}
      bg="gray.900"
      style={{ backdropFilter: 'blur(10px' }}
      zIndex={200}
      {...props}
    >
      <Container display="flex" maxW="container.lg">
        <HStack w="100%">
          <Box mr={5}>
            <Logo />
          </Box>
          <Box flexGrow={1}>
            <Searchbar />
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
