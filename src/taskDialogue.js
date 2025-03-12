import { saveTaskFunction } from "./saveTaskFunction";
import { categoryName } from ".";

const taskDialogue = function () {
  console.log("Inside taskDialogue");
  const taskForm = document.querySelector(".taskForm");
  const cancelTaskButton = document.querySelector(".cancelTask");
  const saveTaskButton = document.querySelector(".saveTask");

  cancelTaskButton.removeEventListener("click", () => {
    taskForm.close();
  });
  saveTaskButton.removeEventListener("click", () => {
    saveTaskFunction();
  });

  cancelTaskButton.addEventListener("click", () => {
    taskForm.close();
  });
  saveTaskButton.addEventListener("click", () => {
    saveTaskFunction();
  });
};

export { taskDialogue, categoryName };
