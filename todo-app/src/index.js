import { renderTodos } from './views'
import { createTodo, loadTodos } from './todos'
import { setFilters } from './filters'

renderTodos()

document.querySelector('#new-todo').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})

document.querySelector('#todo-form').addEventListener('submit' , (e) => {
    e.preventDefault()
    const text = e.target.elements.todo.value.trim()
    if (text.length > 0) {
        createTodo(text) 
        renderTodos()
        e.target.elements.todo.value = ''
    }
})

window.addEventListener('storage', (e) => {
    if(e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})





