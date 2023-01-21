import { externalApi } from './baseURLs.js';

const fetchObjDetails = async (id) => {
  const response = await fetch(externalApi + id);
  const result = await response.json();
  return result;
};

export default fetchObjDetails;