let input = document.querySelector(`input[type="text"]`);
let rootElm = document.querySelector(".movies-list");

// console.log(input);

let allMovies = [
  {
    name: "Forrest Gump",
    watched: false,
  },
];

input.addEventListener("keyup", (event) => {
//   console.log(event.keyCode);
  if (event.keyCode == 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = "";
    createMovieUI();
  }
});

function deleteMovie(event) {
    let id = event.target.dataset.id;
    allMovies.splice(id, 1);
    createMovieUI();
}

// function deleteMovie(event) {
//     event.target.parentElement.remove();
// }
// The above is not the best way, rather do the way that is not commented out

function handleChange(event) {
    // console.log(event.target);
    let id = event.target.id;
    // console.log(id);
    allMovies[id].watched = !allMovies[id].watched;
}

function createMovieUI() {
  rootElm.innerHTML = "";
  allMovies.forEach((movie, i) => {
    let li = document.createElement("li");
    li.classList.add("flex");
    let input = document.createElement("input");
    input.classList.add("checkbox");
    input.type = "checkbox";
    input.id = i;
    input.checked = movie.watched;
    input.addEventListener('click', handleChange); // this line goes along with function above
    let p = document.createElement("p");
    p.for = i;
    p.innerText = movie.name;
    let span = document.createElement("span");
    span.innerText = "❌";
    span.addEventListener('click', deleteMovie) // this line goes along with function above
    span.setAttribute("data-id", i);
    // console.log(li);
    li.append(input, p, span);
    // console.log(li);
    rootElm.append(li);
  });
}
