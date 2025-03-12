import { categoryName } from ".";
import { addTodo } from "./addTodo";
const handleClickOnProjectElements = function () {
  const projects = document.querySelector(".projects");

  if (projects) {
    console.log("here");
    console.log(projects);
    projects.addEventListener("click", (e) => {
      const project = e.target;
      if (project.className !== "deleteCat") {
        console.log("inside click on a category");
        console.log(project);
        console.log(project.className);

        categoryName.setName = project.textContent;
        const todos = document.querySelector(".todos");
        todos.innerHTML = "";
        const todoArrayString = localStorage.getItem("todos");
        console.log(todoArrayString);
        if (todoArrayString) {
          const todoArray = JSON.parse(todoArrayString);

          console.log("inside check todoArrayString");
          console.log(todoArray);
          todoArray.forEach((todo) => {
            console.log(todo);
            console.log(`todo.Category = ${todo.Category}`);
            console.log(`project.textContent = ${project.textContent}`);
            console.log(todo.Category, project.textContent);
            if (todo.Category === project.textContent) {
              console.log(todo);
              console.log(
                (todo.Title,
                todo.Description,
                todo.dueDate,
                todo.Priority,
                todo.Category),
              );
              let newTodo = new addTodo(
                todo.Title,
                todo.Description,
                todo.dueDate,
                todo.Priority,
              );
              newTodo.insertTasktoView();
            }
          });
        }
      }

      if (
        project.className === "editCat" ||
        project.className === "deleteCat"
      ) {
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
      }
    });
  } else {
    console.log("projects is empty");
  }
};

export { handleClickOnProjectElements };
