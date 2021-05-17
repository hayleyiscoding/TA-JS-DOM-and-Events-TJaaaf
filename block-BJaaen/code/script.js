let userRoot = document.querySelector(".user-icons");
let computerRoot = document.querySelector(".computer-icons");
let result = document.querySelector(".result");
let reset = document.querySelector("button");

let dataSet = [
  {
    name: "scissors",
    beats: "paper",
  },
  {
    name: "paper",
    beats: "rock",
  },
  {
    name: "rock",
    beats: "scissors",
  },
];

let userSelected = {},
  computerSelected = {};

function getRandomNumber(max = 3) {
  return Math.floor(Math.random() * max);
}

function getWinner(user, computer) {
  //tie
  if (user.name === computer.name) {
    result.innerText = "It's a tie!";
    // user won
  } else if (user.beats === computer.name) {
    result.innerText = "🥳 You won! 🥳";
    // computer won
  } else {
    result.innerText = "❌ You lost! ❌";
  }
}

function createUserLayout() {
  userRoot.innerHTML = "";

  dataSet.forEach((icon) => {
    let li = document.createElement("li");
    let i = document.createElement("i");
    i.className = `far fa-hand-${icon.name}`;

    if (userSelected.name === icon.name) {
      li.classList.add("selected");
    }

    li.addEventListener("click", () => {
      userSelected = icon;
      computerSelected = dataSet[getRandomNumber()];
      getWinner(userSelected, computerSelected);
      rerender();
    });

    li.append(i);
    userRoot.append(li);
  });
}

createUserLayout();

function createComputerLayout() {
  computerRoot.innerHTML = "";

  dataSet.forEach((icon) => {
    let li = document.createElement("li");
    let i = document.createElement("i");
    i.className = `far fa-hand-${icon.name}`;
    if (computerSelected.name === icon.name) {
      li.classList.add("selected");
    }
    li.append(i);
    computerRoot.append(li);
  });
}

createComputerLayout();

function rerender() {
  createUserLayout();
  createComputerLayout();
}

reset.addEventListener("click", () => {
  userSelected = {};
  computerSelected = {};
  rerender();
});
