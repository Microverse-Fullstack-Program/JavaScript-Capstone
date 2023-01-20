const objectCount = document.querySelector('#tab1');
const objectsWrapper = document.querySelector('.content-Wrapper');

const objectsCounter = () => {
  objectCount.innerHTML += ` (${objectsWrapper.length})`;
};

export default objectsCounter;