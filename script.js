// Get DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Event Listener to Add Task
addTaskButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create task item
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    const taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = taskText;

    // Mark as completed
    taskTextSpan.addEventListener("click", () => {
        taskTextSpan.classList.toggle("completed");
    });

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.cursor = "pointer";

    deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteButton);

    // Add to task list
    taskList.appendChild(taskItem);

    // Clear input
    taskInput.value = "";
}
