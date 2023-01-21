import fetchComment from './fetchComment.js';
import commentCounter from './commentCounter.js';

const body = document.querySelector('body');
const detailContainer = document.createElement('div');

const commentPage = async (objectDetails) => {
  const commentsRes = await fetchComment(objectDetails.objectID);
  const objInfo = `
    <section id="card">
        <p id='close'>X</p>
        <image class="imgContainer" src = "${objectDetails.primaryImage}" alt="Object Image"/>
        <h2 class='title1 detail'>${objectDetails.title}</h2>
        <p class='detail1'><strong> Department:</strong> ${objectDetails.department}</p>
        <p class='detail2'><strong>  Culture: </strong> ${objectDetails.culture}</p>
        <p class='detail1'><strong>  Dimensions: </strong> ${objectDetails.dimensions}</p>
        <p class='detail2'><strong> Date: </strong> ${objectDetails.objectBeginDate} to ${objectDetails.objectEndDate} </p>
        `;

  let comment = '';
  if (commentsRes) {
    comment += '<p id="dComment"></p> <div class="feedback">';
    for (let i = 0; i < commentsRes.length; i += 1) {
      comment += `
        <div>
          <p id='fdate'>${commentsRes[i].creation_date} </p>
          <p id='fuser'>${commentsRes[i].username}: </p>
          <p id='fcomment'>${commentsRes[i].comment}</p>
        </div>`;
    }
    comment += '</div>';
  }

  const commentForm = `<p id='aComment'>Add a comment</p>
      <div class="commentPost">
        <input id='name' placeholder='name' required></input>
        <textarea id='comment' placeholder='Your insights' required></textarea>
        <button type='button' class='postCommentBtn' data-index = "${objectDetails.objectID}">Comment</button>
      </div>
        </section>`;

  detailContainer.innerHTML = objInfo + comment + commentForm;
  detailContainer.className = 'popup';
  detailContainer.classList.add('popupWrapper');
  body.appendChild(detailContainer);

  const commentCount = commentCounter();
  if (commentCounter) {
    document.querySelector('#dComment').innerHTML = `Comments (${commentCount})`;
  }
};

export default commentPage;
