import './style.css';

import printArtObjects from './modules/displayArtObject.js';
import objectId from './modules/objectIds.js';

// const artsTable = document.querySelector('.arts')
// const printScore = async () => {
//     const result = await getScore();
//     const table = document.createElement('table');
//     table.innerHTML = '';
//    result.forEach((res) => {
//     table.innerHTML += `
//         <tr><td colspan="2"> <img src="${res.primaryImage}" alt="object image"</td></tr>
//         <tr><td colspan="2"> ${res.title}</td></tr>`
//         artsTable.appendChild(table);
//     });
// };

// call the addScore function and add the score
// const likeBtn = document.querySelector('.likeBtn');
// likeBtn.addEventListener('click', hello);

objectId.forEach((id) => {
  printArtObjects(id);
});
