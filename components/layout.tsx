import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';

import Navbar from './navbar';
import OfficialWeb from './official-web';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>GitHub repositories browser</title>
      </Head>

      <Navbar />

      <Box pt={[4, 8, 16]}>
        <OfficialWeb />
      </Box>

      <Container maxW="container.lg" pt={16}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
