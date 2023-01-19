import { url, objectId } from "./url.js";
const result = [];

const getArtObjects = async () => {
  for (let i = 0; i < objectId.length; ++i) {
    const response = await fetch(url + objectId[i]);
    const res = await response.json();
    result.push(res);
  }
  return result;
};

export default getArtObjects;
