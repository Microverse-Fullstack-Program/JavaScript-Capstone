import { commentURL } from './baseURLs.js';
import { window } from './window.js';

const sendData = async (objId) => {
  let username = document.getElementById('name').value;
  let comment = document.getElementById('comment').value;
  await fetch(commentURL, {
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
  window(objId);
};

export default sendData;