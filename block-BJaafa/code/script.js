// Side Bar

let rootExtraLinks = document.querySelector(".extra-links");

extraLinks.forEach((link) => {
  let li = document.createElement("li");
  li.classList.add(`${link.name}`);
  let h3 = document.createElement("h3");
  h3.innerText = link.title;
  let img = document.createElement("img");
  img.src = link.image;
  img.alt = link.title;
  let a = document.createElement("a");
  a.href = link.url;
  let p = document.createElement("p");
  p.innerText = link.subtitle;
  a.append(img);
  li.append(h3, a, p);
  rootExtraLinks.append(li);
});

// Countdown Timer

let startButton = document.querySelector(".start-button");
let pauseButton = document.querySelector("#pause");
let resetButton = document.querySelector("#reset");

function getTwoDigitNumber(n){
    return n > 9 ? "" + n: "0" + n;
}

function handleStart(event) {
  let countDownInMinutes = 1;

  let future = new Date().setMinutes(
    new Date().getMinutes() + countDownInMinutes
  );

  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;

  let timerID = setInterval(() => {
      console.log("hello");
    let now = Date.now();
    let difference = future - now;
    let mm = Math.floor((difference % hours) / minutes);
    let ss = Math.round((difference % minutes) / seconds);
console.log(difference, mm, ss);
    if (difference < 1000) {
        clearInterval(timerID);
    }

    document.getElementById("minutes").innerText = getTwoDigitNumber(mm);
    document.getElementById("seconds").innerText = getTwoDigitNumber(ss);

    document.getElementById("start-button").innerText = "PAUSE";
    document.getElementById("start-button").classList.add("pause");

    //   console.log(mm + " : " + ss);
  }, 1000);
}

// function handleReset(event) {
//     // (document.getElementById("minutes").innerHTML = "25");
//     // (document.getElementById("seconds").innerHTML = "0");
// }

// function handlePause(event) {

// }

startButton.addEventListener("click", handleStart);
// resetButton.addEventListener("click", handleReset);
// pauseButton.addEventListener("click", handlePause);

// Tasks

let inputText = document.querySelector(".task");
let root = document.querySelector(".tasks");
let count = document.querySelector(".todo-count");
let all = document.querySelector(".all");
let active = document.querySelector(".active");
let completed = document.querySelector(".completed");
let clearCompleted = document.querySelector(".clear-completed");

let allTodos = JSON.parse(localStorage.getItem("todos")) || [];

function createUI(arr = allTodos) {
  root.innerHTML = "";
  arr.forEach((todo, i) => {
    {
      /* <li class="flex task-text">
              <div class="flex label">
                  <input type="checkbox" class="task"/>
                  <span class="checkmark"></span>
                  <p>task name</p>
              </div>
              <span>x</span>
          </li> */
    }
    let li = document.createElement("li");
    li.classList.add("flex");
    li.classList.add("task-text");
    let div = document.createElement("div");
    div.classList.add("flex");
    div.classList.add("label");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.classList.add("task");
    input.checked = todo.isDone;
    input.addEventListener("click", handleChange);
    input.setAttribute("data-id", i);
    let span1 = document.createElement("span");
    span1.classList.add("checkmark");
    let p = document.createElement("p");
    p.innerText = todo.task;
    let span2 = document.createElement("span");
    span2.innerText = "x";
    span2.classList.add("delete");
    span2.addEventListener("click", handleDelete);
    span2.setAttribute("data-id", i);
    div.append(input, span1, p);
    li.append(div, span2);
    root.append(li);
  });
  let itemsLeft = allTodos.filter((todo) => !todo.isDone).length;
  count.innerText = `${itemsLeft} ${itemsLeft > 1 ? "items" : "item"} left`;
}

function handleInput(event) {
  let value = event.target.value;
  if (event.keyCode == 13 && value !== "") {
    let todo = {
      task: value,
      isDone: false,
    };
    allTodos.push(todo);
    createUI();
    event.target.value = "";
  }
  localStorage.setItem("todos", JSON.stringify(allTodos));
}

function handleDelete(event) {
  let id = event.target.dataset.id;
  allTodos.splice(id, 1);
  createUI();
  localStorage.setItem("todos", JSON.stringify(allTodos));
}

function handleChange(event) {
  let id = event.target.dataset.id;
  allTodos[id].isDone = !allTodos[id].isDone;
  createUI();
  if (allTodos[id].isDone === true) {
    alert(`Congratulations! 🥳🥳🥳 You are one step closer to your goal!`);
  }
  localStorage.setItem("todos", JSON.stringify(allTodos));
}

function handleActive(event) {
  event.preventDefault();
  let todosLeft = allTodos.filter((todo) => !todo.isDone);
  createUI(todosLeft);
  active.classList.add("selected");
  all.classList.remove("selected");
  completed.classList.remove("selected");
}
function handleAll(event) {
  event.preventDefault();
  createUI();
  active.classList.remove("selected");
  all.classList.add("selected");
  completed.classList.remove("selected");
}

function handleCompleted(event) {
  event.preventDefault();
  let todosCompleted = allTodos.filter((todo) => todo.isDone);
  createUI(todosCompleted);
  active.classList.remove("selected");
  all.classList.remove("selected");
  completed.classList.add("selected");
}

inputText.addEventListener("keyup", handleInput);
active.addEventListener("click", handleActive);
all.addEventListener("click", handleAll);
completed.addEventListener("click", handleCompleted);
clearCompleted.addEventListener("click", () => {
  allTodos = allTodos.filter((todo) => !todo.isDone);
  createUI();
});

createUI();

// Habit Tracker

let tdAll = document.querySelectorAll("td");

let allHabits = JSON.parse(localStorage.getItem("habits")) || [];

tdAll.forEach((td) => {
  td.addEventListener("click", (event) => {
    if (!event.target.classList.contains("border-none")) {
      event.target.style.background = "#aca0a0";
      event.target.style.border = "1px solid white";
    } else if (event.target.style.background === "#aca0a0") {
        event.target.style.background = "#2b3349";
    }
  });
  localStorage.setItem("habits", JSON.stringify(allHabits));
});

// Clear Habit Tracker

let clear = document.querySelector('.clear');

function handleClear(event) {
    tdAll.forEach((td) => {
    if (td.style.backgroundColor = "#aca0a0") {
        td.style.backgroundColor = "#2b3349";
        td.style.borderTop = "none";
        td.style.borderBottom="none";
    }
});
}

clear.addEventListener('click', handleClear)



// Get notifications

let addNotification = document.querySelector(".notifications");

function handleNotifications(event) {
  console.log("house");
  alert(`Click on the event that interests you and click 'copy to calendar'. 

This will copy the event to your own Google calendar so you can set a reminder.
   
Don't forget to also sign up for the event first by visiting the link in the description of each event. Some events may require registration many days in advance. 
   
Online CoWork is not affiliated with any of these events. Please check with the host directly.

NOTE: This calendar includes paid and free events.
   
Thank you and enjoy!`);
}

addNotification.addEventListener("click", handleNotifications);

// Clock seconds jump
// Clock pause button
// clock reset button
// when timer gets to zero, alert 'Did you do it'?
// When timer gets to zero, reset to 25:00
// checks box and alert message after
// can't unclick habit tracker boxes
// Local storage for clock
// local storage for all input boxes and text areas
// put all in 'main' function
// maybe add date
//add link to slack
// try add 'why' to alert box
// need to connect latest post from website

// Humans of Online CoWork
// Maybe side bar box telling them to post on website
