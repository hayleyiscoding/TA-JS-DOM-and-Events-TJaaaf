// Select the boxes

let boxOne = document.querySelector('.first');
let boxTwo = document.querySelector('.second');

// Create Random Color Generator Function

function generateRandomColor() {
    let hexCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    let color = "#"; // all hex codes start with hashtag

    for(let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * 16);
        color = color + hexCharacters[randomNumber];
    }

    return color;
}

// Creat handleClick and handleMouse function

function handleClick() {
    let randomColor = generateRandomColor();
    boxOne.style.backgroundColor = randomColor;
}

function handleMouseMove() {
    let randomColor = generateRandomColor();
    boxTwo.style.backgroundColor = randomColor;
}

// add EventListener

boxOne.addEventListener("click", handleClick);
boxTwo.addEventListener("mousemove",handleMouseMove);