import "./styles.css";
import deleteIcon from "./images/delete.svg";

// const image = document.createElement("img");
// image.src = deleteIcon;

// document.body.appendChild(image);

let ToDo = [

];

const addCategoryButton = document.querySelector(".newCategory");

addCategoryButton.addEventListener('click', () => {

    const newCategoryButton = document.querySelector(".newCategory");
    const categoryForm = document.querySelector(".categoryForm");
    const manipulateButtons = document.querySelector(".manipulateCategoryForm");

    newCategoryButton.style.display = "none";
    categoryForm.style.display = "";
    manipulateButtons.style.display = "";
});

export { ToDo };