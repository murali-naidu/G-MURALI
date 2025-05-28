function addTask() {
  var taskInput = document.getElementById("taskinput").value;
  var tasklist = document.getElementById("tasklist");
  if (taskInput == "") {
    alert("Please enter the task");
    return;
  }

  var listItems = document.createElement("li");
  listItems.innerText = taskInput;
  tasklist.appendChild(listItems);

  var buttoncontainer = document.createElement("div");
  listItems.appendChild(buttoncontainer);
  buttoncontainer.className = "task-button";

  var deleteButton = document.createElement("button");
  buttoncontainer.appendChild(deleteButton);
  deleteButton.innerText = "Delete";
  deleteButton.onclick = function () {
    tasklist.removeChild(listItems);
  };

  var completeButton = document.createElement("button");
  buttoncontainer.appendChild(completeButton);
  completeButton.innerText = "Complete";
  completeButton.onclick = function () {
    listItems.classList.toggle("Completed");
  };
  taskInput.value = "";
}
