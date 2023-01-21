import thumbsUp from '../assets/thumbs_up.png';
import fetchArtObjects from './fetchArtObjects.js';

const itemContainer = document.querySelector('.content-Wrapper');

const displayArtObjects = async (objectId, likes) => {
  const result = await fetchArtObjects(objectId);

  const itemCard = document.createElement('div');
  itemCard.className = 'item';
  const attr = document.createAttribute('data-index');
  attr.value = result.objectID;
  itemCard.setAttributeNode(attr);

  itemCard.innerHTML += `<div class="imgWrapper"><img src="${result.primaryImage}"/></div>
    <div class="title" >
        <p>${result.title}</p>
        <div class="likes" data-index = "${result.objectID}">
          <img class="likeBtn" src="${thumbsUp}"/>
          <p class="likeCount"> ${likes} Likes</p>
        </div>
    </div>
    <button class="homepageBtn" id="comments" data-index = "${result.objectID}"> Comments </button>
    <button class="homepageBtn" id="reservation" data-index = "${result.objectID}"> Reservations </button>`;
  itemContainer.appendChild(itemCard);
};

export default displayArtObjects;
