const addnewTaskButton = function () {
  const taskForm = document.querySelector(".taskForm");
  const addnewTaskButton = document.querySelector(".newTasks");

  const handleClick = () => {
    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";
    document.querySelector("#date").value = "";
    document.querySelector("#priority").value = "";
    taskForm.show();
  };
  addnewTaskButton.removeEventListener("click", () => {
    handleClick();
  });
  addnewTaskButton.addEventListener("click", () => {
    handleClick();
  });
};

export { addnewTaskButton };
