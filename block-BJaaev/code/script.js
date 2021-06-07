// function main() {
let inputText = document.querySelector(".new-todo");
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
//   if (allTodos.filter(todo => todo.isDone === true).length > 0){
//     clearCompleted.style.display = "block";
//     console.log(allTodos.filter(todo => todo.isDone === true));
// }
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
  localStorage.setItem("todos", JSON.stringify(allTodos));
}

function handleActive(event) {
    event.preventDefault();
    let todosLeft = allTodos.filter((todo) => !todo.isDone);
    createUI(todosLeft)
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
    createUI(todosCompleted)
    active.classList.remove("selected");
    all.classList.remove("selected");
    completed.classList.add("selected");
}

// function handleClearCompleted(event) {
//    allTodos = allTodos.filter(todo => !todo.isDone);
//    createUI();
// };

inputText.addEventListener("keyup", handleInput);
active.addEventListener("click", handleActive);
all.addEventListener("click", handleAll);
completed.addEventListener("click", handleCompleted);
clearCompleted.addEventListener("click", () => {
    allTodos = allTodos.filter(todo => !todo.isDone);
   createUI();
});


createUI();

//}

// main();
