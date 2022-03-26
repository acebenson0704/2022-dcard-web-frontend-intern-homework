import React from 'react';
import { Box, Code, Divider, Heading, HStack, Link } from '@chakra-ui/react';

export const markdownTheme = {
  h1: (props: any) => {
    const { children } = props;

    return (
      <Box my={6}>
        <Heading as="h1" size="xl" display="flex" textAlign="center">
          {children.length > 1 ? (
            <HStack align="end" spacing={4}>
              {children}
            </HStack>
          ) : (
            children
          )}
        </Heading>
        <Divider mt={2} />
      </Box>
    );
  },
  h2: (props: any) => {
    const { children } = props;
    return (
      <Box my={4}>
        <Heading as="h2" size="lg">
          {children}
        </Heading>
        <Divider mt={2} />
      </Box>
    );
  },
  h3: (props: any) => {
    const { children } = props;
    return (
      <Box my={2}>
        <Heading as="h3" size="md">
          {children}
        </Heading>
      </Box>
    );
  },
  a: (props: any) => {
    const { children } = props;
    return <Link color="#58A6FF">{children}</Link>;
  },
  code: (props: any) => {
    const { inline, children, className } = props;

    if (inline) {
      return <Code children={children} />;
    }

    Code;
    return (
      <Code
        className={className}
        whiteSpace="break-spaces"
        d="block"
        w="full"
        my={2}
        p={2}
        children={children}
      />
    );
  },
  img: () => {
    return null;
  }
};
