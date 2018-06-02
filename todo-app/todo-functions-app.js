// Fetch exiting todos from localStorage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

//Save todos in localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todo by id
const removeTodo = function(id){
    const todoIndex = todos.findIndex(function (todo){
        return todo.id === id
    })

    if(todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

//Toggle Checkbox
const toggleCheckbox = function(todo) {
    todo.completed = !todo.completed
} 

//Render Application todos based on filters
const renderTodos = function(filters, todos) {

    let filteredTodos = ''
    if (filters.hideCompleted) {
        filteredTodos = todos.filter(function(todos) {
            return !todos.completed && todos.text.toLowerCase().includes(filters.SearchText.toLowerCase())
        })
    }
    else {
        filteredTodos = todos.filter(function(todos) {
        return todos.text.toLowerCase().includes(filters.SearchText.toLowerCase())
        })
    }

    const getThingsToDo = function (todo) {
        return filteredTodos.filter(function (todo) {
            return !todo.completed
        })
    }
    
    document.querySelector('#contain-todos').innerHTML = ''
    document.querySelector('#contain-todos').appendChild(generateSummaryDOM(getThingsToDo()))

    filteredTodos.forEach(function(todos) {
        document.querySelector('#contain-todos').appendChild(generateDOM(todos))
    })
}

//Get the DOM elements for an inidividual note
const generateDOM = function(todo) {
    // Create DOM elements
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')    
    const pTodos = document.createElement('span')
    const deleteTodo = document.createElement('button')


    // Todo Checkbox
    checkbox.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', function() {
        toggleCheckbox(todo)
        saveTodos(todos)
        renderTodos(filters, todos)
    })

    // Todo Text
    pTodos.textContent = todo.text
    todoEl.appendChild(pTodos)

    //Setup the remove button
    deleteTodo.textContent = 'x'
    todoEl.appendChild(deleteTodo)
    deleteTodo.addEventListener('click', function() {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(filters, todos)
    })

    // Toggle checkbox


    return todoEl
}
//Get the DOM summary for list summary
const generateSummaryDOM = function(getThingsToDo) {
    const pTodosLeft = document.createElement('h2')
    pTodosLeft.textContent = `You have ${getThingsToDo.length} todos left`
    return pTodosLeft
} 