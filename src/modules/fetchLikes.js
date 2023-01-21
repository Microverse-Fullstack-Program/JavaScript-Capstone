import { likesURL } from './baseURLs.js';

const fetchLikes = async () => {
  const response = await fetch(likesURL);
  const res = await response.json();
  return res;
};

export default fetchLikes;
