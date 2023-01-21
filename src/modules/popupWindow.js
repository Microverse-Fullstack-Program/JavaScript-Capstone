import fetchObjDetails from './fetchArtObjects.js';
import commentPage from './commentPage.js';
import postComment from './postComment.js';
import reservationPage from './reservationPage.js';
import postReservation from './postReservation.js';

const commentPopupWindow = async (index) => {
  const objDetails = await fetchObjDetails(index);
  commentPage(objDetails);
};

const reservationPopupWindow = async (index) => {
  const objDetails = await fetchObjDetails(index);
  reservationPage(objDetails);
};

document.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.className === 'postCommentBtn') {
    const objId = event.target.dataset.index;
    postComment(objId);
    popupWindow(objId);
  } else if (event.target.className === 'postReserveBtn') {
    const objId = event.target.dataset.index;
    postReservation(objId);
    reservationPopupWindow(objId);
  } else if (event.target.id === 'close') {
    const body = document.querySelector('body');
    const detailContainer = document.querySelector('.popup');
    detailContainer.classList.remove('popupWrapper');
    document.querySelector('#main').classList.remove('blur');
    body.removeChild(detailContainer);
  }
});

export { commentPopupWindow, reservationPopupWindow };