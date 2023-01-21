import { externalApi } from './baseURLs.js';

const fetchArtObjects = async (objectId) => {
  const response = await fetch(externalApi + objectId);
  const res = await response.json();
  return res;
};

export default fetchArtObjects;
