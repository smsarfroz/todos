import { addProject } from "./addProject";

const saveCategoryNamefunction = () => {
  let categoryName = document.querySelector("#newCategoryName").value;
  addProject(categoryName);
  document.querySelector("#newCategoryName").value = "";

  const newCategoryButton = document.querySelector(".newCategory");
  const categoryForm = document.querySelector(".categoryForm");
  const manipulateButtons = document.querySelector(".manipulateCategoryForm");
  const categoryArrayString = localStorage.getItem("category");
  const categoryArray = categoryArrayString
    ? JSON.parse(categoryArrayString)
    : [];
  categoryArray.push(categoryName);
  const updatedCategoryArrayString = JSON.stringify(categoryArray);
  localStorage.setItem("category", updatedCategoryArrayString);

  const todos = document.querySelector(".todos");
  todos.innerHTML = "";

  newCategoryButton.style.display = "";
  categoryForm.style.display = "none";
  manipulateButtons.style.display = "none";

  return categoryName;
};

export { saveCategoryNamefunction };
