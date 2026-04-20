
let toDoInput = document.querySelector('input');
let toDoBtn = document.querySelector('.todo-btn');
toDoBtn.addEventListener('click', addToDo);
let toDoList = document.querySelector('.todo-list');
toDoList.addEventListener('click', checkToDos);

//Checks when the add button is clicked on
function addToDo(event) {
    // Prevents form from submitting and reloading
    event.preventDefault();

    if (toDoInput.value === '') {
        //If there's no todo, prompt for a task. Kinda clunky, but it's okay 
        alert("Write your task!");
    } 
    else {
        // Create a new div
        let toDoDiv = document.createElement("div");
        toDoDiv.classList.add('todo-div');

        // Create a list item to nest in div
        let newToDo = document.createElement('li');
        newToDo.innerText = toDoInput.value;
        toDoDiv.appendChild(newToDo);

        // Create button to check off todo
        let checked = document.createElement('button');
        checked.classList.add('check-btn');
        checked.innerHTML = '<i class="fas fa-check"></i>';
        toDoDiv.appendChild(checked);
        
        // Create button to delete todo
        let deleted = document.createElement('button');
        deleted.classList.add('delete-btn');
        deleted.innerHTML = '<i class="fas fa-trash"></i>';
        toDoDiv.appendChild(deleted);

        // Add to todo list
        toDoList.appendChild(toDoDiv);

        // Clear text input
        toDoInput.value = '';
    }

}   

//Checks whenever an input item is clicked on
function checkToDos(event){
    let item = event.target;

    // Check if the delete button was clicked on
    if(item.classList.contains('delete-btn'))
    {
        // If so, add the "remove" class
        item.parentElement.classList.add("remove");

        // Once the animation plays, delete the item
        item.parentElement.addEventListener('animationend', function(){
            item.parentElement.remove();
        });
    }

    // Check if the complete button was clicked on
    if(item.classList.contains('check-btn'))
    {
        //If so, add the "completed" class
        item.parentElement.classList.toggle("completed");
    }
}

// get element from html
var audioT = document.getElementById("music");

// use play() method to play music
function playAudio() {
    audioT.play();
}

//  use pause() method to play music
function pauseAudio() {
    audioT.pause();
}

// Create the audio object
const clickSubmit = new Audio('assets/submit.mp3');

// Select the button
const submit = document.querySelector('.todo-btn');
clickSubmit.preload = 'auto';

// Add the click event listener
submit.addEventListener('click', () => {
  clickSubmit.currentTime = 0; // Allows rapid clicking
  clickSubmit.play();
});

// Create the audio object
const clickCheck = new Audio('assets/check.mp3');

// Select all instances of class
const check = document.querySelectorAll('.check-btn');
clickCheck.preload = 'auto';

// Add the click event listener to each instance
check.forEach(check => {
    check.addEventListener('click', () => {
    clickCheck.currentTime = 0; // Allows rapid clicking
    clickCheck.play();
    })
});

// Create the audio object
const clickTrash = new Audio('assets/trash.mp3');

// Select all instances of class
const trash = document.querySelectorAll('.delete-btn');
clickTrash.preload = 'auto';

// Add the click event listener to each instance
trash.forEach(trash=> {
    trash.addEventListener('click', () => {
    clickTrash.currentTime = 0; // Allows rapid clicking
    clickTrash.play();
    });
})


