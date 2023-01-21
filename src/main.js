import './style.css';
import { window } from './modules/window.js';

const commentBtn = document.querySelectorAll('.CommentsButton');

// Handels all "comments" button popup execution
commentBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    window(e.target.id);
  });
});
