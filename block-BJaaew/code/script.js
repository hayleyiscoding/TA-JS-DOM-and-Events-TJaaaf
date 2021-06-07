
let root = document.querySelector(".mainbox");
let rootFilterByHouse = document.querySelector(".filter-by-house");
let search = document.querySelector(".search-bar");

let activeHouse = "";

let allPeople = got.houses.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);

let allHouses = got.houses.map((house) => house.name);

// let createCards = allPeople.map((person) => {
//   return `<li class = "card flex-center flex-30">
//             <div class = "info flex">
//                 <img 
//                 src = "${person.image}" 
//                 alt = "${person.name}"
//                 />
//                 <h2>${person.name}</h2>
//             </div>
//             <p>${person.description}</p>
//             <a href = "${person.wikiLink}">Learn More!</a>
//         </li>`;
// });
// root.innerHTML = createCards.join("");

function createCardsUI(data = []) {
    root.innerHTML = "";
    data.forEach((person) => {
        let li = document.createElement('li');
        li.classList.add("card");
        li.classList.add("flex-center");
        li.classList.add("flex-30");
        let div = document.createElement('div');
        div.classList.add("flex");
        div.classList.add("info");
        let img = document.createElement('img');
        img.alt = person.name;
        img.src = person.image;
        let h2 = document.createElement('h2');
        h2.innerText = person.name;
        let p = document.createElement('p');
        p.innerText = person.description;
        let a = document.createElement('a');
        a.innerText = "Learn More!";
        div.append(img, h2)
        li.append(div, p, a);
        root.append(li);
    })

}

// let createHouseFilter = allHouses.map((house =[]) => {
//   return `<li>
//             <a href = "${house}">${house}</a>
//         </li>`;
// });
// filterByHouse.innerHTML = createHouseFilter.join("");

function createHouseFilterUI(houses = []) {
    rootFilterByHouse.innerHTML = "";
    houses.forEach((house) => {
        let li = document.createElement('li');
        li.innerText = house;
        if (activeHouse === house) {
            li.classList.add('active');
        }
        li.addEventListener('click', () => {
            activeHouse = house;
            let filteredPeopleOfHouse = got.houses.find(houseTag => houseTag.name === house).people || [];
            createCardsUI(filteredPeopleOfHouse);
            createHouseFilterUI(allHouses);
        });
        rootFilterByHouse.append(li);
    })
}

function handleSearch(event) {
    let searchText = event.target.value;
    let filteredPeople = allPeople.filter(p => p.name.toLowerCase().includes(searchText.toLowerCase()))
    createCardsUI(filteredPeople);
}

search.addEventListener('input', handleSearch);

createCardsUI(allPeople);
createHouseFilterUI(allHouses);

