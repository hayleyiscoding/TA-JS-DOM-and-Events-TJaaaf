let parentBox = document.querySelector('.boxes');

function getRandomNumber(max) {
    return Math.floor(Math.random() * max)
}

function generateRandomColor() {
    let hexCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    let color = "#"; // all hex codes start with hashtag

    for(let i = 0; i < 6; i++) {
        let randomNumber = getRandomNumber(16);
        color = color + hexCharacters[randomNumber];
    }

    return color;
}

for(let i = 0; i < 500; i++) {
    let div = document.createElement('div');
    div.classList.add("box")
    let h3 = document.createElement('h3');
    let randomNo = getRandomNumber(500);
    h3.innerText = randomNo;
    div.append(h3);
    parentBox.append(div);
}

let allBoxes = document.querySelectorAll(".box");

function handleMouseMove() {
    allBoxes.forEach(box => {
        box.style.backgroundColor = generateRandomColor()
        box.querySelector('h3').innerText = getRandomNumber(500)
    });
}

parentBox.addEventListener("mousemove", handleMouseMove);


