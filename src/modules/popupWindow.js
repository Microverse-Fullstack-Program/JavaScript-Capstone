import fetchObjDetails from './fetchObjDetails.js';
import commentPage from './commentPage.js';
import sendData from './postComment.js';

const popupWindow = async (index) => {
  const objDetails = await fetchObjDetails(index);
  commentPage(objDetails);
};

document.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.className === 'postCommentBtn') {
    const objId = event.target.dataset.index;
    sendData(objId);
    popupWindow(objId);
  } else if (event.target.id === 'close') {
    const body = document.querySelector('body');
    const detailContainer = document.querySelector('.popup');
    detailContainer.classList.remove('popupWrapper');
    document.querySelector('#main').classList.remove('blur');
    body.removeChild(detailContainer);
  }
});

export default popupWindow;