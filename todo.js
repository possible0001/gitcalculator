// Get all the HTML elements we need
const taskInput = document.getElementById('taskInput');
const durationInput = document.getElementById('durationInput');
const addBtn = document.getElementById('addBtn');
const pendingList = document.getElementById('pendingList');
const doneList = document.getElementById('doneList');

// Create an empty array to store all tasks
let tasks = [];

// Load tasks from browser storage when page starts
function loadTasks() {
    const saved = localStorage.getItem('tasks');
    if (saved) {
        tasks = JSON.parse(saved);
        displayTasks();
    }
}

// Save tasks to browser storage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    const duration = durationInput.value;

    // Check if user entered something
    if (taskText === '') {
        alert('Please write something!');
        return;
    }

    // Create a new task object
    const newTask = {
        id: Date.now(), // Unique ID using current time
        text: taskText,
        duration: duration,
        done: false
    };

    // Add to tasks array
    tasks.push(newTask);

    // Save and display
    saveTasks();
    displayTasks();

    // Clear input field
    taskInput.value = '';
}

// Display all tasks
function displayTasks() {
    // Clear both lists
    pendingList.innerHTML = '';
    doneList.innerHTML = '';

    // Separate done and pending tasks
    const pending = tasks.filter(task => !task.done);
    const done = tasks.filter(task => task.done);

    // Show pending tasks
    if (pending.length === 0) {
        pendingList.innerHTML = '<li class="empty-message">No pending tasks! 🎉</li>';
    } else {
        pending.forEach(task => {
            pendingList.appendChild(createTaskElement(task));
        });
    }

    // Show done tasks
    if (done.length === 0) {
        doneList.innerHTML = '<li class="empty-message">No completed tasks yet</li>';
    } else {
        done.forEach(task => {
            doneList.appendChild(createTaskElement(task));
        });
    }
}

// Create a single task element
function createTaskElement(task) {
    const li = document.createElement('li');
    li.className = 'task-item';
    
    if (task.done) {
        li.classList.add('done');
    }

    // Task HTML structure
    li.innerHTML = `
        <span class="task-text">${task.text}</span>
        <span class="task-duration">⏱️ ${task.duration}min</span>
        <div class="task-buttons">
            ${task.done 
                ? `<button class="icon-btn undo-btn" onclick="undoTask(${task.id})" title="Undo">↩️</button>` 
                : `<button class="icon-btn done-btn" onclick="markDone(${task.id})" title="Mark Done">✓</button>`
            }
            <button class="icon-btn edit-btn" onclick="editTask(${task.id})" title="Edit">✏️</button>
            <button class="icon-btn delete-btn" onclick="deleteTask(${task.id})" title="Delete">🗑️</button>
        </div>
    `;

    return li;
}

// Mark task as done
function markDone(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.done = true;
        saveTasks();
        displayTasks();
    }
}

// Undo a done task
function undoTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.done = false;
        saveTasks();
        displayTasks();
    }
}

// Delete a task
function deleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks = tasks.filter(t => t.id !== id);
        saveTasks();
        displayTasks();
    }
}

// Edit a task
function editTask(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    // Ask user for new task text
    const newText = prompt('Edit your task:', task.text);
    
    if (newText !== null && newText.trim() !== '') {
        task.text = newText.trim();
        saveTasks();
        displayTasks();
    }
}

// Add event listeners
addBtn.addEventListener('click', addTask);

// Press Enter to add task
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Load tasks when page starts
loadTasks();