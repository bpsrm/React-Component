import { countryCodeBaseURL } from '../BaseUrl';

export async function GetCountryCode() {
  try {
    const response = await countryCodeBaseURL.get('v2/all');
    return response;
  } catch (error) {
    console.log(error);
  }
}
