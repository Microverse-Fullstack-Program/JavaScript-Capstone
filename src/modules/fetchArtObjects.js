import { externalAPI } from './baseURLs.js';

const fetchArtObjects = async (objectId) => {
  const response = await fetch(externalAPI + objectId);
  const res = await response.json();
  return res;
};

export default fetchArtObjects;
