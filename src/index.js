import "./styles.css";
import deleteIcon from "./images/delete.svg";
import editIcon from "./images/edit.svg";
import { addProject } from "./addProject";
import { addTodo } from "./addTodo";
import { handleAllTask } from "./handleAllTask";
import { saveCategoryNamefunction } from "./saveCategoryNameFunction.js";
import { quartersInYear } from "date-fns/constants";
import { saveTaskFunction } from "./saveTaskFunction.js";
import { taskDialogue } from "./taskDialogue.js";
import { addnewTaskButton } from "./addnewTaskButton.js";
import { manipulateCategory } from "./manipulateCategory.js";
import { categoryName } from "./categoryName.js";
import { handleClickOnProjectElements } from "./handleClickOnProjectElements.js";
import { handleReload } from "./handleReload.js";
import { ToDo } from "./ToDo.js";

manipulateCategory();
handleClickOnProjectElements();
taskDialogue();
handleReload();
handleAllTask();
addnewTaskButton();

export { ToDo, categoryName };
