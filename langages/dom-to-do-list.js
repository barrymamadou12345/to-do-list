

let taches = [];
// Fonction pour ajouter une tâche
function ajoutTache() {
  const inputTache = document.getElementById("inputTache");
  const tacheText = inputTache.value.trim();
  if (tacheText !== "") {
    taches.push(tacheText);
    inputTache.value = "";
    affichage();
  }
}

function deleteTask(index) {
  taches.splice(index, 1);
  affichage();
}

function affichage() {
  const ListTache = document.getElementById("ListTache");
  ListTache.innerHTML = "";

  taches.forEach((tache, index ) => {
    const listItem = document.createElement("li");
    listItem.className = "lii";
    const tacheText = document.createTextNode(tache);
    listItem.appendChild(tacheText);
    ListTache.appendChild(listItem);
    const toDoButton = document.createElement("button");
    toDoButton.className = " boutonn";
    toDoButton.textContent = "To Do";
    listItem.appendChild(toDoButton);
    toDoButton.addEventListener("click", function() {
      listItem.className = ('gris');
    });
    const doingButton = document.createElement("button");
    doingButton.className = "boutonn2";
    doingButton.textContent = "Doing";
    listItem.appendChild(doingButton);
    doingButton.addEventListener("click", function() {
      listItem.className = ('rendu');
    });
    const doneButton = document.createElement("button");
    doneButton.className = "boutonn3";
    doneButton.textContent = "Done";
    listItem.appendChild(doneButton);
    doneButton.addEventListener("click", function() {
      listItem.className = ('rendu2');
    });
    const deleteButton = document.createElement("button");
    deleteButton.className = "suprim";
    deleteButton.textContent = " X ";
    deleteButton.onclick = () => deleteTask(index);
    listItem.appendChild(deleteButton);
  });
}
affichage();

