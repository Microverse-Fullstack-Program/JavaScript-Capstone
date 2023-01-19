import thumbsUp from '../assets/thumbs_up.png';
import getArtObjects from './getArtObject.js';

const itemContainer = document.querySelector('.content-Wrapper');

const printItem = async (objectId) => {
  const result = await getArtObjects(objectId);

  const itemCard = document.createElement('div');
  itemCard.className = 'item';
  itemCard.innerHTML += `<div class="imgWrapper"><img src="${result.primaryImage}"/></div>
    <div class="title">
        <p>${result.title}</p>
        <div class="likes">
          <button class="likeBtn"><img src="${thumbsUp}"/></button>
          <p> ${objectId} likes</p>
        </div>
    </div>
    <button class="homepageBtn" id="comments"> Comments </button>
    <button class="homepageBtn" id="reservation"> Reservations </button>`;
  itemContainer.appendChild(itemCard);
};

export default printItem;
