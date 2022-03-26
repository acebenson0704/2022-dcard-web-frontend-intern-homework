import axios from 'axios';
import { Base64 } from 'js-base64';

export type RepoReadmeProps = {
  content: string;
};
export const defaultRepoReadme: RepoReadmeProps = {
  content: ''
};
export async function getRepoReadme(owner: string, repo: string) {
  try {
    if (window !== undefined) {
      const item = JSON.parse(
        window.localStorage.getItem(`${owner}/${repo}/readme`) || '{}'
      );
      if (Object.keys(item).length != 0) {
        return item;
      }
    }

    const { data } = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/readme`
    );

    const processedData = processReadmeData(data);
    if (window !== undefined)
      window.localStorage.setItem(
        `${owner}/${repo}/readme`,
        JSON.stringify(processedData)
      );

    return processedData;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      if (window !== undefined)
        window.localStorage.setItem(
          `${owner}/${repo}/readme`,
          JSON.stringify(defaultRepoReadme)
        );
    }
    console.log(error);
    return defaultRepoReadme;
  }
}
function processReadmeData(data: any) {
  let contentData = Base64.decode(data.content);

  const processedData = {
    content: contentData
  };

  return processedData;
}
