import { window } from './window.js';

const commentBtn = document.querySelectorAll('.CommentsButton');

// Handels all "comments" button popup execution

for (let i = 0; i <= commentBtn.length; i += 1) {
  // eslint-disable-next-line no-loop-func
  commentBtn[i].addEventListener('click', () => {
    window([i]);
  });
}