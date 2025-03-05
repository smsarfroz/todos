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
            <h3>${this.Title}</h3>
            <div class="dropDescription">
                <p>${this.Description}</p>
                <div class="datePriority">
                    <p>${this.dueDate}</p>
                    <p>${this.Priority}</p>
                </div>
            </div>
        `;

        this.todos.appendChild(this.task);
    }
}

export { addTodo };

