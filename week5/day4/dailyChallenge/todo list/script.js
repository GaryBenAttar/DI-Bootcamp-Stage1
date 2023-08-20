// Instructions
// to do list

// Create an HTML, CSS and a JS file.

// In the HTML file
// create a form with one input type="text", and a “Submit” button.
// add an empty div below the form
// <div class="listTasks"></div>

// In the js file, you must add the following functionalities:
// Create an empty array : const tasks = [];

// Create a function called addTask(). As soon as the user clicks on the button:
// check that the input is not empty,
// then add it to the array (ie. add the text of the task)
// then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
// Each new task added should have (starting from left to right - check out the image at the top of the page)
// a “X” button. Use font awesome for the “X” button.
// an input type="checkbox". The label of the input is the task added by the user.

// BONUS I (not mandatory):
// Change the variable tasks to an array of task objects.
// Each new task added to the array should have the properties : task_id, text and done (a boolean - false by default).
// Every new task object should have a task_id, starting from 0, and a data-task-id attribute, which value is the same as the task_id. Check out data-* attributes here.
// Create a function named doneTask(), that as soon as the user clicks on the “checkbox” input, the done property should change from false to true in the object, and from black to crossed out red in the DOM.

// BONUS II (not mandatory):
// Create a function named deleteTask(), that as soon as the user clicks on the “X” button, delete that specific task from the array listTasks.

const form = document.forms[0];
const newTask = form.elements.new_task;
const tasksList = document.getElementsByClassName("list_task")[0];
const clearAllBtn = document.querySelector(".clear_all_tasks");
const tasks = document.getElementsByClassName("task");
const clearBtn = document.querySelector(".clear_task");

form.addEventListener("submit", addNewTask);
clearAllBtn.addEventListener("click", clearAllTasks);
clearBtn.addEventListener("click", clearTask);

function addNewTask(e) {
  e.preventDefault();
  if (newTask.value != "" && newTask.value != "new task") {
    const btn = document.createElement("button");
    btn.setAttribute("class", "clear_task");
    const li = document.createElement("li");
    li.setAttribute("class", "task");
    li.textContent = `${newTask.value}`;
    li.appendChild(btn);
    btn.textContent = "X";
    tasksList.children[0].appendChild(li);
    li.setAttribute("id", `task_${tasks.length}`);
    btn.setAttribute("id", `clear_task_${tasks.length}`);
  }
}

function clearAllTasks() {
  do {
    tasksList.children[0].removeChild(tasks[0]);
  } while (tasks[0] != null);
}

function clearTask() {
  const task = document.querySelector(`#task_${tasks.length}`);
  console.log(task);
  tasksList.children[0].removeChild(task);
}
