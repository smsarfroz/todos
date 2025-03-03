import "./styles.css";
import deleteIcon from "./images/delete.svg";

// const image = document.createElement("img");
// image.src = deleteIcon;

// document.body.appendChild(image);

let ToDo = [

];

const addCategoryButton = document.querySelector(".newCategory");

addCategoryButton.addEventListener('click', () => {

    const buttonSection = document.querySelector(".buttonSection");

    buttonSection.innerHTML = "";
});

export { ToDo };