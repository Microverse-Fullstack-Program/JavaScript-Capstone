import objectsId from './objectIds.js';
import getLikes from './getLikes.js';
import printArtObjects from './displayArtObject.js';
import objectsCounter from './objCounter.js';

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
  const likeCounts = await getLikes();

  objectsId.forEach((id) => {
    const likes = checkLikes(likeCounts, id);
    if (likes) {
      printArtObjects(id, likes);
    } else {
      printArtObjects(id, 0);
    }
  });

  setTimeout(async () => {
    const objCount = objectsCounter();
    objectCount.innerHTML += ` (${objCount})`;
  }, 2000); 

};

export default loadHomePage;