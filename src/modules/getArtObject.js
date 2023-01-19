import url from './url.js';

const getArtObjects = async (objectId) => {
  const response = await fetch(url + objectId);
  const res = await response.json();
  return res;
};

export default getArtObjects;
