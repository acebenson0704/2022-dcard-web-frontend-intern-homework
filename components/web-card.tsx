import { Center, Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

const MotionLinkBox = motion(LinkBox);

type WebCardProps = {
  href: string;
  title: string;
  children: ReactNode;
};

const WebCard = ({ href, title, children }: WebCardProps) => {
  return (
    <MotionLinkBox
      as="article"
      h="100%"
      p="5"
      borderWidth="1px"
      rounded="md"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Heading size="md" my="2">
        <LinkOverlay href={href} target="_blank">
          <Center>{title}</Center>
        </LinkOverlay>
      </Heading>
      <Text mb="3" textAlign="center">
        {children}
      </Text>
    </MotionLinkBox>
  );
};

export default WebCard;
