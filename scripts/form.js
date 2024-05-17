// Fonction 2 caractères minimum (prénom et nom)
function firstNameValidation() {
    let firstName = document.getElementById("first").value;
    const formDataParent = document.getElementById("first").parentNode;
    if (firstName.length >= 2) {
      formDataParent.setAttribute("data-error-visible", "false");
      return true;
    }
    formDataParent.setAttribute("data-error-visible", "true");
    formDataParent.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    return false;
  }

  function lastNameValidation() {
    let lastName = document.getElementById("last").value;
    const formDataParent = document.getElementById("last").parentNode;
    if (lastName.length >= 2) {
      formDataParent.setAttribute("data-error-visible", "false");
      return true;
    }
    formDataParent.setAttribute("data-error-visible", "true");
    formDataParent.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    return false;
  }
  
  // Fonction pour valider l'email
  function emailValidation() {
    let email = document.getElementById("email").value;
    let emailRegexp = new RegExp("[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}");
    const formDataParent = document.getElementById("email").parentNode;
    if (emailRegexp.test(email)) {
      formDataParent.setAttribute("data-error-visible", "false");
      return true;
    } 
    formDataParent.setAttribute("data-error-visible", "true");
    formDataParent.setAttribute("data-error", "Veuillez entrer une adresse mail valide.");
    return false;
  }

  // Fonction pour valider la date de naissance
  function birthdateValidation() {
    let birthdate = document.getElementById("birthdate").value;
    const formDataParent = document.getElementById("birthdate").parentNode;
    if (birthdate) {
      formDataParent.setAttribute("data-error-visible", "false");
      return true;
    }
    formDataParent.setAttribute("data-error-visible", "true");
    formDataParent.setAttribute("data-error", "Veuillez entrer votre date de naissance.");
    return false;
  }

  // Fonction pour valider la quantité de tournois
  function quantityValidation() {
    let quantity = document.getElementById("quantity").value;
    const formDataParent = document.getElementById("quantity").parentNode;
    if (quantity.length >= 1) {
      formDataParent.setAttribute("data-error-visible", "false");
      return true;
    }
    formDataParent.setAttribute("data-error-visible", "true");
    formDataParent.setAttribute("data-error", "Veuillez entrer le nombre de tournois.");
    return false;
  }
  
  // Fonction pour valider la location 
    function locationValidation() {
        let location = document.querySelector('input[name="location"]:checked');
        const formDataParent = document.querySelector('input[name="location"]').closest(".formData");
        if (location) {
          formDataParent.setAttribute("data-error-visible", "false");
          return true;
        }
        formDataParent.setAttribute("data-error-visible", "true");
        formDataParent.setAttribute("data-error", "Veuillez choisir une ville.");
        return false;
    }

    // Fonction pour valider les conditions d'utilisation
    function conditionsValidation() {
        let conditions = document.getElementById("checkbox1").checked;
        const formDataParent = document.getElementById("checkbox1").parentNode;
        if (conditions) {
          formDataParent.setAttribute("data-error-visible", "false");
          return true;
        }
        formDataParent.setAttribute("data-error-visible", "true");
        formDataParent.setAttribute("data-error", "Veuillez accepter les conditions d'utilisation.");
        return false;
    }

  // Fonction pour valider le formulaire si les critères sont correct
  function formValidation() {
    if (firstNameValidation() & lastNameValidation() & emailValidation() & birthdateValidation() & quantityValidation() & locationValidation() & conditionsValidation() === true) {
      return true;
  } else {
    // btnSubmit.disabled = true;
    return false;
  }
  }
  
  // Fonction pour gérer l'envoi du formulaire
    let form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (formValidation() === false) {
        return; // Si le formulaire n'est pas valide, on arrète le traitement
      } 
      afficherConfirmation();
    })
  function afficherConfirmation() {
    alert("Merci pour votre inscription !");
  }