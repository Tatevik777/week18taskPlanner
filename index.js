const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const clearListButton = document.getElementById('clearListButton');
const notification = document.getElementById('notification');

//Загружаем список задач из LocalStorage. Если данных нет, инициализируем пустой массив 
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//отрисовка списка задач на странице
function renderTasks() {
    taskList.innerHTML = '';//очищаем список перед повторной отрисовкой
    // проверяем есть ли задачи в массиве tasks, если их нет, показываем уведрмление,
    //делаем кнопку очистки списка недоступной
    if (tasks.length === 0) {
        notification.style.display = 'block';
        clearListButton.disabled = true;
        //если задачи есть, скрываем уведемление,
        //активируем кнопку очистки списка
        //создаем элементы для отображения каждого задания 
    } else {
        notification.style.display = 'none';
        clearListButton.disabled = false;
        tasks.forEach((task, index) => {
          //создаем новый элемент div для каждой задачи
            const taskItem = document.createElement('div');
             //создаем чекбокс для отметки выполненной задачи
            const checkbox = document.createElement('input');
            //устанавливаем тип для чекбокс 
            checkbox.type = 'checkbox';
            //устанавливаем состояние чекбокс в зависимости от статуса выполнения задачи
            checkbox.checked = task.completed;
           //обработчик клика на чекбокс
            checkbox.onclick = () => {
              //переключаем состояние выполнения задачи выполнена-невыполнена 
                task.completed = !task.completed;
                //созоаняем обновленный список задач в LocalStorage
                saveTasks();
                //перерисовываем задачи, чтобы обновить обновить отображение
                renderTasks();
            };
            //добавляем чекбокс в элемент
            taskItem.appendChild(checkbox);
            //добавляем текст задачи в элемент
            taskItem.appendChild(document.createTextNode(task.text));
            //добавляем элемент задачи в список задач 
            taskList.appendChild(taskItem);
        });
    }
}
//функция для сохранения задач
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
//обработчик клика на кнопку добавления задач 
addTaskButton.onclick = () => {
  //получаем текст задачи из поля ввода и убираем лишние пробелы 
    const taskText = taskInput.value.trim();
    //проверяем не пуст ли текст 
    if (taskText) {
      //если задача не пустая, добавляем ее в массив tasks с отметкой, что она не выполнена 
        tasks.push({ text: taskText, completed: false });
        //очищаем поле ввода после добавления задачи
        taskInput.value = '';
        //сохраняем обновленный список задач 
        saveTasks();
        //перерисовываем список задач 
        renderTasks();
    }
};
//обработчик клика на кнопку очистки списка
clearListButton.onclick = () => {
  //очищаем массив tasks 
    tasks = [];
   //сохраняем пустой массив в LocalStorage 
    saveTasks();
    //перерисовываем список задач 
    renderTasks();
};

// вызываем rederTasks(), чтобы при загрузке страницы сразу отобразить список задач 
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