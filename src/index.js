document.addEventListener("DOMContentLoaded", () => {
  // your code here
  newEventListener();
});

function newEventListener(){
  document.getElementById("create-task-form").addEventListener("submit", handleSubmit)
}

function handleSubmit(e){
  e.preventDefault();
  const task = e.target["new-task-description"].value;
  //console.log(e.target["new-task-description"].value);
  addToTaskList(task);
}

function addToTaskList(task){
  const taskUL = document.getElementById("tasks");
  const taskLi = document.createElement("li");
  const del = document.createElement("button");

  del.addEventListener("click", deleteTask);
  //del.type = "submit";
  del.value = "X";
 // del.parentElement.remove();


  taskLi.textContent = task + ' ';
  taskLi.appendChild(del)
  taskUL.appendChild(taskLi);
}

function deleteTask(e){
  e.target.parentNode.remove();
}
