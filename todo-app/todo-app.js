
const todos = getSavedTodos()

const filters = {
    SearchText: '',
    hideCompleted: false
}

renderTodos(filters, todos)

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.SearchText = e.target.value
    renderTodos(filters, todos)
})

document.querySelector('#todo-form').addEventListener('submit', function(e) {
    e.preventDefault()
    const newTodo =  e.target.elements.addTodo.value
    todos.push({
        id: uuidv4(),
        text: newTodo,
        completed: false
    })
    saveTodos(todos)
    renderTodos(filters, todos)
    e.target.elements.addTodo.value = ''
})

document.querySelector('#hideTodos').addEventListener('change', function(e) {
    filters.hideCompleted = !filters.hideCompleted
    renderTodos(filters, todos)
})