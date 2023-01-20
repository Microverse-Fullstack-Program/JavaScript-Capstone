/* eslint-disable camelcase */
import { url, objectId, formURL } from './url.js';

// eslint-disable-next-line import/prefer-default-export
export const window = (ID) => {
  let item_id = 0;
  const Id = '?item_id:';
  const link = url + objectId[ID];
  const body = document.querySelector('body');
  const imgContainer = document.createElement('image');
  const detailContainer = document.createElement('div');
  // const feedbackID = [];
  // const users = [];
  // const feedback = [];

  function displayDetail(imageUrl, title, artistDisplayName, dimensions,
    objectName, objectDate, city, country) {
    const Values = [imageUrl, title, artistDisplayName, dimensions,
      objectName, objectDate, city, country];
    for (let i = 0; i <= Values.length; i += 1) {
      if (Values[i] === '') {
        Values[i] = 'Unknown';
      }
    }

    detailContainer.innerHTML = `
    <section id="Cards">
    <image class="imgContainer">
    <p id='Close'>X</p>
    <h2 class='title1 detail'>${Values[1]}</h2>
    <p class='detail1'>Artist Display Name: ${Values[2]}</p>
    <p class='detail2'>Dimensions: ${Values[3]}</p>
    <p class='detail1'>Object name: ${Values[4]}</p>
    <p class='detail2'>Object Date: ${Values[5]}</p>
    <p class='detail1'>City: ${Values[6]}</p>
    <p class='detail2'>Country: ${Values[7]}</p>
    <p></p>
    <input id='name' placeholder='name' required></input>
    <input id='comment' placeholder='Your insights' required></input>
    <button type='button' class='CommentBtn'>Comment</button>
    </section>`;
    document.querySelector('.imgContainer').src = imageUrl;
  }

  function displayFeedback(feedbackid, name, feedback) {
    detailContainer.innerHTML = `<section id='feedback>
      <p>${feedback}</p>
      <p>${name}</p>
      <p>${feedback}</p>
      </section>`;
  }
  body.appendChild(detailContainer);
  body.appendChild(imgContainer);

  fetch(formURL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  // eslint-disable-next-line arrow-body-style
  }).then((res) => {
    return res.json();
  })
    .then((data) => displayFeedback(data.feedbackID, data.users, data.feedback));

  fetch(link + Id + objectId[ID], {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  // eslint-disable-next-line arrow-body-style
  }).then((res) => {
    return res.json();
  })
    .then((data) => displayDetail(data.primaryImage, data.title, data.artistDisplayName,
      data.dimensions, data.objectName, data.objectDate, data.city, data.country));

  const sendData = async () => {
    let username = document.getElementById('name').value;
    let comment = document.getElementById('comment').value;
    item_id = ID;

    await fetch(formURL + Id + objectId[ID],
      {
        method: 'POST',
        body: JSON.stringify({
          item_id: `${item_id}`,
          username: `${username}`,
          comment: `${comment}`,
        }),
        headers: { 'content-type': 'application/json; charset=UTF-8' },
      });
    username = '';
    comment = '';
    window();
  };

  document.addEventListener('click', (event) => {
    if (event.target.className === 'CommentBtn') {
      sendData();
      event.preventDefault();
    }
  });
};
