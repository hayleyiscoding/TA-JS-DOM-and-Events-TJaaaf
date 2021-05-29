let form = document.querySelector("form");

let userInput = [];

function createLayout() {
  form.innerHTML = "";
  userInput.forEach((movie) => {
    let div = form.createElement("div");
    div.classList.add("form-control");
    let divCheckBox = form.createElement('div"');
    let input = form.createElement("input");
    input.type = "checkbox";
    input.name = userInput.movie;
    input.id = userInput.movie;
    let label = form.createElement("label");
    label.for = userInput.movie;
    label.innerText = userInput.movie;
    let divDelete = form.createElement("div");
    divDelete.classList.add("delete");
    divDelete.innerText("❌");
    div.append(divCheckbox, divDelete);
    divCheckBox.append(input, label);
  });
}

function handleSubmit(event) {
    event.preventDefault();
    userInput.movie = event.target.value;
    createLayout();
}

form.addEventListener("submit", handleSubmit);

{/* <div class="form-control flex">
  <div>
    <input type="checkbox" name="forrestGump" id="forrestGump" />
    <label for="forrestGump">Forrest Gump</label>
  </div>
  <div class="delete">❌</div>
</div>; */}
