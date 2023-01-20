

const objectsCounter = () => {
  const objectsWrapper = document.querySelector('.content-Wrapper');
  const objCount = objectsWrapper.children.length;
  return objCount;   
};

export default objectsCounter;