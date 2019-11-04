import uuidv4 from 'uuid/v4'

let todos = []

const loadTodos = () => {
    const todoJson = localStorage.getItem('todos')

    try {
        todos = todoJson ? JSON.parse(todoJson) : []
    } catch (e) {
        todos = []
    }
}

const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const getTodos = () => todos

const createTodo = (text) => {
    todos.push({
        id: uuidv4(),
        text,
        completed: false
    })
    saveTodos()

}

const removeTodo = (id) => {
    const todoId = todos.findIndex((todo) => todo.id === id)
    if (todoId > -1) {
        todos.splice(todoId, 1)
        saveTodos()
    }
}

const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo) {
        todo.completed = !todo.completed
        saveTodos()
    }
}

loadTodos()
export { getTodos, createTodo, removeTodo, toggleTodo, loadTodos }
