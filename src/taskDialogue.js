import { saveTaskFunction } from "./saveTaskFunction";
import { categoryName } from ".";

const taskDialogue = function () {
  const taskForm = document.querySelector(".taskForm");
  const cancelTaskButton = document.querySelector(".cancelTask");
  const saveTaskButton = document.querySelector(".saveTask");

  cancelTaskButton.addEventListener("click", () => {
    taskForm.close();
  });
  saveTaskButton.addEventListener("click", () => {
    saveTaskFunction();
    taskForm.close();
  });
  saveTaskButton.removeEventListener("click", () => {
    saveTaskFunction();
    taskForm.close();
  });
};

export { taskDialogue, categoryName };
