const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Function to add new task
function addTask(){
  const taskText = taskInput.value.trim();
  if(taskText !== ""){
    const li= document.createElement('li');
    li.textContent = taskText;

    //Create a checkbox

    const checkbox=document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('taskCheckbox');

    // Create a label for the task text

    const label=document.createElement('label');
    label.type = 'checkbox';
    label.classList.add('taskLabel');

    // Delete Button Functionality
    const deleteButton = document.createElement('button');
    deleteButton.textContent='❌';
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click',function(){
      li.remove();
    });

    // Apend the list item to the task list as child node
    taskList.appendChild(li);
    //Append checkbox and label to the list item
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);
    taskInput.value = '';
  }
  else{
    alert("Please Enter a TASK!");
  }
}

//Event listener for "Add" button

addButton.addEventListener('click',addTask);

taskInput.addEventListener('keypress',function(event){
  if(event.key == 'Enter'){
    addTask();
  }
});

