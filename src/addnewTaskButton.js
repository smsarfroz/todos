const addnewTaskButton = function () {
  const taskForm = document.querySelector(".taskForm");
  const addnewTaskButton = document.querySelector(".newTasks");

  addnewTaskButton.addEventListener("click", () => {
    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";
    document.querySelector("#date").value = "";
    document.querySelector("#priority").value = "";
    taskForm.show();
  });
};

export { addnewTaskButton };
