import { addTodo } from "./addTodo";
import { categoryName } from "./taskDialogue";

const handleAllTask = function () {
  const allTaskButton = document.querySelector(".allTasks");
  allTaskButton.addEventListener("click", () => {
    const todos = document.querySelector(".todos");
    todos.innerHTML = "";
    const todoArrayString = localStorage.getItem("todos");
    if (todoArrayString) {
      const todoArray = JSON.parse(todoArrayString);
      todoArray.forEach((todo) => {
        let newTodo = new addTodo(
          todo.Title,
          todo.Description,
          todo.dueDate,
          todo.Priority,
        );
        newTodo.insertTasktoView();
      });
    }
  });
  return "";
};

export { handleAllTask, categoryName };
