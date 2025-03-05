import { NoEmitOnErrorsPlugin } from "webpack";
import { Todo } from ".";

class addTodo {

    constructor(Title, Description, dueDate, Priority) {
        this.Title = Title;
        this.Description = Description;
        this.dueDate = dueDate;
        this.Priority = Priority;
    }

    // insertTasktoView() {
    //     this.todos = document.querySelector(".todos");
        
    //     this.title = document.querySelector("#title").value;
    //     this.description = document.querySelector('#description').value;
    //     this.date = document.querySelector("#date").value;
    //     this.priority = document.querySelector("#priority").value;

    //     this.task = document.createElement("div");
        
    //     this.heading = document.createElement("h1");
    //     this.heading.textContent = this.title; 
    //     this.task.appendChild(this.heading);

    //     this.descriptionDiv = document.createElement("div");
    //     this.descriptionDetail = document.createElement("div");
    //     this.descriptionDetail.textContent = this.description;
    //     this.descriptionDiv.appendChild(this.descriptionDetail);

    //     this.rightDescription = document.createElement("div");
    //     this.dateDiv = document.createElement("div");
    //     this.dateDiv.textContent = this.date; 
    //     this.priorityDiv = document.createElement("div");
    //     this.priorityDiv.textContent = this.priority;
    //     this.rightDescription.appendChild(this.dateDiv);
    //     this.rightDescription.appendChild(this.priorityDiv);

    //     this.task.appendChild(this.descriptionDiv);
    //     this.task.appendChild(this.rightDescription);

    //     this.todos.appendChild(this.task);
    // }
}

export { addTodo };