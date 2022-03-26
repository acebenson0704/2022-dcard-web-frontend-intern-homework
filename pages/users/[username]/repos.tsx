import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Center, Spinner, Text } from '@chakra-ui/react';

import RepoList from '../../../components/data-display/repo-list';
import UserCard from '../../../components/data-display/user-card';
import { RepoInfoProps, getReposByUsername } from '../../../libs/repo';
import {
  UserInfoProps,
  defaultUserInfo,
  getUserInfo
} from '../../../libs/user';

const Repos: NextPage = () => {
  const router = useRouter();
  const username = router.query.username + '';

  const [userInfo, setUserInfo] = useState<UserInfoProps>(defaultUserInfo);
  const [repoInfos, setRepoInfos] = useState<Array<RepoInfoProps>>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      if (!router.isReady) return;

      const newUserInfo = await getUserInfo(username);
      const newRepoInfos = await getReposByUsername(username, 1);

      setUserInfo(newUserInfo);
      setRepoInfos(newRepoInfos);
      setLoading(false);
    };

    fetchData();
  }, [router.isReady, username]);

  return (
    <>
      {isLoading ? (
        <Center>
          <Spinner textAlign="center" color="teal" size="xl" />
        </Center>
      ) : (
        <>
          <UserCard userInfo={userInfo} />
          <Text my={6} fontSize="2xl">
            {' '}
            Repositories{' '}
          </Text>
          <RepoList username={username} data={repoInfos} />
        </>
      )}
    </>
  );
};

export default Repos;
