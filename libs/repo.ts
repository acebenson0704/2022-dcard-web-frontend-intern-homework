import axios from 'axios';

export type RepoInfoProps = {
  fullname: string;
  owner_name: string;
  owner_html_url: string;
  repo_name: string;
  repo_html_url: string;
  avatar_url: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  topics: Array<string>;
  contributor_avatar_urls: Array<string>;
};
export const defaultRepoInfo: RepoInfoProps = {
  repo_name: 'Not Found',
  repo_html_url: '',
  owner_name: 'Not Found',
  owner_html_url: '',
  fullname: 'Not Found',
  avatar_url: '',
  description: null,
  language: null,
  stars: 0,
  forks: 0,
  topics: [],
  contributor_avatar_urls: []
};
export async function getReposByUsername(username: string, page: number) {
  try {
    const { data } = await axios.get(
      `https://api.github.com/users/${username}/repos?sort=created&per_page=10&page=${page}`
    );

    const processedData = await Promise.all(
      data.map((d: any) => {
        return processRepoData(d);
      })
    );
    processedData.forEach((data) => {
      if (window !== undefined)
        window.localStorage.setItem(data.fullname, JSON.stringify(data));
    });

    return processedData;
  } catch (error) {
    console.log(error);
    return [];
  }
}
export async function getRepo(owner: string, repo: string) {
  try {
    if (window !== undefined) {
      const item = JSON.parse(
        window.localStorage.getItem(`${owner}/${repo}`) || '{}'
      );
      if (Object.keys(item).length != 0) return item;
    }

    const { data } = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}`
    );

    const processedData = await processRepoData(data);
    if (window !== undefined)
      window.localStorage.setItem(
        processedData.fullname,
        JSON.stringify(processedData)
      );

    return processedData;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      if (window !== undefined)
        window.localStorage.setItem(
          `${owner}/${repo}`,
          JSON.stringify(defaultRepoInfo)
        );
    }
    console.log(error);
    return defaultRepoInfo;
  }
}
async function processRepoData(data: any) {
  // process data
  const processedData: RepoInfoProps = {
    fullname: data.full_name,
    owner_name: data.owner.login,
    owner_html_url: data.owner.html_url,
    repo_name: data.name,
    repo_html_url: data.html_url,
    avatar_url: data.owner.avatar_url,
    description: data.description,
    language: data.language,
    stars: data.stargazers_count,
    forks: data.forks_count,
    topics: data.topics,
    contributor_avatar_urls: []
  };

  // Request for every contributor waste RateLimit.
  // processedData["contributor_avatar_urls"] = await getContributorAvatars(data.contributors_url)

  return processedData;
}
/*
async function getContributorAvatars(contributors_url: string) {
  try {
    const { data } = await axios.get(contributors_url);
    return data.map((contributor: any) => contributor.avatar_url);
  } catch (error) {
    console.log(error);
    return [];
  }  
}
*/
