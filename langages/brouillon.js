
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
    moza1()
  }
}

let rouge ;
let orange ;
let vert ;
let listItem ;


function moza1() {
  rouge = listItem.backgroundColor = 'gris'
  localStorage.setItem('sab', rouge);
  
  orange = listItem.backgroundColor = 'rendu'
  localStorage.setItem('sab1', orange);
  
  vert = listItem.backgroundColor = 'rendu2'
  localStorage.setItem('sab2', vert);
}



function affichage() {
  let ListTache = document.getElementById("ListTache");
  ListTache.innerHTML = "";
  
  taches.forEach((tache, index ) => {
    listItem = document.createElement("li");
    ListTache.appendChild(listItem);

    let reza = localStorage.getItem('sab');
    let reza1 = localStorage.getItem('sab1');
    let reza2 = localStorage.getItem('sab2');
    moza1()
    
        
    listItem.classList.add('lii');
    const tacheText = document.createTextNode(tache);
    listItem.appendChild(tacheText);
    
    const toDoButton = document.createElement("button");
    toDoButton.className = " boutonn";
    toDoButton.textContent = "To Do";
    listItem.appendChild(toDoButton);
    toDoButton.addEventListener("click", function() {
      let red = listItem.className = reza ;
      localStorage.setItem('save', red);
    });
    
    const doingButton = document.createElement("button");
    doingButton.className = "boutonn2";
    doingButton.textContent = "Doing";
    listItem.appendChild(doingButton);
    doingButton.addEventListener("click", function() {
      listItem.className = reza1 ;
      localStorage.setItem('sab1', orange);
    });
    const doneButton = document.createElement("button");
    doneButton.className = "boutonn3";
    doneButton.textContent = "Done";
    listItem.appendChild(doneButton);
    doneButton.addEventListener("click", function() {
      listItem.className = reza2 ;
      localStorage.setItem('sab2', vert);
    });
    const deletBtn = document.createElement("button");
    deletBtn.className = "suprim";
    deletBtn.textContent = "X";
    listItem.appendChild(deletBtn);
    deletBtn.addEventListener("click", function() {
      listItem.remove(index);
      taches.splice(index, 1);
      localStorage.setItem('open', JSON.stringify(taches)) ;
      localStorage.setItem('sab', rouge);
      localStorage.setItem('sab1', orange);
      localStorage.setItem('sab2', vert);
    });
    localStorage.setItem('open', JSON.stringify(taches)) ;
    localStorage.setItem('sab', rouge);
    localStorage.setItem('sab1', orange);
    localStorage.setItem('sab2', vert);
  });
}
affichage();

taches.forEach(() => {
  affichage();
  localStorage.setItem('open', JSON.stringify(taches)) ;
  localStorage.setItem('sab', rouge);
  localStorage.setItem('sab1', orange);
  localStorage.setItem('sab2', vert);
  moza1()
})












/*/////////////////////////////////essaie 1//////////////////////////

document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("task");
    let taskList = document.getElementById("taskList");
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        let li = document.createElement("li");
        li.textContent = taskText;
        li.addEventListener("click", toggleTask);
        taskList.appendChild(li);

        saveTasks();
    }

    taskInput.value = "";
}

function toggleTask() {
    this.classList.toggle("done");
    saveTasks();
}

function clearCompleted() {
    let taskList = document.getElementById("taskList");
    let completedTasks = taskList.getElementsByClassName("done");

    while (completedTasks.length > 0) {
        completedTasks[0].remove();
    }

    saveTasks();
}

function saveTasks() {
    let taskList = document.getElementById("taskList").innerHTML;
    localStorage.setItem("tasks", taskList);
}

function loadTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = localStorage.getItem("tasks");

    let tasks = taskList.getElementsByTagName("li");

    for (let task of tasks) {
        task.addEventListener("click", toggleTask);
    }
}
*/