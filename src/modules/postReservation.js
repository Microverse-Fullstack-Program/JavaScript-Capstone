import { reservationsURL } from './baseURLs.js';
import fetchReservation from './fetchReservation.js';

const postReservation = async (objId) => {
  let username = document.getElementById('nameReserve').value;
  let startDate = document.getElementById('sDate').value;
  let endDate = document.getElementById('sDate').value;

  await fetch(reservationsURL, {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      item_id: `${objId}`,
      username: `${username}`,
      date_start: `${startDate}`,
      date_end: `${endDate}`,
    }),

  });
  username = '';
  startDate = '';
  endDate = '';

  const reserveCount = fetchReservation();
  if (reserveCount > 0) {
    document.querySelector('#dReserve').innerHTML = `Reservations (${reserveCount})`;
  }
};

export default postReservation;