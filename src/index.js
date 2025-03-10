import "./styles.css";
import deleteIcon from "./images/delete.svg";
import editIcon from "./images/edit.svg";
import { addProject } from "./addProject";
import { addTodo } from "./addTodo";
import { handleAllTask } from "./handleAllTask";
import { saveCategoryNamefunction } from "./saveCategoryNameFunction";

let ToDo = [];

const addCategoryButton = document.querySelector(".newCategory");

const newCategoryButton = document.querySelector(".newCategory");
const categoryForm = document.querySelector(".categoryForm");
const manipulateButtons = document.querySelector(".manipulateCategoryForm");

addCategoryButton.addEventListener("click", () => {
  newCategoryButton.style.display = "none";
  categoryForm.style.display = "";
  manipulateButtons.style.display = "";
});

const cancelButton = document.querySelector(".cancel");

cancelButton.addEventListener("click", () => {
  newCategoryButton.style.display = "";
  categoryForm.style.display = "none";
  manipulateButtons.style.display = "none";
});

const saveButton = document.querySelector(".save");

let categoryName = "";

saveButton.addEventListener("click", () => {
  saveCategoryNamefunction();
});
const categoryFormInput = document.querySelector(".categoryFormInput");
categoryFormInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    saveCategoryNamefunction();
  }
});

const projects = document.querySelector(".projects");

if (projects) {
  console.log("here");
  console.log(projects);
  projects.addEventListener("click", (e) => {
    const project = e.target;
    if (project.className === "editCat" || project.className === "deleteCat") {
      console.log("it'a an icon");

      if (project.className === "editCat") {
        console.log("edit icon is pressed");
        const projectDiv = project.closest(".projectClass");
        const category = projectDiv.querySelector(".categoryNameDiv h3");
        console.log(category);
        const categoryName = category.textContent;
        category.remove();
        const categoryNameDiv = projectDiv.querySelector(".categoryNameDiv");
        categoryNameDiv.innerHTML = `
                    <form class="editCatForm" action="#" method="post">
                        <label for="editCategoryName"></label>
                        <input type="text" id="editCategoryName" value="${categoryName}">
                    </form>
                `;

        const EditCatForm = document.querySelector(".editCatForm");
        const EditCatInput = document.querySelector("#editCategoryName");
        EditCatForm.addEventListener("keypress", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            const newCategoryName = EditCatInput.value;
            categoryNameDiv.innerHTML = `
                            <h3>${newCategoryName}</h3>
                        `;
          }
        });
      } else {
        project.closest(".projectClass").remove();

        const projectDiv = project.closest(".projectClass");
        const categoryName = projectDiv.querySelector(
          ".categoryNameDiv h3",
        ).textContent;
        const categoryArrayString = localStorage.getItem("category");
        const categoryArray = JSON.parse(categoryArrayString);

        for (let i = 0; i < categoryArray.length; ++i) {
          console.log(i, categoryArray[i], categoryName, categoryName);
          if (categoryArray[i] === categoryName) {
            categoryArray.splice(i, 1);
          }
        }
        const updatedCategoryArrayString = JSON.stringify(categoryArray);
        localStorage.setItem("category", updatedCategoryArrayString);
      }
    } else {
      console.log(project);
      console.log(project.className);

      categoryName = project.textContent;
      const todos = document.querySelector(".todos");
      todos.innerHTML = "";
      const todoArrayString = localStorage.getItem("todos");
      if (todoArrayString) {
        const todoArray = JSON.parse(todoArrayString);

        todoArray.forEach((todo) => {
          if (todo.Category === project.textContent) {
            const newTodo = document.createElement("div");
            newTodo.innerHTML = `
                            <h3>${todo.Title}</h3>
                            <div class="dropDescription">
                            <p>${todo.Description}</p>
                                <div class="datePriority">
                                    <p>${todo.dueDate}</p>
                                    <p>${todo.Priority}</p>
                                </div>
                            </div>
                        `;
            todos.appendChild(newTodo);
          }
        });
      }
    }
  });
} else {
  console.log("projects is empty");
}

const taskForm = document.querySelector(".taskForm");
const cancelTaskButton = document.querySelector(".cancelTask");
const saveTaskButton = document.querySelector(".saveTask");

cancelTaskButton.addEventListener("click", () => {
  taskForm.close();
});
saveTaskButton.addEventListener("click", () => {
  const todos = document.querySelector(".todos");

  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const date = document.querySelector("#date").value;
  const priority = document.querySelector("#priority").value;

  console.log("categoryName");
  console.log(categoryName);
  let newTodo = new addTodo(title, description, date, priority, categoryName);
  newTodo.insertTasktoView();
  ToDo.push(newTodo);

  const todoArrayString = localStorage.getItem("todos");
  const todoArray = todoArrayString ? JSON.parse(todoArrayString) : [];
  todoArray.push(newTodo);
  const updatedTodoArrayString = JSON.stringify(todoArray);
  localStorage.setItem("todos", updatedTodoArrayString);

  console.log(ToDo);

  taskForm.close();
});

document.addEventListener("DOMContentLoaded", () => {
  const categoryArrayString = localStorage.getItem("category");
  if (categoryArrayString) {
    const categoryArray = JSON.parse(categoryArrayString);
    categoryArray.forEach((category) => {
      const project = document.createElement("div");
      project.textContent = category;
      projects.appendChild(project);
    });
  }
  const allTaskButton = document.querySelector(".allTasks");
  allTaskButton.click();
});

handleAllTask();

const addnewTaskButton = document.querySelector(".newTasks");

addnewTaskButton.addEventListener("click", () => {
  document.querySelector("#title").value = "";
  document.querySelector("#description").value = "";
  document.querySelector("#date").value = "";
  document.querySelector("#priority").value = "";
  taskForm.show();
});

export { ToDo };
