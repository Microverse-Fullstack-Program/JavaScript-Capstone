import { reservationsURL } from './baseURLs.js';

const fetchReservation = async (id) => {
  const response = await fetch(`${reservationsURL}?item_id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res = await response.json();
  return res;
};

export default fetchReservation;
