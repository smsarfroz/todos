const addProject = function(categoryName) {

    const projects = document.querySelector(".projects");

    const newProject = document.createElement("div");
    newProject.classList.add("projectClass");
    newProject.textContent = categoryName;

    projects.appendChild(newProject);
}


export {addProject} ;

