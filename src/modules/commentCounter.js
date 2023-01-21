const commentCounter = () => {
  const commentCounter = document.querySelector('.feedback');
  const counter = commentCounter.childElementCount;
  return counter;
};

export default commentCounter;