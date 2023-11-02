
let tachesLocalStorage = JSON.parse(localStorage.getItem('open'));
let taches = tachesLocalStorage || [];

let inputTache;

function ajoutTache() {
  inputTache = document.getElementById("inputTache");
  let tacheText = inputTache.value;
  if (tacheText !== "") {
    // Créez un objet pour stocker l'état de la nouvelle tâche avec l'état "To Do" par défaut.
    let nouvelleTache = {
      text: tacheText,
      state: "To Do",
    };
    taches.unshift(nouvelleTache);
    inputTache.value = "";
    sauvegarderTaches();
    affichage();
  }
}

function affichage() {
  let ListTache = document.getElementById("ListTache");
  ListTache.innerHTML = "";

  taches.forEach((tache, index) => {
    let listItem = document.createElement("li");
    ListTache.appendChild(listItem);
    listItem.classList.add("lii");

    let tacheText = document.createTextNode(tache.text);
    listItem.appendChild(tacheText);

    // Créez des boutons pour changer l'état de la tâche
    let toDoButton = document.createElement("button");
    toDoButton.className = "boutonn";
    toDoButton.textContent = "To Do";
    listItem.appendChild(toDoButton);
    toDoButton.addEventListener("click", function () {
      tache.state = "To Do";
      listItem.className = "gris";
      sauvegarderTaches();
    });

    let doingButton = document.createElement("button");
    doingButton.className = "boutonn2";
    doingButton.textContent = "Doing";
    listItem.appendChild(doingButton);
    doingButton.addEventListener("click", function () {
      tache.state = "Doing";
      listItem.className = "rendu";
      sauvegarderTaches();
    });

    let doneButton = document.createElement("button");
    doneButton.className = "boutonn3";
    doneButton.textContent = "Done";
    listItem.appendChild(doneButton);
    doneButton.addEventListener("click", function () {
      tache.state = "Done";
      listItem.className = "rendu2";
      sauvegarderTaches();
    });

    let deletBtn = document.createElement("button");
    deletBtn.className = "suprim";
    deletBtn.textContent = "X";
    listItem.appendChild(deletBtn);
    deletBtn.addEventListener("click", function () {
      listItem.remove();
      taches.splice(index, 1);
      sauvegarderTaches();
      location.reload();
    });

    // Appliquez les classes CSS appropriées en fonction de l'état de la tâche
    if (tache.state === "To Do") {
      listItem.className = "gris";
    } else if (tache.state === "Doing") {
      listItem.className = "rendu";
    } else if (tache.state === "Done") {
      listItem.className = "rendu2";
    }
  });
}

// Fonction pour sauvegarder les tâches dans le stockage local
function sauvegarderTaches() {
  localStorage.setItem('open', JSON.stringify(taches));
}

affichage();
