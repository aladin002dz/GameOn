function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements modal
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalCloseBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}




// Fonction 2 caractères minimum (prénom et nom)
function firstNameValidation() {
  let firstName = document.getElementById("first").value;
  if (firstName.length >= 2) {
    return true;
  }
  return false;
}

function lastNameValidation() {
  let lastName = document.getElementById("last").value;
  if (lastName.length >= 2) {
    return true;
  }
  return false;
}

// Fonction pour valider l'email
function emailValidation() {
  let email = document.getElementById("email").value;
  let emailRegexp = new RegExp("[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}");
  if (emailRegexp.test(email)) {
    return true;
  }
  return false;
}

// Fonction pour valider le formulaire si les critères sont correct
function formValidation() {
  let btnSubmit = document.querySelector(".btn-submit");

  if (firstNameValidation() && lastNameValidation() && emailValidation() === true) {
  btnSubmit.disabled = false;
  
} else {
  btnSubmit.disabled = true;
}
}

// Fonction pour gére l'envoi du formulaire
function formSubmit() {
  let form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formValidation();
  })
}

formSubmit();