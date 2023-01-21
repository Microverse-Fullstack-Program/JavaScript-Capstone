import fetchComment from './fetchComment.js';

const body = document.querySelector('body');
const detailContainer = document.createElement('div');

export const commentPage = async (objectDetails, loops) => {
  const comments = await fetchComment(objectDetails.objectID);

  detailContainer.innerHTML = `
    <section id="card">
        <p id='Close'>X</p>
        <image class="imgContainer" src = "${objectDetails.primaryImage}" alt="Object Image"/>
        <h2 class='title1 detail'>${objectDetails.title}</h2>
        <p class='detail1'>Artist Display Name: ${objectDetails.artistDisplayName}</p>
        <p class='detail2'>Dimensions: ${objectDetails.dimensions}</p>
        <p class='detail1'>Object name: ${objectDetails.objectName}</p>
        <p class='detail2'>Object Date: ${objectDetails.objectDate}</p>
        <p class='detail1'>City: ${objectDetails.city}</p>
        <p class='detail2'>Country: ${objectDetails.country}</p>
        <p id='dComment'>Comments (${comments.length})</p>`;

  if (comments) {
    comments.forEach((comment) => {
      detailContainer.innerHTML
                += `<div class="feedback">
                    <p id='fdate'>${comment.creation_date} </p>
                    <p id='fuser'>${comment.username}: </p>
                    <p id='fcomment'>${comment.comment}</p>             
                </div>`;
    });
  }

  detailContainer.innerHTML += `<p id='aComment'>Add a comment</p>
        <input id='name' placeholder='name' required></input>
        <textarea id='comment' placeholder='Your insights' required></textarea>
        <button type='button' class='postCommentBtn' data-index = "${objectDetails.objectID}">Comment</button>
        </section>`;
  body.appendChild(detailContainer);
  detailContainer.classList.add('styling');
  loops = comments.length;
  return loops;
};

export default commentPage;
