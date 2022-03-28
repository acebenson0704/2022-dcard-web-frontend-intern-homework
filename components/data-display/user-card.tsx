import React from 'react';
import {
  Badge,
  Box,
  Hide,
  HStack,
  Link,
  Stack,
  Tag,
  TagLabel,
  Text
} from '@chakra-ui/react';
import Image from 'next/image';
import { GoGist, GoLocation, GoRepo } from 'react-icons/go';
import { BsLink45Deg, BsTwitter } from 'react-icons/bs';
import { UserInfoProps } from '../../libs/user';

type UserCardProps = {
  userInfo: UserInfoProps;
};

const UserCard = ({ userInfo }: UserCardProps) => {
  if (!userInfo) return <Box>No user!!!</Box>;

  return (
    <Box>
      <Box>
        <HStack p={4}>
          <Box boxSize="100px" borderRadius="lg">
            <Image
              width="100px"
              height="100px"
              src={userInfo.avatar_url}
              alt="avatar"
            />
          </Box>
          <Box pl={4}>
            <Text fontSize="3xl">
              {userInfo.name ? userInfo.name : userInfo.username}
            </Text>
            <Text mb={2} fontSize="sm" color="gray">
              {userInfo.bio}
            </Text>
            <Stack direction={['column', 'column', 'row']}>
              {userInfo.location && (
                <HStack>
                  <GoLocation />
                  <Text fontSize="sm">{userInfo.location}</Text>
                </HStack>
              )}
              {userInfo.blog && (
                <HStack>
                  <BsLink45Deg />
                  <Link href={`${userInfo.blog}`}>
                    <Text fontSize="sm">{userInfo.blog}</Text>
                  </Link>
                </HStack>
              )}
              {userInfo.twitter_username && (
                <HStack>
                  <BsTwitter />
                  <Link href={`https:twitter.com/${userInfo.twitter_username}`}>
                    <Text fontSize="sm">{userInfo.twitter_username}</Text>
                  </Link>
                </HStack>
              )}
            </Stack>
          </Box>
        </HStack>
      </Box>
      <Box>
        <HStack p={4}>
          <Hide below="sm">
            <Badge colorScheme="green">{userInfo.type}</Badge>
          </Hide>
          <HStack px={2}>
            <GoRepo />
            <Text>Repositories</Text>
            <Tag borderRadius="full">
              <TagLabel>{userInfo.public_repos}</TagLabel>
            </Tag>
          </HStack>
          <HStack px={2}>
            <GoGist />
            <Text>Gists</Text>
            <Tag borderRadius="full">
              <TagLabel>{userInfo.public_gists}</TagLabel>
            </Tag>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default UserCard;
