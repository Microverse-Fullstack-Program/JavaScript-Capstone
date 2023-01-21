import { commentsURL } from './baseURLs.js';
import { commentCounter } from './counter.js';

const postComment = async (objId) => {
  let username = document.getElementById('name').value;
  let comment = document.getElementById('comment').value;
  await fetch(commentsURL, {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      item_id: `${objId}`,
      username: `${username}`,
      comment: `${comment}`,
    }),

  });
  username = '';
  comment = '';
  const commentCount = commentCounter();
  if (commentCounter > 0) {
    document.querySelector('#dComment').innerHTML = `Comments (${commentCount})`;
  }
};

export default postComment;