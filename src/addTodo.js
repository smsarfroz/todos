import { NoEmitOnErrorsPlugin } from "webpack";
import { Todo } from ".";

class addTodo {

    constructor(Title, Description, dueDate, Priority) {
        this.Title = Title;
        this.Description = Description;
        this.dueDate = dueDate;
        this.Priority = Priority;
    }

    insertTasktoView() {
        this.todos = document.querySelector(".todos");
        this.task = document.createElement("div");
        this.task.innerHTML = `
            <h1>${title}</h1>
            <div class="${dropDescription}">
                <p>${description}</p>
                <div class="datePriority">
                    <p>${date}</p>
                    <p>${priority}</p>
                </div>
            </div>
        `;

        this.todos.appendChild(this.task);
    }
}

export { addTodo };

