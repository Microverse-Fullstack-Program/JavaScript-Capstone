import { commentsURL } from './baseURLs.js';

const fetchComment = async (id) => {
  const response = await fetch(`${commentsURL}?item_id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res = await response.json();
  return res;
};

export default fetchComment;
