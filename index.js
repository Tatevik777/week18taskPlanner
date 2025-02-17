const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const clearListButton = document.getElementById('clearListButton');
const notification = document.getElementById('notification');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    taskList.innerHTML = '';
    if (tasks.length === 0) {
        notification.style.display = 'block';
        clearListButton.disabled = true;
    } else {
        notification.style.display = 'none';
        clearListButton.disabled = false;
        tasks.forEach((task, index) => {
            const taskItem = document.createElement('div');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;
            checkbox.onclick = () => {
                task.completed = !task.completed;
                saveTasks();
                renderTasks();
            };
            taskItem.appendChild(checkbox);
            taskItem.appendChild(document.createTextNode(task.text));
            taskList.appendChild(taskItem);
        });
    }
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

addTaskButton.onclick = () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        saveTasks();
        renderTasks();
    }
};

clearListButton.onclick = () => {
    tasks = [];
    saveTasks();
    renderTasks();
};

// Инициализация
renderTasks();


//const form = document.forms.myForm;
//const btn = document.getElementById("btnClear");
// div-родитель
//const taskList = document.getElementById("taskList");
// признак отсутствия задач
//const taskFull = document.getElementById("taskListFull");

// если обновили страницу, то список остается
//document.addEventListener("DOMContentLoaded", function () {
  //let name = localStorage.getItem("name");
  // let checkbox = localStorage.getItem("checkbox");

  //if (name != null) {
   // document.getElementById(
     // "taskList"
   // ).innerHTML += `<div class = "list"><input type="checkbox" name="${name}" class = "check"   />
   // <label for="${name}" class = "checkbox" >${name}</label></div>`;

    //btn.disabled = false;
   // taskFull.innerText = null;
  //} else {
 //   taskFull.innerText = "Задачи отсутствуют";
 // }

  // console.dir(taskFull);
//});

// добавление записи в списокзадач и в объект
//function sendTask(task) {
 // let textName = task.replace(/\s/g, "");
 // document.getElementById(
  //  "taskList"
 // ).innerHTML += `<div class = "list"><input type="checkbox" name="${textName}" class = "check" />
   // <label for="${textName}" class = "checkbox" >${task}</label></div>`;

  // записываем значение в локальном хранилище
 // localStorage.setItem("name", task);
 // localStorage.setItem("checkbox", false);

 // btn.disabled = false;
//}

// кнопка Добавить в список
//function checkMessage() {
  //let task = document.getElementById("task").value;
  // не даем добавлить пустое значение
 // if (task === "") {
 //   return;
 // } else {
    // при добавлении в список чистим уведомление
 //   taskFull.innerText = null;
 //   sendTask(task);
 // }
//}

// кнопка Очистить
//function checkReset() {
 // form.reset();
 // localStorage.clear();
//}

// клик на чекбоксе
//taskList.addEventListener("click", (event) => {
  // по какому эл кликнули
 // if (event.target.classList.contains("check")) {
  //  let checkbox = event.target.checked;
    // записываем значение в локальном хранилище
    //localStorage.setItem("name", event.target.name);
   // localStorage.setItem("checkbox", checkbox);
  //}
//});