import "./styles.css";
import deleteIcon from "./images/delete.svg";
import { addProject } from "./addProject";
import { addTodo } from "./addTodo";

// const image = document.createElement("img");
// image.src = deleteIcon;

// document.body.appendChild(image);

let ToDo = [

];

const addCategoryButton = document.querySelector(".newCategory");

const newCategoryButton = document.querySelector(".newCategory");
const categoryForm = document.querySelector(".categoryForm");
const manipulateButtons = document.querySelector(".manipulateCategoryForm");

addCategoryButton.addEventListener('click', () => {


    newCategoryButton.style.display = "none";
    categoryForm.style.display = "";
    manipulateButtons.style.display = "";
});

const cancelButton = document.querySelector(".cancel");

cancelButton.addEventListener('click', () => {
    
    newCategoryButton.style.display = "";
    categoryForm.style.display = "none";
    manipulateButtons.style.display = "none";
});

const saveButton = document.querySelector(".save");

saveButton.addEventListener('click', () => {

    const categoryName = document.querySelector("#newCategoryName").value;
    addProject(categoryName);
    document.querySelector("#newCategoryName").value = "";

    newCategoryButton.style.display = "";
    categoryForm.style.display = "none";
    manipulateButtons.style.display = "none";
});


const projects = document.querySelectorAll(".projects");

projects.forEach(project => {
    project.addEventListener('click', () => {
        console.log("a project clicked");
    });
});

const taskForm = document.querySelector(".taskForm");
const cancelTaskButton = document.querySelector(".cancelTask");
const saveTaskButton = document.querySelector(".saveTask");

cancelTaskButton.addEventListener('click', () => {
    taskForm.close();
});
saveTaskButton.addEventListener('click', () => {
    const todos = document.querySelector(".todos");

    const title = document.querySelector("#title").value;
    const description = document.querySelector('#description').value;
    const date = document.querySelector("#date").value;
    const priority = document.querySelector("#priority").value;

    let newTodo = new addTodo(title, description, date, priority);
    newTodo.insertTasktoView();  
    ToDo.push(newTodo);


    // const project = document.createElement("div");
    // project.textContent = title;
    // todos.appendChild(project);
    taskForm.close();
});

const addnewTaskButton = document.querySelector(".newTasks");

addnewTaskButton.addEventListener('click', () => {

    document.querySelector("#title").value = "";
    document.querySelector('#description').value = "";
    document.querySelector("#date").value = "";
    document.querySelector("#priority").value = "";
    taskForm.show();

});
export { ToDo };