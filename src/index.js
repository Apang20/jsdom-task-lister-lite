

document.addEventListener("DOMContentLoaded", () => {  //anonymous function that runs 

  const form = document.querySelector('#create-task-form') //id# - finds the first matching instance by default
  //querySelector grabs the HTML element that matches (id or class inside ())
  form.addEventListener("submit", createNewTask) //hitting any button triggers submit
  console.log(form)
  //.class making the var point to that form - dot notation invokes
  //form is the obj, eventlistener takes up to 3 args.. every form has submit built-in and refreshes by default
});	

function createNewTask(event) { //anytime button is pressed, submit trigger event, invokes createNewTask
  event.preventDefault() 
   //default is the page refreshing
  const textInput = document.querySelector('#new-task-description')
  console.log(textInput)
  const newTask = document.createElement("li") //createElement can only accept name of HTML elements
  const tasks = document.querySelector('#tasks')
  newTask.innerText = textInput.value 
  tasks.append(newTask) //tasks is the ul (put newTask inside ul)
  //event.target.reset()
  text.reset()
} 

//Everything is an obj in JS
