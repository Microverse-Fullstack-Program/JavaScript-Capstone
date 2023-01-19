import thumbsUp from '../assets/thumbs_up.png';
import getArtObjects from './getArtObject.js';

const itemContainer = document.querySelector('.content-Wrapper');

const printItem = async () => {
  const result = await getArtObjects();

  for (let i = 0; i < result.length; i += 1) {
    const itemCard = document.createElement('div');
    itemCard.className = 'item';
    itemCard.innerHTML
    += `<div class="imgWrapper"><img src="${result[i].primaryImage}"/></div>
    <div class="title">
        <p>${result[i].title}</p>
        <div class="likes">
          <button class="likeBtn"><img src="${thumbsUp}"/></button>
          <p> ${i} likes</p>
        </div>
    </div>
    <button class="homepageBtn" id="comments"> Comments </button>
    <button class="homepageBtn" id="reservation"> Reservations </button>`;
    itemContainer.appendChild(itemCard);
  }
};

export default printItem;
