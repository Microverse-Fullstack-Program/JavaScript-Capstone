import objectsId from './objectsId.js';
import fetchLikes from './fetchLikes.js';
import displayArtObjects from './displayArtObjects.js';
import { objectsCounter } from './counter.js';

const objectCount = document.querySelector('.counter');

// retrieve likes count from the involvement API
const checkLikes = (likeCounts, objId) => {
  for (let i = 0; i < likeCounts.length; i += 1) {
    if (likeCounts[i].item_id === objId.toString()) {
      return likeCounts[i].likes;
    }
  }
  return false;
};

// print the objects on homepage
const loadHomePage = async () => {
  const likeCounts = await fetchLikes();

  objectsId.forEach((id) => {
    const likes = checkLikes(likeCounts, id);
    if (likes) {
      displayArtObjects(id, likes);
    } else {
      displayArtObjects(id, 0);
    }
  });

  setTimeout(async () => {
    const objCount = objectsCounter();
    objectCount.innerHTML += ` (${objCount})`;
  }, 2000);
};

export default loadHomePage;