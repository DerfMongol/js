import { getTodos, toggleTodo, removeTodo } from './todos'
import { getFilters } from './filters'

const renderTodos = () => {
    const {searchText} = getFilters()
    const filteredTodos = getTodos().filter((todo) => todo.text.toLowerCase().includes(searchText.toLowerCase()))
    const incompleteTodo = filteredTodos.filter((todo) => !todo.completed)
    const todosElement = document.querySelector('#todos')
    
    todosElement.innerHTML = ''
    todosElement.appendChild(generateSummaryDom(incompleteTodo))

    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todosElement.appendChild(generateTodoDom(todo))
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.classList.add('empty-message')
        emptyMessage.textContent = 'No to-do to show'
        todosElement.appendChild(emptyMessage)
    }
    
}

const generateTodoDom = (todo) => {
    const {hideCompleted} = getFilters()
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const check = document.createElement('input')
    const todoText = document.createElement('span')
    const button = document.createElement('button')
    
    check.setAttribute('type', 'checkbox')
    containerEl.appendChild(check)
    check.checked = todo.completed
    check.addEventListener('change', (e) => {
            toggleTodo(todo.id)
            renderTodos()
    })
    
    containerEl.appendChild(todoText)
    
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    button.textContent = 'Remove'
    button.classList.add('button', 'button--text')
    todoEl.appendChild(button)
    button.addEventListener('click', (e) => {
        removeTodo(todo.id)
        renderTodos()
    })
    if (hideCompleted && todo.completed) {
        todoEl.textContent = ''
        
    } else {
        todoText.textContent = todo.text
        
    }

    return todoEl
}

const generateSummaryDom = (incompleteTodo) => {
    const summary = document.createElement('h2')
    const plural = incompleteTodo.length === 1 ? '' : 's'
    summary.classList.add('list-title')
    summary.textContent = `You have ${incompleteTodo.length} todo${plural} left`
    return summary
}

export { renderTodos, generateSummaryDom, generateTodoDom }