import { objectId } from './baseURLs.js';
import fetchObjDetails from './fetchObjDetails.js';
import commentPage from './commentPage.js';
import sendData from './postComment.js'

// eslint-disable-next-line import/prefer-default-export
export const window = async (index) => {
  if (index <= 5) {
    index = objectId[index];
  }
  const objDetails = await fetchObjDetails(index);
  commentPage(objDetails);
};

document.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.className === 'postCommentBtn') {
    const objId = event.target.dataset.index;
    sendData(objId);   
  }
});