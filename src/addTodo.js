import { Todo } from ".";
import dropdownIcon from "./images/dropdown.svg";
import editIcon from "./images/edit.svg";
import deleteIcon from "./images/delete.svg";

const taskForm = document.querySelector(".taskForm");
class addTodo {
  constructor(Title, Description, dueDate, Priority, categoryName) {
    this.Title = Title;
    this.Description = Description;
    this.dueDate = dueDate;
    this.Priority = Priority;
    this.Category = categoryName;
  }

  insertTasktoView() {
    this.todos = document.querySelector(".todos");
    this.task = document.createElement("div");
    this.task.innerHTML = `
            <h3>${this.Title}</h3>
            <div class ="todoIconDiv">
                <img class="dropdownTodo" src="${dropdownIcon}">
                <img class="editTodo" src="${editIcon}">
                <img class="deleteTodo" src="${deleteIcon}">
            <div>
            <div class="dropDescription" style="display:none;">   
                <p>${this.Description}</p>
                <div class="datePriority">
                    <p>${this.dueDate}</p>
                    <p>${this.Priority}</p>
                </div>
            </div>
        `;

    this.dropdownIcon = this.task.querySelector(".dropdownTodo");
    this.editIcon = this.task.querySelector(".editTodo");
    this.deleteIcon = this.task.querySelector(".deleteTodo");

    this.dropdownIcon.addEventListener("click", () => {
      console.log("drop down clicked");
      this.handleDropdown();
    });
    this.editIcon.addEventListener("click", () => {
      this.handleEdit();
    });
    this.deleteIcon.addEventListener("click", () => {
      this.handleDelete();
    });
    this.todos.appendChild(this.task);
  }

  handleDropdown() {
    const dropDescription = this.task.querySelector(".dropDescription");
    if (dropDescription.style.display === "none") {
      dropDescription.style.display = "";
    } else {
      dropDescription.style.display = "none";
    }
  }
  handleEdit() {
    taskForm.showModal();

    const submitHandler = (e) => {
      // e.preventDefault();

      const updatedTodo = new addTodo(
        taskForm.querySelector("#title").value,
        taskForm.querySelector("#description").value,
        taskForm.querySelector("#date").value,
        taskForm.querySelector("#priority").value,
        this.Category,
      );

      this.handleDelete();

      updatedTodo.insertTasktoView();

      const todoArrayString = localStorage.getItem("todos");
      const todoArray = JSON.parse(todoArrayString);
      for (let i = 0; i < todoArray.length; ++i) {
        const currentObj = todoArray[i];
        if (
          currentObj.Title === this.Title &&
          currentObj.Description === this.Description &&
          currentObj.dueDate === this.dueDate &&
          currentObj.Priority === this.Priority &&
          currentObj.Category === this.Category
        ) {
          todoArray.splice(i, 1, updatedTodo);
        }
      }
      const updatedCategoryArrayString = JSON.stringify(todoArray);
      localStorage.setItem("todos", updatedCategoryArrayString);

      taskForm.close();
    };

    const saveTaskButton = document.querySelector(".saveTask");
    saveTaskButton.removeEventListener("click", () => {
      submitHandler();
    });
    saveTaskButton.addEventListener("click", () => {
      submitHandler();
    });
  }
  handleDelete() {
    this.task.remove();
    const todoArrayString = localStorage.getItem("todos");
    const todoArray = JSON.parse(todoArrayString);
    for (let i = 0; i < todoArray.length; ++i) {
      const currentObj = todoArray[i];
      if (
        currentObj.Title === this.Title &&
        currentObj.Description === this.Description &&
        currentObj.dueDate === this.dueDate &&
        currentObj.Priority === this.Priority &&
        currentObj.Category === this.Category
      ) {
        todoArray.splice(i, 1);
      }
    }
    const updatedTodoArrayString = JSON.stringify(todoArray);
    localStorage.setItem("todos", updatedTodoArrayString);
  }
}

export { addTodo };
