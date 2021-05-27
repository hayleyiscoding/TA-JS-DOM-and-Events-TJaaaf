let form = document.querySelector("form");
// let parentElm = nameElm.parentElement
let nameError = "";

function cantBeANumber(str) {
  return str.split("").some((e) => Number(e));
}

function handleSubmit(event) {
  event.preventDefault();
  let nameElm = event.target.elements.name;
  let emailElm = event.target.elements.email;
  let phoneNumberElm = event.target.elements.phoneNumber;
  let usernameElm = event.target.elements.username;
  let passwordElm = event.target.elements.password;
  let confirmPasswordElm = event.target.elements.confirmPassword;

  if (nameElm.value.trim() === "") {
    nameError = "* This field can't be empty";
    // parentElm.classList.add("error");
  } else if (cantBeANumber(nameElm.value)) {
    userNameError = "You can't use numbers in the name field";
    //   parentElm.classList.add("error");
  } else {
    nameError = "";
    // parentElm.classList.add("success");
    // parentElm.classList.remove("error");
  }

  if (emailElm.value.trim() === "") {
    nameError = "* This field can't be empty";
    // parentElm.classList.add("error");
  } else if (usernameElm.value.length < 6) {
    nameError = "* Email can't be less than 6 characters";
    // parentElm.classList.add("error");
  } else {
    nameError = "";
    // parentElm.classList.add("success");
    // parentElm.classList.remove("error");
  }

  if (phoneNumberElm.value.trim() === "") {
    nameError = "* This field can't be empty";
    // parentElm.classList.add("error");
  } else if (phoneNumberElm.value.length < 7) {
    nameError = "* Phone Number can't be less than 7 characters";
    // parentElm.classList.add("error");
  } else {
    nameError = "";
    // parentElm.classList.add("success");
    // parentElm.classList.remove("error");
  }

  if (usernameElm.value.trim() === "") {
    nameError = "* This field can't be empty";
    // parentElm.classList.add("error");
  } else if (usernameElm.value.length < 4) {
    nameError = "* Username can't be less than 4 characters";
    //     // parentElm.classList.add("error");
  } else {
    nameError = "";
    // parentElm.classList.add("success");
    // parentElm.classList.remove("error");
  }

  if (passwordElm.value.trim() === "") {
    nameError = "* This field can't be empty";
    // parentElm.classList.add("error");
  } else {
    nameError = "";
    // parentElm.classList.add("success");
    // parentElm.classList.remove("error");
  }

  if (confirmPasswordElm.value.trim() === "") {
    nameError = "* This field can't be empty";
    // parentElm.classList.add("error");
  } else {
    nameError = "";
    // parentElm.classList.add("success");
    // parentElm.classList.remove("error");
  }

  nameElm.nextElementSibling.innerText = nameError;
  emailElm.nextElementSibling.innerText = nameError;
  phoneNumberElm.nextElementSibling.innerText = nameError;
  usernameElm.nextElementSibling.innerText = nameError;
  passwordElm.nextElementSibling.innerText = nameError;
  confirmPassword.nextElementSibling.innerText = nameError;
}

form.addEventListener("submit", handleSubmit);

// parentElm.classList.add("error");
//   } else if (nameElm.value.length < 4) {
//     nameError = "Username can't be less than 4 characters";
//     // parentElm.classList.add("error");
// parentElm.classList.add("success");
// parentElm.classList.remove("error");
// if (usernameElvalue === "") {
//     usernameError = "Can't be empty";
// } else if (elements.name.pattern.value !== [^0-9]) {
//     userNameError = "You can't use numbers in the name field";
// }

// if (elements.email.value === "") {
//     usernameError = "Can't be empty";
// } else if (elements.email.value ) {
//     userNameError = "You can't use numbers in the name field";
// }
// let parentElm = nameElm.parentElement
