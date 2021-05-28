let form = document.querySelector("form");

let userInfo = {};
let errorMessages = {};

function displayError(name) {
  let elm = form.elements[name];
  elm.nextElementSibling.innerText = errorMessages[name];
  elm.classList.add("error");
}

function displaySuccess(name) {
  let elm = form.elements[name];
  elm.nextElementSibling.innerText = "";
  errorMessages[name] = "";
  elm.classList.remove("error");
  elm.classList.add("success");
}

function handleSubmit(event) {
  event.preventDefault();
  let elements = event.target.elements;

  const name = elements.name.value;
  const email = elements.email.value;
  const phone = elements.phone.value;
  const username = elements.username.value;
  const password = elements.password.value;
  const passwordCheck = elements.passwordCheck.value;

//1. Username can't be less than 4 characters
  if (username.length <= 4 && username !== "") {
    errorMessages.username = "* Username can't be less than 4 characters";
    displayError('username');
  } else if (username.trim() === "") {
    errorMessages.username = "* This field can't be empty";
    displayError('username');
  } else {
    displaySuccess('username');
  }

// 2. Name can't be numbers
  if (!isNaN(name) && name !== "") {
    errorMessages.name = `* Name can't be numbers`;
    displayError('name');
  } else if (name.trim() === "") {
    errorMessages.name = "* This field can't be empty";
    displayError('name');
  } else {
    displaySuccess('name');
  }

// 3. Email must contain the symbol `@`
// 4. Email must be at least 6 characters

  if (!email.includes('@') && email !== "") {
    errorMessages.email = "* Not a valid email address";
    displayError('email');
  } else if (email.length <= 6 && email !== "") {
    errorMessages.email = "* Email must be at least 6 characters";
    displayError('email');
  } else if (email.trim() === "") {
    errorMessages.email = "* This field can't be empty";
    displayError('email');
  } else {
    displaySuccess('email');
  }

// 5. Phone numbers can only be a number
// 6. Length of phone number can't be less than 7

  if (isNaN(phone) && phone !== "") {
    errorMessages.phone = "* Phone numbers can only be a number";
    displayError('phone');
  } else if (phone.length < 7 && phone !== "") {
    errorMessages.phone = "* Length of phone number can't be less than 7";
    displayError('phone');
  } else if (phone.trim() === "") {
    errorMessages.phone = "* This field can't be empty";
    displayError('phone');
  } else {
    displaySuccess('phone');
  }

// 8. Password and confirm password must be same.

  if (password !== passwordCheck) {
    errorMessages.password = "* Both passwords need to be the same";
    errorMessages.passwordCheck = "* Both passwords need to be the same";
    displayError('password');
    displayError('passwordCheck');
  } else if (password === "" || passwordCheck === "") {
    errorMessages.password = "* This field can't be empty";
    errorMessages.passwordCheck = "* This field can't be empty";
    displayError('password');
    displayError("passwordCheck");
  } else {
    displaySuccess('password');
    displaySuccess('passwordCheck');
  }
  // Once the form is valid it should alert `User Added Successfully!`

  if (Object.values(errorMessages).filter(Boolean).length === 0) {
    alert('User Added Successfully!')
  }
}

form.addEventListener("submit", handleSubmit);

