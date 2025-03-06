import deleteIcon from "./images/delete.svg";
import editIcon from "./images/edit.svg";

const addProject = function(categoryName) {
    const deleteCat = document.createElement("img");
    deleteCat.classList.add("deleteCat");
    deleteCat.src = deleteIcon;
    const editCat = document.createElement("img");
    editCat.classList.add("editCat");
    editCat.src = editIcon;

    const projects = document.querySelector(".projects");

    const newProject = document.createElement("div");
    newProject.classList.add("projectClass");
    newProject.innerHTML = `
        <div class="categoryNameDiv"><h3>${categoryName}</h3></div>
        <div class="categoryIconsDiv">
            ${editCat.outerHTML}
            ${deleteCat.outerHTML}
        </div>
    `;

    projects.appendChild(newProject);
}


export {addProject} ;

