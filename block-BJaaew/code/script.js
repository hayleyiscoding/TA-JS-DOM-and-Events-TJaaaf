
let parentElem = document.querySelector(".mainbox");
let filterByHouse = document.querySelector(".filter-by-house");
let search = document.querySelector(".search-bar");

let allPeople = got.houses.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);

let allHouses = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.name);
    return acc;
  }, []);

let cardsHTML = allPeople.map((person) => {
  return `<li class = "card flex-center flex-30">
            <div class = "info flex">
                <img 
                src = "${person.image}" 
                alt = "${person.name}"
                />
                <h2>${person.name}</h2>
            </div>
            <p>${person.description}</p>
            <a href = "${person.wikiLink}">Learn More!</a>
        </li>`;
});
parentElem.innerHTML = cardsHTML.join("");

let houseNamesHTML = allHouses.map((house) => {
  return `<li>
            <a href = "${house}">${house}</a>
        </li>`;
});
filterByHouse.innerHTML = houseNamesHTML.join("");

function handleClick(event) {
    event.preventDefault();
    event.target.value

}

function handleInput(event) {
    event.target.value;
    
}

filterByHouse.addEventListener('click', handleClick);
search.addEventListener('input', handleInput);
