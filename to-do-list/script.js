const input_box = document.getElementById('input-box')
const add_task = document.getElementById('add-task')
const task_list = document.getElementById('task-list')

function checkTask(checkbox,task)
{
    if(checkbox.checked)
    {
        task.style.textDecoration = 'line-through';
        task.style.color = 'gray';
    }else{
        task.style.textDecoration = 'none';
        task.style.color = 'black';
    }
}

function removeTask(task)
{
    task.remove();
}

add_task.addEventListener('click' , function(){
    const task = input_box.value.trim();
    if(task)
    {
        const newTask = document.createElement('li');

        // Create a container to hold checkbox + text
        const taskContent = document.createElement('div');
        taskContent.className = 'task-content';

        // Create a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';

        // Create a span to hold the task text
        const taskText = document.createElement('span');
        taskText.textContent = task;

        //create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'remove';
        removeButton.className = 'remove-button';
        removeButton.addEventListener('click',function(){
            removeTask(newTask);
        })

        taskContent.appendChild(checkbox);
        taskContent.appendChild(taskText);

        newTask.appendChild(taskContent);
        newTask.appendChild(removeButton);

        task_list.appendChild(newTask);

        checkbox.addEventListener('change',() => {
            checkTask(checkbox,taskText);
        })
        input_box.value = "";

    }else{
        alert('enter a task');
        input_box.focus();
        }
})

// task_list.addEventListener('click',function(e){
//     if(e.target.tagName === 'LI')
//     {
//         e.target.classList.toggle('checked');
//     }else if (add_task.target.tagName === 'SPAN')
//     {
//         e.target.parentElement.remove();
//     }
// },false)