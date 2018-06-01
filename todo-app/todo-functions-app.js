// Fetch exiting todos from localStorage
const getSavedTodos = function() {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    }
    else {
        return []
    }
}

//Save todos in localStorage
const saveTodos = function() {
    return localStorage.setItem('todos', JSON.stringify(todos))
}

//Render Application todos based on filters
const renderTodos = function(filters, todos) {

    let filteredTodos = ''
    if (filters.hideCompleted) {
        debugger
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
    document.querySelector('#contain-todos').appendChild(generateSummaryDOM(getThingsToDo))

    filteredTodos.forEach(function(todos) {
        document.querySelector('#contain-todos').appendChild(generateDOM(todos))
    })
}

//Get the DOM elements for an inidividual note
const generateDOM = function(todo) {
    const pTodos = document.createElement('p')
    pTodos.textContent = todo.text
    return pTodos
}
//Get the DOM summary for list summary
const generateSummaryDOM = function(getThingsToDo) {
    const pTodosLeft = document.createElement('h2')
    pTodosLeft.textContent = `You have ${getThingsToDo.length} todos left`
    return pTodosLeft
} 