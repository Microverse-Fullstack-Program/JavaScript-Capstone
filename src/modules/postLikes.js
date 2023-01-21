import { involvementApi } from './baseURLs.js';
import getLikes from './getLikes.js';

const postLikes = async (objId, likes) => {
  const resource = await fetch(involvementApi, {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: `${objId}`,
    }),
  });

  const likeCount = await getLikes();
  likeCount.forEach((element) => {
    if (element.item_id === objId) {
      likes.innerHTML = `${element.likes} Likes`;
    }
  });
  return resource;
};

export default postLikes;