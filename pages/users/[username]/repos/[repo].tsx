import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Center, Spinner } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

import RepoCard from '../../../../components/data-display/repo-card';
import { RepoInfoProps, defaultRepoInfo, getRepo } from '../../../../libs/repo';
import {
  RepoReadmeProps,
  defaultRepoReadme,
  getRepoReadme
} from '../../../../libs/readme';
import { markdownTheme } from '../../../../libs/markdown-theme';

const Repo: NextPage = () => {
  const router = useRouter();
  const [repoInfo, setRepoInfo] = useState<RepoInfoProps>(defaultRepoInfo);
  const [repoReadme, setRepoReadme] =
    useState<RepoReadmeProps>(defaultRepoReadme);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      if (!router.isReady) return;

      const paths = router.asPath.split('/');
      const newRepoInfo = await getRepo(paths[2], paths[4]);
      const newRepoReadme = await getRepoReadme(paths[2], paths[4]);

      setRepoInfo(newRepoInfo);
      setRepoReadme(newRepoReadme);
      setLoading(false);
    };
    fetchData();
  }, [router.isReady, router.asPath]);

  return (
    <>
      {isLoading ? (
        <Center>
          <Spinner textAlign="center" color="teal" size="xl" />
        </Center>
      ) : (
        <>
          <RepoCard repoInfo={repoInfo} />
          <ReactMarkdown components={ChakraUIRenderer(markdownTheme)} skipHtml>
            {repoReadme.content}
          </ReactMarkdown>
        </>
      )}
    </>
  );
};

export default Repo;
