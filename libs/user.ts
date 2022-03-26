import axios from 'axios';

export type UserInfoProps = {
  username: string;
  avatar_url: string;
  html_url: string;
  type: string;
  name: string | null;
  blog: string | null;
  location: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  created_at: string;
};
export const defaultUserInfo: UserInfoProps = {
  username: 'Not Found',
  avatar_url: 'https://avatars.githubusercontent.com/u/32547123?v=4',
  html_url: '',
  type: '',
  name: '',
  blog: null,
  location: null,
  bio: null,
  twitter_username: null,
  public_repos: 0,
  public_gists: 0,
  created_at: ''
};
export async function getUserInfo(username: string) {
  try {
    if (window !== undefined) {
      const item = JSON.parse(
        window.localStorage.getItem(`${username}`) || '{}'
      );
      if (Object.keys(item).length != 0) {
        return item;
      }
    }

    const { data } = await axios.get(
      `https://api.github.com/users/${username}`
    );

    const processedData = processUserData(data);
    if (window !== undefined)
      window.localStorage.setItem(`${username}`, JSON.stringify(processedData));

    return processedData;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      if (window !== undefined)
        window.localStorage.setItem(
          `${username}`,
          JSON.stringify(defaultUserInfo)
        );
    }
    console.log(error);
    return defaultUserInfo;
  }
}
function processUserData(data: any): UserInfoProps {
  const processedData: UserInfoProps = {
    username: data.login,
    avatar_url: data.avatar_url,
    html_url: data.html_url,
    type: data.type,
    name: data.name,
    blog: data.blog,
    location: data.location,
    bio: data.bio,
    twitter_username: data.twitter_username,
    public_repos: data.public_repos,
    public_gists: data.public_gists,
    created_at: data.created_at
  };

  return processedData;
}
