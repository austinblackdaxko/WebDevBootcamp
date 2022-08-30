
let start = ''
const toDoList = []

while(start !== 'quit') {
  start = prompt("To Do list! What would you like to do? commands \nlist: lists all of your tasks for the day\nnew: add a new task to your list\ndelete: removes a specific task from your list\nquit: quits the app")
  if (start.toLowerCase() === 'new') {
    task = prompt("Please add task to the list below:")
    toDoList.push(task)
    console.log("Task has been added")
  }
  else if (start.toLowerCase() === 'list') {
    console.log("********")
    for(let task = 0; task < toDoList.length; task++) {
      console.log(`${task}: ${toDoList[task]}`)
    }
    console.log("********")
  }
  else if (start.toLowerCase() === 'delete') {
    console.log("********")
    for(let task = 0; task < toDoList.length; task++) {
      console.log(`${task}: ${toDoList[task]}`)
    }
    console.log("********")
    deleteIndex = parseInt(prompt("Please type the index for the task you'd like to delete"))
    while (isNaN(deleteIndex) || deleteIndex < 0 || deleteIndex >= toDoList.length) {
      console.log("Not a valid number")
      deleteIndex = parseInt(prompt("Please type the index for the task you'd like to delete"))
    }
    removed = toDoList.splice(deleteIndex, 1)
    console.log(`${removed} has been removed`)
  }
}

console.log("thank you for playing")