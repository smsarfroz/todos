import { addProject } from "./addProject";
const handleReload = function () {
  document.addEventListener("DOMContentLoaded", () => {
    const categoryArrayString = localStorage.getItem("category");
    if (categoryArrayString) {
      const categoryArray = JSON.parse(categoryArrayString);
      categoryArray.forEach((category) => {
        addProject(category);
      });
    }
    const allTaskButton = document.querySelector(".allTasks");
    allTaskButton.click();
  });
};

export { handleReload };
