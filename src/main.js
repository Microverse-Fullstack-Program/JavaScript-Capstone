import './style.css';
import loadHomePage from './modules/homepage.js';
import postLikes from './modules/postLikes.js';

// handling onclick event for the like, comment and reservation buttons
document.addEventListener('click', (event) => {
  event.preventDefault();
  const parentClass = event.target.parentElement;
  const objId = parentClass.dataset.index;

  if (event.target.className === 'likeBtn') {
    const likeCounts = parentClass.lastElementChild;
    postLikes(objId, likeCounts);
  } else if (event.target.className === 'homepageBtn') {
    if (event.target.id === 'comments') {
      // popup comments page
    } else if (event.target.id === 'reservation') {
      // popup reservation page
    }
  }
});

window.addEventListener('load', loadHomePage);
