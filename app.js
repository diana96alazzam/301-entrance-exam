'use strict'

var taskList = document.getElementById('rightSection');

function Task(taskName, taskDate) {
    this.taskName = taskName;
    this.taskDate = taskDate;
}


var tasksArray = [];


var month = new Array();
month[0] = "JAN";
month[1] = "FEB";
month[2] = "MAR";
month[3] = "APR";
month[4] = "MAY";
month[5] = "JUN";
month[6] = "JUL";
month[7] = "AUG";
month[8] = "SEP";
month[9] = "OCT";
month[10] = "NOV";
month[11] = "DEC";

var dateH = new Date();
var dateD = dateH.getDate();
var monthD = month[dateH.getMonth()];
var yearD = dateH.getFullYear();


var submitCount=0;



var currentDateH = document.getElementById('currentDate');
currentDateH.textContent = `${monthD} ${dateD} ${yearD}`;

var task = document.getElementById('task');
var inputtedTaskDate = document.getElementById('dateInput');

var taskForm = document.getElementById('taskForm');

taskForm.addEventListener('submit', addtask);

function addtask(event) {
    event.preventDefault();
    submitCount++;

    var taskName = event.target.task.value;
    var task1name = document.createElement('h2');
    task1name.textContent = `${submitCount}. ${taskName}`;
    taskList.appendChild(task1name);


    var task1Date = document.createElement('p');
    task1Date.textContent = inputtedTaskDate.value;
    taskList.appendChild(task1Date);

    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    task1Date.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', deleteTask);
    function deleteTask(){
        task1name.innerHTML = '';
        task1Date.innerHTML = '';
        localStorage.removeItem('Task');

    }


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
            var task1name = document.createElement('h2');
            task1name.textContent = `${i+1}. ${tasksArray[i].taskName}`;
            taskList.appendChild(task1name);

            var task1Date = document.createElement('p');
            task1Date.textContent = tasksArray[i].taskDate;
            taskList.appendChild(task1Date);

            

        }

    }
}




retrieveTask();




