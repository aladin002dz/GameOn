// Fonction message d'erreur
function showError(formDataParent, errorMessage) {
  formDataParent.setAttribute("data-error-visible", "true");
  formDataParent.setAttribute("data-error", errorMessage);
  return false;
}

function hideError(formDataParent) {
  formDataParent.setAttribute("data-error-visible", "false");
}


function nameValidation(nameInputId) {
  const nameInput = document.getElementById(nameInputId);
  const name = nameInput.value;
  const formDataParent = nameInput.parentNode;
  if (name.length >= 2) {
    hideError(formDataParent);
    return true;
  }
  showError(formDataParent, `Veuillez entrer 2 caractères ou plus pour le ${nameInputId === "first" ? "prénom" : "nom"}.`);
  return false;
}
  
  // Fonction pour valider l'email
  function emailValidation() {
    let email = document.getElementById("email").value;
    let emailRegexp = new RegExp("[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}");
    const formDataParent = document.getElementById("email").parentNode;
    if (emailRegexp.test(email)) {
      hideError(formDataParent);
      return true;
    } 
    showError(formDataParent, "Veuillez entrer une adresse mail valide.");
    return false;
  }

  // Fonction pour valider la date de naissance
  function birthdateValidation() {
    let birthdate = document.getElementById("birthdate").value;
    const formDataParent = document.getElementById("birthdate").parentNode;
    if (birthdate) {
      hideError(formDataParent);
      return true;
    }
    showError(formDataParent, "Veuillez entrer votre date de naissance.");
    return false;
  }

  // Fonction pour valider la quantité de tournois
  function quantityValidation() {
    let quantity = document.getElementById("quantity").value;
    const formDataParent = document.getElementById("quantity").parentNode;
    if (quantity !== "" && !isNaN(quantity)) {
      hideError(formDataParent);
      return true;
    }
    showError(formDataParent, "Veuillez entrer le nombre de tournois.");
    return false;
  }
  
  // Fonction pour valider la location 
    function locationValidation() {
        let location = document.querySelector('input[name="location"]:checked');
        const formDataParent = document.querySelector('input[name="location"]').closest(".formData");
        if (location) {
          hideError(formDataParent);
          return true;
        }
        showError(formDataParent, "Veuillez choisir une ville.");
        return false;
    }

    // Fonction pour valider les conditions d'utilisation
    function conditionsValidation() {
        let conditions = document.getElementById("checkbox1").checked;
        const formDataParent = document.getElementById("checkbox1").parentNode;
        if (conditions) {
          hideError(formDataParent);
          return true;
        }
        showError(formDataParent, "Veuillez accepter les conditions d'utilisation.");
        return false;
    }

  // Fonction pour valider le formulaire si les critères sont correct
  function formValidation() {
    if (nameValidation("first") & nameValidation("last")  & emailValidation() & birthdateValidation() & quantityValidation() & locationValidation() & conditionsValidation() === true) {
      return true;
  } else {
    // btnSubmit.disabled = true;
    return false;
  }
  }
  
  // Fonction pour gérer l'envoi du formulaire
    const formReserve = document.querySelector('form[name="reserve"]');
    formReserve.addEventListener("submit", (event) => {
      event.preventDefault();
      if (formValidation() === false) {
        return; // Si le formulaire n'est pas valide, on arrète le traitement
      } 
      afficherConfirmation();
      formReserve.reset();
    })
    const formConfirmation = document.querySelector('form[name="confirmation"]');
    formConfirmation.addEventListener("submit", (event) => {
      event.preventDefault();
      closeModal();
    })
  function afficherConfirmation() {
    formReserve.classList.add("formulaireCache");
    formConfirmation.classList.remove("formulaireCache");
  }