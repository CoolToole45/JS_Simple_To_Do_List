// Add a new task from input
const addTaskBtn = document.getElementById('addTaskBtn');
const activeTask = document.querySelector('.activeTask');
const unorderedList = document.getElementById('mainTasks');

addTaskBtn.addEventListener('click', () => {
    const addTaskInp = document.getElementById('addTaskInp');
    const taskInputVal = addTaskInp.value; //New task!!!

    let newListItem = document.createElement('li');

    let newTextEllDiv = document.createElement('div');
    newTextEllDiv.classList.add('activeTask');

    let newTextEllP = document.createElement('p');
    newTextEllP.innerText = taskInputVal;
    newTextEllP.classList.add('taskDesc');
    newTextEllP.setAttribute('onclick', 'crossOutP()')
    newTextEllDiv.append(newTextEllP);

    let newTextEllSpan = document.createElement('span');
    newTextEllSpan.innerHTML = '&times;'
    newTextEllSpan.classList.add('removeBtn');
    newTextEllSpan.setAttribute('onclick', 'removeTask()');
    newTextEllDiv.append(newTextEllSpan);

    newListItem.append(newTextEllDiv);
    unorderedList.append(newListItem);
})

// Delete an existing task
function removeTask() {
    const removeBtn = document.querySelectorAll('.removeBtn');

    for(let i = 0; i < removeBtn.length; i++) {
        removeBtn[i].onclick = function() {
            const parentDiv = this.parentElement;
            const parentLi = parentDiv.parentElement;
            parentLi.style.display = 'none';
        }
    }
}


// Cross out task
function crossOutP() {    
    const taskDesc = document.querySelectorAll('.taskDesc');

    for(let i = 0; i < taskDesc.length; i++) {
        taskDesc[i].onclick = function() {
            this.classList.toggle('crossOut');
        }
    }
}