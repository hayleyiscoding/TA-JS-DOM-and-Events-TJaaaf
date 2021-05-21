let form = document.querySelector("form");
let modal = document.querySelector(".modal_overlay");
let modalInfo = document.querySelector(".modal_info");

let userData = {};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let elements = event.target.elements;

  userData.name = elements.name.value;
  userData.email = elements.email.value;
  userData.movies = elements.movies.value;
  userData.color = elements.color.value;
  userData.rating = elements.range.value;
  userData.book = elements.book.value;
  userData.terms = elements.terms.checked;

  modal.classList.add("open");

  let close = document.querySelector(".modal_close");

  close.addEventListener("click", () => {
    modal.classList.remove("open");
  });

  displayInfo(userData);
});

function displayInfo(data = {}) {
  modalInfo.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.innerText = `Hello ${data.name}!`;
  let email = document.createElement("p");
  email.innerText = `EMAIL: ${data.email}`;
  let movies = document.createElement("p");
  movies.innerText = `YOU LOVE: ${data.movies}`;
  let color = document.createElement("p");
  color.innerText = `COLOR: ${data.color}`;
  let rating = document.createElement("p");
  rating.innerText = `RATING: ${data.rating}`;
  let book = document.createElement("p");
  book.innerText = `GENRE: ${data.book}`;
  let terms = document.createElement("p");
  terms.innerText = `👉: ${
    data.terms
      ? "You accepted the terms and conditions"
      : "You did not accept the terms and conditions"
  }`;
  modalInfo.append(h1, email, movies, color, rating, book, terms);
}
