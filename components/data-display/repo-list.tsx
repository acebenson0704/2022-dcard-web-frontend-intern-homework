import { Divider, Skeleton, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import RepoItem from './repo-item';
import { RepoInfoProps, getReposByUsername } from '../../libs/repo';

type RepoListProps = {
  username: string;
  data: Array<RepoInfoProps>;
};

const RepoList = ({ username, data }: RepoListProps) => {
  const [pageIdx, setPageIdx] = useState(2);
  const [repoInfos, setRepoInfos] = useState(data);
  const [hasMore, setHasMore] = useState(data.length == 10);

  const getMoreRepo = async () => {
    // get more repo
    console.log('getMoreRepo');
    const newRepoInfos = await getReposByUsername(username, pageIdx);

    if (newRepoInfos.length < 10) setHasMore(false);
    setPageIdx((pageIdx) => pageIdx + 1);
    setRepoInfos((repoInfos) => [...repoInfos, ...newRepoInfos]);
  };

  return (
    <Stack w="100%">
      <InfiniteScroll
        style={{ overflow: 'hidden' }}
        dataLength={repoInfos.length}
        next={getMoreRepo}
        hasMore={hasMore}
        loader={
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        }
        endMessage={<Divider />}
      >
        {repoInfos.map((repoInfo: RepoInfoProps, index: number) => {
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
        })}
      </InfiniteScroll>
    </Stack>
  );
};

export default RepoList;
