import fetchReservation from './fetchReservation.js';
import { reserveCounter } from './counter.js';

const body = document.querySelector('body');
const detailContainer = document.createElement('div');

const reservationPage = async (objectDetails) => {
  const reservationRes = await fetchReservation(objectDetails.objectID);
  const objInfo = `
    <section id="card">
        <p id='close'>X</p>
        <image class="imgContainer" src = "${objectDetails.primaryImage}" alt="Object Image"/>
        <h2 class='title1 detail'>${objectDetails.title}</h2>
        <p class='detail1'><strong> Department:</strong> ${objectDetails.department}</p>
        <p class='detail2'><strong>  Culture: </strong> ${objectDetails.culture}</p>
        <p class='detail1'><strong>  Dimensions: </strong> ${objectDetails.dimensions}</p>
        <p class='detail2'><strong> Date: </strong> ${objectDetails.objectBeginDate} to ${objectDetails.objectEndDate} </p>
        `;

  let comment = '';
  if (reservationRes) {
    comment += '<p id="dReserve"></p> <div class="reservation">';
    for (let i = 0; i < reservationRes.length; i += 1) {
      comment += `
        <div>
          <p id='fdate'>${reservationRes[i].date_start} </p>
          <p id='fdate'>${reservationRes[i].date_end} </p>
          <p id='fuser'>${reservationRes[i].username}: </p>
        </div>`;
    }
    comment += '</div>';
  }

  const commentForm = `<p id='aReserve'>Add a reservation</p>
      <div class="reservationPost">
        <input id='nameReserve' placeholder='Your name' required></input>
        <input type="date" id='sDate' placeholder='Start date' required></input>
        <input type="date" id='eDate' placeholder='End date' required></input>
        <button type='button' class='postReserveBtn' data-index = "${objectDetails.objectID}">Reserve</button>
      </div>
        </section>`;

  detailContainer.innerHTML = objInfo + comment + commentForm;
  detailContainer.className = 'popup';
  detailContainer.classList.add('popupWrapper');
  body.appendChild(detailContainer);

  const reserveCount = reserveCounter();
  if (reserveCount) {
    document.querySelector('#dReserve').innerHTML = `Reservations (${reserveCount})`;
  }
};

export default reservationPage;
