const form = document.forms.myForm;
const btn = document.getElementById("btnClear");
// div-родитель
const taskList = document.getElementById("taskList");
// признак отсутствия задач
const taskFull = document.getElementById("taskListFull");

// если обновили страницу, то список остается
document.addEventListener("DOMContentLoaded", function () {
  let name = localStorage.getItem("name");
  // let checkbox = localStorage.getItem("checkbox");

  if (name != null) {
    document.getElementById(
      "taskList"
    ).innerHTML += `<div class = "list"><input type="checkbox" name="${name}" class = "check"   />
    <label for="${name}" class = "checkbox" >${name}</label></div>`;

    btn.disabled = false;
    taskFull.innerText = null;
  } else {
    taskFull.innerText = "Задачи отсутствуют";
  }

  // console.dir(taskFull);
});

// добавление записи в списокзадач и в объект
function sendTask(task) {
  let textName = task.replace(/\s/g, "");
  document.getElementById(
    "taskList"
  ).innerHTML += `<div class = "list"><input type="checkbox" name="${textName}" class = "check" />
    <label for="${textName}" class = "checkbox" >${task}</label></div>`;

  // записываем значение в локальном хранилище
  localStorage.setItem("name", task);
  localStorage.setItem("checkbox", false);

  btn.disabled = false;
}

// кнопка Добавить в список
function checkMessage() {
  let task = document.getElementById("task").value;
  // не даем добавлить пустое значение
  if (task === "") {
    return;
  } else {
    // при добавлении в список чистим уведомление
    taskFull.innerText = null;
    sendTask(task);
  }
}

// кнопка Очистить
function checkReset() {
  form.reset();
  localStorage.clear();
}

// клик на чекбоксе
taskList.addEventListener("click", (event) => {
  // по какому эл кликнули
  if (event.target.classList.contains("check")) {
    let checkbox = event.target.checked;
    // записываем значение в локальном хранилище
    localStorage.setItem("name", event.target.name);
    localStorage.setItem("checkbox", checkbox);
  }
});