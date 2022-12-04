let task = document.querySelector('.task')
let addTask= document.querySelector('.addTask')
let taskButton= document.querySelector('.taskButton')
let btn = document.querySelector('.btn')
let tasks;
if(localStorage.TASK!=null){
tasks = JSON.parse(localStorage.TASK)
}
else {
tasks=[];
}


taskButton.onclick = function (){
    let newTask = {
        addTask:addTask.value,
    }
    tasks.push(newTask)
    localStorage.setItem('TASK',JSON.stringify(tasks))
    showTask()
    clearTask()
}


function clearTask(){
    addTask.value=''
}


function showTask() {
    let output = ''
    for(let i=0;i<tasks.length;i++){
        output+=`
        <div class='task' >
        <h3>${tasks[i].addTask}</h3>
        <button onclick = 'deleteTask(${i})' class="btn">x</button>
        </div>
        `  
    }
    document.querySelector('.task').innerHTML=output
}

function deleteTask(i){
tasks.splice(i,1)
localStorage.TASK = JSON.stringify(tasks)
showTask();
}
