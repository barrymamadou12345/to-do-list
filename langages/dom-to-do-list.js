
let  tachesLocalStorage = JSON.parse(localStorage.getItem('open'));
let taches = tachesLocalStorage || [];
// Fonction pour ajouter une tâche
let inputTache ;

function ajoutTache() {
  inputTache = document.getElementById("inputTache");
  const tacheText = inputTache.value;
  if (tacheText !== "") {
    taches.unshift(tacheText);
    inputTache.value = "";
    affichage() ;
  }
}
function affichage() {
  const ListTache = document.getElementById("ListTache");
  ListTache.innerHTML = "";
  
  taches.forEach((tache, index ) => {
    const listItem = document.createElement("li");
    ListTache.appendChild(listItem);
    listItem.className = "lii";
    const tacheText = document.createTextNode(tache);
    listItem.appendChild(tacheText);
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
    const deletBtn = document.createElement("button");
    deletBtn.className = "suprim";
    deletBtn.textContent = "X";
    listItem.appendChild(deletBtn);
    deletBtn.addEventListener("click", function() {
      listItem.remove(index);
      taches.splice(index, 1);
      localStorage.setItem('open', JSON.stringify(taches)) ;
    });
    localStorage.setItem('open', JSON.stringify(taches)) ;
  });
}
affichage();

taches.forEach(() => {
  affichage();
  localStorage.setItem('open', JSON.stringify(taches)) ;
})

