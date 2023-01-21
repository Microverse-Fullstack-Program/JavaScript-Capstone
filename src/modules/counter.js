const objectsCounter = () => {
  const objectsWrapper = document.querySelector('.content-Wrapper');
  const objCount = objectsWrapper.children.length;
  return objCount;
};

const commentCounter = () => {
  const commentCounter = document.querySelector('.feedback');
  const counter = commentCounter.childElementCount;
  return counter;
};

const reserveCounter = () => {
  const reserveCounter = document.querySelector('.reservation');
  const counter = reserveCounter.childElementCount;
  return counter;
};

export { objectsCounter, commentCounter, reserveCounter};