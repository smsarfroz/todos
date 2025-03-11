import { addTodo } from "./addTodo";

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
          todo.Category,
        );
        newTodo.insertTasktoView();
        // const newTodo = document.createElement("div");
        // newTodo.innerHTML = `
        //             <h3>${todo.Title}</h3>
        //             <div class="dropDescription">
        //             <p>${todo.Description}</p>
        //                 <div class="datePriority">
        //                     <p>${todo.dueDate}</p>
        //                     <p>${todo.Priority}</p>
        //                 </div>
        //             </div>
        //         `;
        // todos.appendChild(newTodo);
      });
    }
  });
  return "";
};

export { handleAllTask };
