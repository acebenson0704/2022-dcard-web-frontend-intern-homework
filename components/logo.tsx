import { HStack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';
import { BsGithub } from 'react-icons/bs';

const LogoBox = styled.span`
&:hover svg {
 transform: rotate(20deg)
`;

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <HStack fontSize="18px" fontWeight="bold">
            <BsGithub />
            <Text ml={3}>Home</Text>
          </HStack>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
