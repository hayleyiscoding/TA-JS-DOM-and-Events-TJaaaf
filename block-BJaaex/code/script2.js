// Array has 8 icons, but we need 16. So we need to concatenate the 2 arrays and also sort them randomly.

var gameGrid = cardsArray.concat(cardsArray).sort(function () {
    return 0.5 - Math.random();
  });
  
//Defining the variables

  var firstGuess = '';
  var secondGuess = '';
  var count = 0;
  var previousTarget = null;
  var delay = 1200;
  
  // Selecting the element (select whole grid)

  var game = document.getElementById('game');

  // Creating the grid, giving it a class name.

  var grid = document.createElement('section');
  grid.setAttribute('class', 'grid');
  game.appendChild(grid);

  // Create the cards. Loop through all icons to create cards, adding classes and dataset id's to each card. Note: each card has 3 divs - card, front, back. Append elements at the end.
  
  gameGrid.forEach(function (item) {
    var name = item.name,
        img = item.img;
  
  
    var card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = name;
  
    var front = document.createElement('div');
    front.classList.add('front');
  
    var back = document.createElement('div');
    back.classList.add('back');
    // Note: we are adding the icon as a background image
    back.style.backgroundImage = `url("${item.img}")`
  
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
  });

  // Adding a match function. To do this, we have to create a CSS class called 'match' and add it to all cards that have been selected (by looping through all the cards that have been selected). Note, we have to select the elements with class 'selected' first using querySelectorAll.
  
  var match = function match() {
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
      card.classList.add('match');
    });
  };

  // Create a function to reset the guesses. Note: In this function, we have to select the 'selected' elements using querySelectorAll, and we have to then remove the 'selected' class.
  
  var resetGuesses = function resetGuesses() {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;
  
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
      card.classList.remove('selected');
    });
  };

  //Now, we have to add an event listener of type 'click' with callback function on the entire grid.
  
  grid.addEventListener('click', function (event) {
    // First, define a variable for the event.target.
    var clicked = event.target;
    // Second, define the times when we want the event listener to return the grid to it's original state. For example: 
    // 1) if someone clicks the grid itself and not a card, nothing should happen. 
    // 2) If they click the same card, nothing should happen
    // 3) If they click a selected card, nothing should happen.
    // 4) If they click a matched card, nothing should happen.
    // All of these don't return anything, that's why the blank return statement.
    if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
      return;
    }
    // Thirdly, we need to specify a rule that says only two cards can be clicked. This will be stored in the 'count' variable above.
    if (count < 2) {
      count++;
      // To show a selected card, we need to add it's name to 'FirstGuess' and add the 'selected' class.
      if (count === 1) {
        firstGuess = clicked.parentNode.dataset.name;
        console.log(firstGuess);
        clicked.parentNode.classList.add('selected');
        // Also, if it's our secondGuess, we need to do the same.
      } else {
        secondGuess = clicked.parentNode.dataset.name;
        console.log(secondGuess);
        clicked.parentNode.classList.add('selected');
      }
      // If our first guess equals our second guess, we need to call the 'match' function and then set a delay. I don't understand this part!
      if (firstGuess && secondGuess) {
        if (firstGuess === secondGuess) {
          setTimeout(match, delay);
        }
        setTimeout(resetGuesses, delay);
      }
      // We add this because if someone clicks on the same card twice, it will give a false match because the data sets are the same. So to avoid, this, declare a "previousTarget" variable as 'null' and set it to clicked.
      previousTarget = clicked;
    }
  });