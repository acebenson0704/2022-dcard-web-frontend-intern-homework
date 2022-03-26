import React from 'react';

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Hide,
  HStack,
  Spacer,
  Stack,
  Tag,
  TagLabel,
  Text
} from '@chakra-ui/react';
import { GoRepo } from 'react-icons/go';
import { BiGitRepoForked, BiStar } from 'react-icons/bi';
import { RepoInfoProps } from '../../libs/repo';

type RepoCardProps = {
  repoInfo: RepoInfoProps;
};

const RepoCard = ({ repoInfo }: RepoCardProps) => {
  return (
    <Stack
      direction={['column', 'column', 'row']}
      borderWidth="2px"
      rounded="md"
      p={[2, 4, 8]}
      mb={[2, 6, 12]}
    >
      <Box>
        <HStack>
          <GoRepo size="36px" />
          {repoInfo.fullname === 'Not Found' ? (
            <Text px={4} color="teal.500" fontSize="36px">
              Not Found
            </Text>
          ) : (
            <Breadcrumb
              px={[0, 0, 4]}
              color="teal.500"
              fontSize={['24px', '24px', '36px']}
            >
              <BreadcrumbItem>
                <BreadcrumbLink href={repoInfo.owner_html_url}>
                  {repoInfo.owner_name}
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href={repoInfo.repo_html_url}>
                  {repoInfo.repo_name}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          )}
          <Tag size="sm" variant="outline" colorScheme="gray">
            <TagLabel>Public</TagLabel>
          </Tag>
        </HStack>
        <Text pl={6}>{repoInfo?.description}</Text>
        <Hide below="sm">
          <HStack pl={6} mt={4}>
            {repoInfo.topics.map((topic: string, index: number) => {
              if (index >= 5) return;
              return (
                <Tag key={topic}>
                  <TagLabel>{topic}</TagLabel>
                </Tag>
              );
            })}
          </HStack>
        </Hide>
      </Box>
      <Spacer />
      <Box alignSelf="center">
        <HStack>
          <Box>
            <BiStar color="#E3B341" />
          </Box>
          <Box pr={4}>{repoInfo.stars}</Box>
          <Box>
            <BiGitRepoForked color="cyan" />
          </Box>
          <Box pr={4}>{repoInfo.forks}</Box>
        </HStack>
      </Box>
    </Stack>
  );
};

export default RepoCard;
