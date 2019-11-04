//challenge 
const todos = [{
    text: 'masturbate',
    completed: false
},{
    text: 'sex',
    completed: true
},{
    text: 'drugs',
    completed: false
},{
    text: 'subway',
    completed: false
},{
    text: 'gta5',
    completed: true
}]

const removeTodo = function(todos, todoText) {
    const index = todos.findIndex(function(todo, index){
        return todo.text.toLowerCase() === todoText.toLowerCase() 
    })
    if (index > -1) {
        todos.splice(index, 1) 
    } 
}

// removeTodo(todos, 'sex')
// console.log(todos)

const getThingsToDo = function (todos) {
    return todos.filter(function(todo, index) {
        return !todo.completed
    })
}

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (a.completed && !b.completed) {
            return -1
        } else if (!a.completed && b.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)
console.log(getThingsToDo(todos))

// todo.splice(2,1)
// todo.push('staring at strangers')
// todo.shift()

// console.log(`You have ${todo.length} todos`)
// todo.forEach(function (item, index) {
//     console.log(`${index + 1}. ${item}`)
// })

// for (let count = 0; count < todo.length; count++) {
//     console.log(`${count + 1}. ${todo[count]}`)
// }
// console.log(todo)
// console.log(`Todo: ${todo[0]}`)
// console.log(`Todo: ${todo[todo.length - 2]}`)