import React, { ReactNode } from 'react';
import NextLink from 'next/link';
import {
  Avatar,
  Badge,
  Box,
  HStack,
  IconButton,
  LinkBox,
  LinkOverlay,
  Spacer,
  Text
} from '@chakra-ui/react';
import { BiGitRepoForked, BiStar } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';

import { RepoInfoProps } from '../../libs/repo';
import { motion } from 'framer-motion';

type RepoItemProps = {
  href: string;
  children: ReactNode;
  repoInfo: RepoInfoProps;
};

const RepoItem = ({ href, repoInfo }: RepoItemProps) => {
  const MotionLinkMox = motion(LinkBox);
  return (
    <MotionLinkMox
      cursor="pointer"
      w="100%"
      h="100%"
      borderWidth={2}
      borderStyle="solid"
      p={4}
      whileHover={{
        'margin-left': '8px',
        backgroundColor: 'rgba(55, 55, 55, 1)'
      }}
      transition={{ duration: 0.1 }}
    >
      <HStack>
        <Avatar mr={2} src={repoInfo.avatar_url}></Avatar>
        <Box>
          <Box color="blue.400" fontSize="xl" fontWeight="bold">
            {repoInfo.fullname}
          </Box>
          <NextLink href={href} passHref>
            <LinkOverlay></LinkOverlay>
          </NextLink>
          <Text>{repoInfo.description}</Text>
        </Box>
      </HStack>
      <HStack mt={2} fontSize={18} alignContent="center">
        <Box pr={4}>
          {repoInfo.language ? (
            <Badge colorScheme="pink">{repoInfo.language}</Badge>
          ) : (
            <Badge colorScheme="gray">None</Badge>
          )}
        </Box>
        <Box>
          <BiStar color="#E3B341" />
        </Box>
        <Box pr={4}>{repoInfo.stars}</Box>
        <Box>
          <BiGitRepoForked />
        </Box>
        <Box pr={4}>{repoInfo.forks}</Box>
        {/*<Box>Build by</Box>
        <AvatarGroup size="sm" max={5}>
        {repoInfo.contributor_avatar_urls.map((url: string) => {
          return (
            <Avatar key={url} src={url} />
          )
        })}
        </AvatarGroup>*/}
        <Spacer />
        <IconButton
          as="a"
          aria-label="GitHub"
          size="md"
          icon={<BsGithub />}
          fontSize="30px"
          href={repoInfo.repo_html_url}
        />
      </HStack>
    </MotionLinkMox>
  );
};

export default RepoItem;
