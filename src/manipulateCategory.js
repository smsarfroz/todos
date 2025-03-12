import { categoryName } from "./taskDialogue";
import { saveCategoryNamefunction } from "./saveCategoryNameFunction";

const manipulateCategory = () => {
  const addCategoryButton = document.querySelector(".newCategory");

  const newCategoryButton = document.querySelector(".newCategory");
  const categoryForm = document.querySelector(".categoryForm");
  const manipulateButtons = document.querySelector(".manipulateCategoryForm");

  addCategoryButton.addEventListener("click", () => {
    newCategoryButton.style.display = "none";
    categoryForm.style.display = "";
    manipulateButtons.style.display = "";
  });

  const cancelButton = document.querySelector(".cancel");

  cancelButton.addEventListener("click", () => {
    newCategoryButton.style.display = "";
    categoryForm.style.display = "none";
    manipulateButtons.style.display = "none";
  });

  const saveButton = document.querySelector(".save");

  saveButton.addEventListener("click", () => {
    categoryName.setName = saveCategoryNamefunction();
  });
  const categoryFormInput = document.querySelector(".categoryFormInput");
  categoryFormInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      categoryName.setName = saveCategoryNamefunction();
    }
  });
};

export { manipulateCategory, categoryName };
