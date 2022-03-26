import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Center, Divider, Spinner, Stack, Text } from '@chakra-ui/react';

import RepoItem from '../components/data-display/repo-item';
import Searchbar from '../components/searchbar';
import { RepoInfoProps, getRepo } from '../libs/repo';

type HomeProps = {
  repoInfos: Array<RepoInfoProps>;
};

const Home: NextPage<HomeProps> = () => {
  const [repoInfos, setRepoInfos] = useState<Array<RepoInfoProps>>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const recommendRepoNames = [
        { owner: 'facebook', repo: 'react' },
        { owner: 'vercel', repo: 'next.js' },
        { owner: 'chakra-ui', repo: 'chakra-ui' }
      ];
      let newRepoInfo = await Promise.all(
        recommendRepoNames.map((name) => {
          return getRepo(name.owner, name.repo);
        })
      );

      newRepoInfo = newRepoInfo.filter((repoInfo) => repoInfo != null);
      setRepoInfos(newRepoInfo);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Stack w="100%">
      <Text fontSize="6xl" textAlign="center">
        Explore GitHub
      </Text>
      <Searchbar />
      <Text pt={12} fontSize="2xl">
        Recommend Repos
      </Text>
      <Divider />
      {isLoading ? (
        <Center>
          <Spinner textAlign="center" color="teal" size="xl" />
        </Center>
      ) : (
        repoInfos.map((repoInfo: RepoInfoProps, index: number) => {
          const [owner, repoName] = repoInfo.fullname.split('/');
          return (
            <RepoItem
              href={`/users/${owner}/repos/${repoName}`}
              repoInfo={repoInfo}
              key={index}
            >
              React
            </RepoItem>
          );
        })
      )}
    </Stack>
  );
};

export default Home;
