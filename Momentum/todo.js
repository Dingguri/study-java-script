const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {

    }
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const curValue = toDoInput.value;
    paintToDo(curValue);
    toDoInput.value = "";
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();