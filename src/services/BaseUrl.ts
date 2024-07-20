import axios from 'axios';

// github api
const githubUrl = import.meta.env.VITE_BASEURL_GITHUB;
const header = import.meta.env.AUTHORIZATION;

// country code api
const countryCodeUrl = import.meta.env.VITE_BASEURL_COUNTRYCODE;

export const githubBaseURL = axios.create({
  baseURL: githubUrl,
  headers: { Authorization: header },
});

export const countryCodeBaseURL = axios.create({
  baseURL: countryCodeUrl,
});
