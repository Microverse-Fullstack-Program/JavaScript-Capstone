import { involvementApi } from './baseURLs.js';

const getLikes = async () => {
  const response = await fetch(involvementApi);
  const res = await response.json();
  return res;
};

export default getLikes;
