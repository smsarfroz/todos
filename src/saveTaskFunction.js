import { addTodo } from "./addTodo";
import { ToDo } from ".";
import { categoryName } from ".";

const saveTaskFunction = function () {
  const todos = document.querySelector(".todos");

  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const date = document.querySelector("#date").value;
  const priority = document.querySelector("#priority").value;

  console.log("categoryName");
  console.log(categoryName);
  let newTodo = new addTodo(title, description, date, priority);
  newTodo.insertTasktoView();
  ToDo.push(newTodo);

  const todoArrayString = localStorage.getItem("todos");
  const todoArray = todoArrayString ? JSON.parse(todoArrayString) : [];
  todoArray.push(newTodo);
  const updatedTodoArrayString = JSON.stringify(todoArray);
  localStorage.setItem("todos", updatedTodoArrayString);

  console.log(ToDo);
};

export { saveTaskFunction };
