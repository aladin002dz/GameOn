const iconMenu = document.querySelector(".icon");
iconMenu.addEventListener("click", afficherNav);
function afficherNav() {
  const navMenu = document.getElementById("myTopnav");
  navMenu.classList.toggle("responsive");
}

// DOM Elements modal
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close");

// Événement ouverture modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Événement fermeture modal
modalCloseBtn.addEventListener("click", closeModal);

// Fermer la modal en cliquant en dehors
window.addEventListener("click", (e) => {
  if (e.target === modalbg) {
    closeModal();
  }
});

// Fonction ouverture modal
function launchModal() {
  modalbg.style.display = "block";
}

// Fonction fermeture modal
function closeModal() {
  modalbg.style.display = "none";
  formReserve.classList.remove("formulaireCache");
  formConfirmation.classList.add("formulaireCache");
}