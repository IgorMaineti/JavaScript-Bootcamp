
const todos = [{
    text: 'todo1',
    completed: false
}, {
    text: 'todo2',
    completed: true
}, {
    text: 'todo3',
    completed: false
}, {
    text: 'todo4',
    completed: true
}, {
    text: 'todo5',
    completed: false
}]

const deleteTodo = function(todo, text) {
    const index = todo.findIndex(function (todo, index) {
        return todo.text.toLowerCase() === text.toLowerCase()
    })
    if (index > -1) {
    todo.splice(index, 1)
    }
}

const getThingsToDo = function (todo) {
    return todo.filter(function (todo) {
        return !todo.completed
    })
}

const sortTodos = function(todo) {
    todo.sort(function (a, b) {
        return (a.completed === b.completed)? 0 : a.completed? 1 : -1
    })
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))

// deleteTodo(todos, 'todo4')
// console.log(todos)









// todos.splice(2, 1)
// todos.push('todo 6')
// todos.shift()

// console.log(`You have ${todos.length} todos`)


// todos.forEach(function (todo, index){
//     console.log(`${index + 1}. ${todo}`)
// })

// for(let i = 0; i < todos.length; i++) {
//     console.log(`${i + 1}. ${todos[i]}`)
// }

