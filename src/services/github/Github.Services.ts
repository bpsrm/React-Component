import { githubBaseURL } from '../BaseUrl';

export async function FetchProfile() {
  try {
    const response = await githubBaseURL.get('bpsrm');
    return await response;
  } catch (error) {
    console.log(error);
  }
}
