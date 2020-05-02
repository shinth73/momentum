/** @format */

const toDoForm = document.querySelector(".js-todoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-todoList");

const TODOS_LS = "toDos";

let toDos = [];

function loadTodos() {
  const laodedTodos = localStorage.getItem(TODOS_LS);
  if (laodedTodos !== null) {
    const parseToDos = JSON.parse(laodedTodos);
    // console.log(parseToDos);
    parseToDos.forEach((todo) => {
      paintToDo(todo.text);
    });
  }
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function handleClicks(event) {
  const btn = event.target;
  const li = btn.parentNode;
  console.log(li);
  toDoList.removeChild(li);

  cleanTodo = toDos.filter((toDo) => {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanTodo;
  console.log(cleanTodo);
  saveToDos();
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  delBtn.addEventListener("click", handleClicks);
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  // delBtn.innerText = "X";
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId,
  };

  toDos.push(toDoObj);
  console.log(toDos);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function init() {
  loadTodos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
