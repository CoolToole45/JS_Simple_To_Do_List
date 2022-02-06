const removeBtn = document.querySelectorAll('.removeBtn');

for(let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].onclick = function() {
        const parentDiv = this.parentElement;
        const parentLi = parentDiv.parentElement;
        parentLi.style.display = 'none';
    }
}


// const activeTask = document.querySelectorAll('.taskDesc');
// console.log(activeTask);

// for(let i = 0; i < activeTask.length; i++) {
//     activeTask[i].onclick = function() {
//         const parentDiv = this.parentElement;
//         parentDiv.style.textDecoration = 'line-through';
//     }
// }


const checkbox = document.querySelectorAll('.checkbox');
console.log(checkbox);

const taskDesc = document.querySelectorAll('.taskDesc');
console.log(taskDesc);

for(let i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = function() {
        taskDesc.style.textDecoration = 'line-through';
    }
}