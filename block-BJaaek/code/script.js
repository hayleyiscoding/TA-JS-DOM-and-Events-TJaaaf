let boxFirst = document.querySelector('.first');
let boxSecond = document.querySelector('.second');


boxFirst.addEventListener("click", setBg);
boxSecond.addEventListener("mousemove",setBg);


function setBg() {
    function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    boxFirst.innerHTML = "#" + randomColor;
}
}
