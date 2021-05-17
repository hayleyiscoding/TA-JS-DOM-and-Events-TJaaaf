let firstBoxes = document.querySelectorAll('.first li');
let secondBox = document.querySelector('.second')

firstBoxes.forEach((box, index) => {
    box.addEventListener("click", (event) => {
        event.target.innerText = index + 1;
        setTimeout(() => {
            event.target.innerText = "";
        }, 5000);
    });
});

secondBox.addEventListener("click", (event) => {
    let text = event.target.dataset.text;
    event.target.innerText = text;
    setTimeout(() => {
        event.target.innerText = "";
    }, 5000);
});
