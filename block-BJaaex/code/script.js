// - 16 square boxes
// - Each box can be in two state open and close
// - When you click on the box you change the state form open to close or close to open
// - You have to click in a pair (2 boxes)
//     - If both boxes are same it will become green (it's a match)
//     - If both boxes are not the same it will become res go back to closed state
// - The aim is to match all the boxes and make each boxes green
// - 16 square boxes
// 8 pair of icons [1,2,3,4,5,6,7,8]
// Display those icons on the screen (ul)
// select the ul
// using the arr create li
// append li into ullet cards = document.querySelector(".cards");

// 16 square boxes
// 8 pair of icons [1,2,3,4,5,6,7,8] (data.js)
// randomize icons

let randomCards = [...cards].sort(() => Math.random() - 0.5);

// Display those icons on the screen (ul)
// select the ul
// using the arr create li
// append li into ullet cards = document.querySelector(".cards");

let root = document.querySelector("ul");
let selected = document.querySelectorAll(".open");

// `<li class="${card.name}>
//     <i class="fas ${card.image}"></i>
// </li>`

let clickedElements = [];
let count = 0;
// let firstGuess = "";
// let secondGuess = "";
let previousTarget = null;
let delay = 1200;
let selectedElements = [];

randomCards.forEach((card) => {
  let li = document.createElement("li");
  li.setAttribute("data-id", card.name);
  li.addEventListener("click", (event) => {
    let clicked = event.target;
    if (event.target) {
      clickedElements.push(event.target);
    }
    if (count < 2) {
      count++;
      event.target.classList.add("open");
    }
    if (event.target.classList.contains("open") && isMatching(selectedElements))  {
      event.target.classList.add("match");
    } else {
      event.target.classList.remove("open");
    }
//     if (clickedElements.length === 2) {
//       if (!isMatching(clickedElements)) {
//         setTimeout(() => {
//           clickedElements.forEach((elm) => {
//             elm.classList.remove("open");
//             elm.classList.add("closed");
//           });
//           clickedElements = [];
//         }, 2000);
//       } else {
//         setTimeout(() => {
//           clickedElements = [];
//         }, 2000);
//       }
//       return;
//     }
//   });
  let icon = document.createElement("i");
  icon.classList.add("fas");
  icon.classList.add(`${card.image}`);
  li.append(icon);
  root.append(li);
});

function isMatching(arr) {
  let first = arr[0];
  let second = arr[1];
  return first.dataset.id === second.dataset.id;
}
