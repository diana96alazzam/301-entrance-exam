'use strict'

var taskList = document.getElementById('rightSection');

function Task(taskName, taskDate) {
    this.taskName = taskName;
    this.taskDate = taskDate;
}


var tasksArray = [];

var dateH = new Date();

var currentDateH = document.getElementById('currentDate');
currentDateH.textContent = dateH;

var task = document.getElementById('task');
var inputtedTaskDate = document.getElementById('dateInput');

var taskForm = document.getElementById('taskForm');

taskForm.addEventListener('submit', addtask);

function addtask(event) {
    event.preventDefault();

    var taskName = event.target.task.value;
    var task1name = document.createElement('li');
    task1name.textContent = `1. ${taskName}`;
    taskList.appendChild(task1name);


    var task1Date = document.createElement('li');
    task1Date.textContent = inputtedTaskDate.value;
    taskList.appendChild(task1Date);

    var firstTask = new Task(taskName, inputtedTaskDate.value);


    tasksArray.push(firstTask);

    sendTask();
}



function sendTask() {
    var tasksString = JSON.stringify(tasksArray);
    localStorage.setItem('Task', tasksString);
}

function retrieveTask() {
    var tasksString = localStorage.getItem('Task');
    if (tasksString) {
        tasksArray = JSON.parse(tasksString);

        for (var i = 0; i < tasksArray.length; i++) {
            var task1name = document.createElement('li');
            task1name.textContent = `1. ${tasksArray[i].taskName}`;
            taskList.appendChild(task1name);

            var task1Date = document.createElement('li');
            task1Date.textContent = tasksArray[i].taskDate;
            taskList.appendChild(task1Date);

        }

    }
}

retrieveTask();




