import './style.css';
import loadHomePage from './modules/homepage.js';
import postLikes from './modules/postLikes.js';
import about from './modules/about.js';
import contact from './modules/contact.js';

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

// Script For Single Page Application
const navBtn = document.querySelectorAll('.NavBar a');
const section = document.querySelectorAll('section');
const title = document.querySelector('.heading');
navBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.target.className === 'home') {
      section[0].style.display = 'flex';
      section[1].style.display = 'none';
      section[2].style.display = 'none';
      title.innerHTML = 'Museum of Art';
    } else if (e.target.className === 'about') {
      section[0].style.display = 'none';
      section[1].style.display = 'flex';
      section[2].style.display = 'none';
      title.innerHTML = 'The Museum of Art Collection API';
      const aboutMA = document.querySelector('.about-the');
      aboutMA.innerHTML = about;
    } else if (e.target.className === 'contact') {
      section[0].style.display = 'none';
      section[1].style.display = 'none';
      section[2].style.display = 'flex';
      title.innerHTML = 'Meet the Authors';
      const authors = document.querySelector('.contacts');
      authors.innerHTML = contact;
    }
  });
});

window.addEventListener('DOMContentLoaded', loadHomePage);
