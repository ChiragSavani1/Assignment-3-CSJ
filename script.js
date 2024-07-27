// Function to set up event listeners
function setupEventListeners() {
    // Get elements from the HTML document
    const taskButton = document.getElementById('add-todo');
    const taskInput = document.getElementById('todo-input');
    const taskList = document.getElementById('todo-list');

    // Add a click event listener to the "Add Task" button
    taskButton.addEventListener('click', () => {
        const taskDescription = taskInput.value.trim();

        // Check if the input is not empty
        if (taskDescription === '') {
            alert('Please enter a task!');
            return;
        }

        // Add a new task to the to-do list
        addNewTask(taskDescription);
        taskInput.value = ''; // Reset the input field
    });

    // Add an event listener for the "Enter" key press on the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            taskButton.click(); // Simulate a click on the "Add Task" button
        }
    });
}

// Function to add a new task to the to-do list
function addNewTask(taskDescription) {
    const taskList = document.getElementById('todo-list');

    // Create a list item for the new task
    const taskItem = document.createElement('li');
    taskItem.className = 'todo-item';

    // Create a checkbox for the task
    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.addEventListener('change', () => {
        toggleTaskCompletion(taskItem);
    });

    // Create a span to display the task description
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskDescription;

    // Create a button to delete the task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Delete';
    removeButton.className = 'delete-btn';
    removeButton.addEventListener('click', () => {
        taskItem.classList.add('fade-out');
        setTimeout(() => taskItem.remove(), 300); // Remove the item after a fade-out effect
    });

    // Append the checkbox, task description, and delete button to the task item
    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(removeButton);

    // Add the task item to the to-do list
    taskList.appendChild(taskItem);
}

// Function to handle changes to the task checkbox
function toggleTaskCompletion(taskItem) {
    const isChecked = taskItem.querySelector('input[type="checkbox"]').checked;
    if (isChecked) {
        taskItem.classList.add('checked');
        // Move the completed task to the bottom of the list
        taskItem.parentNode.appendChild(taskItem);
    } else {
        taskItem.classList.remove('checked');
    }
}

// Set up event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setupEventListeners);
