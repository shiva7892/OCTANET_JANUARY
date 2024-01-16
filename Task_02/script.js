document.addEventListener('DOMContentLoaded', function () {
    function addTask() {
        var taskInput = document.getElementById('taskInput');
        var taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task before clicking Submit.');
            return;
        }

        createTaskElement(taskText);
        taskInput.value = '';
    }

    function createTaskElement(taskText) {
        var tasksContainer = document.getElementById('tasksContainer');

        var taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        var taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;

        var deleteIcon = document.createElement('span');
        deleteIcon.innerHTML = '&#10060;'; 
        deleteIcon.classList.add('delete-icon');
        deleteIcon.addEventListener('click', function () {
            taskDiv.classList.add('task-deleted');
            setTimeout(function () {
                taskDiv.remove();
            }, 300); 
        });

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                taskTextSpan.style.textDecoration = 'line-through';
            } else {
                taskTextSpan.style.textDecoration = 'none';
            }
        });

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(taskTextSpan);
        taskDiv.appendChild(deleteIcon);

       
        taskDiv.classList.add('new-task');

        tasksContainer.appendChild(taskDiv);
       
        void taskDiv.offsetWidth;
    }

    document.getElementById('submitButton').addEventListener('click', function () {
        addTask();
    });
});
