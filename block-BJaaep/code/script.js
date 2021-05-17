let rootElement = document.querySelector("ul");
let allBoxes = document.querySelectorAll("box");

function createUserLayout() {
    for(let i = 0; i <= 12; i++) {
        let li = document.createElement('li');
        li.classList.add('box');
        li.innerText = [i];
        li.append(ul);
    }
}

allBoxes.forEach((box) => {
    rootElement.addEventListener('click', handleBtnClick);
    
});



