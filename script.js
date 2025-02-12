const inputTask = document.querySelector('input')
const taskList = document.querySelector('ol')
newTask = () => {

    taskList.innerHTML += 
       ` <ol class="list">
            <li>
                <label for="check" class="task">${inputTask.value}</label>
            </li>
            
            <input type="checkbox" id="check">
        </ol>`

    // alert(inputTask.value)
}