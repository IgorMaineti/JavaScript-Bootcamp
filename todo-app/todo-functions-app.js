// Fetch exiting todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    return todosJSON ? JSON.parse(todosJSON) : []
}

//Save todos in localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if(todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

//Toggle Checkbox
const toggleCheckbox = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if(todo)
        todo.completed = !todo.completed
} 

//Render Application todos based on filters
const renderTodos =(filters, todos) => {

    let filteredTodos = ''
    if (filters.hideCompleted) {
        filteredTodos = todos.filter((todos) => !todos.completed && todos.text.toLowerCase().includes(filters.SearchText.toLowerCase()))
    }
    else {
        filteredTodos = todos.filter((todos) => todos.text.toLowerCase().includes(filters.SearchText.toLowerCase()))
    }

    const getThingsToDo = function (todo) {
        return filteredTodos.filter((todo) => !todo.completed)
    }
    
    document.querySelector('#contain-todos').innerHTML = ''
    document.querySelector('#contain-todos').appendChild(generateSummaryDOM(getThingsToDo()))

    filteredTodos.forEach((todos) => {
        document.querySelector('#contain-todos').appendChild(generateDOM(todos))
    })
}

//Get the DOM elements for an inidividual note
const generateDOM = (todo) => {
    // Create DOM elements
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')    
    const pTodos = document.createElement('span')
    const deleteTodo = document.createElement('button')


    // Todo Checkbox
    checkbox.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkbox)
    checkbox.checked = todo.completed
    checkbox.addEventListener('change', () => {
        toggleCheckbox(todo.id)
        saveTodos(todos)
        renderTodos(filters, todos)
    })

    // Todo Text
    pTodos.textContent = todo.text
    todoEl.appendChild(pTodos)

    //Setup the remove button
    deleteTodo.textContent = 'x'
    todoEl.appendChild(deleteTodo)
    deleteTodo.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(filters, todos)
    })

    // Toggle checkbox


    return todoEl
}
//Get the DOM summary for list summary
const generateSummaryDOM = (getThingsToDo) => {
    const pTodosLeft = document.createElement('h2')
    pTodosLeft.textContent = `You have ${getThingsToDo.length} todos left`
    return pTodosLeft
} 