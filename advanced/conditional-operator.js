// const myAge = 27
// const message = myAge >= 18 ? 'You can vote' : 'You cannot vote' 

// message = myAge >= 18 ? 'You can vote' : 'You cannot vote' 

// if (myAge >= 18) {
//     message = 'You can vote!'
// } else {
//     message = 'You cannot vote!'
// }

// console.log(message)

// const myAge = 22
// const showPage = () => {
//     return 'Showing the page'
// }
// const showErrorPage = () => {
//     return 'Showing the error page'
// }

// const message = myAge >= 21 ? showPage() : showErrorPage()
// console.log(message)

const team = ['Tyler', 'Igor', 'Andrew']

const teamSizeMessage = (team) => {
    return `Team size: ${team.length}`
}
const teamErrorSizeMessage = () => {
    return 'Too many people on your team'
}

console.log(team.length <= 4 ?  teamSizeMessage(team) : teamErrorSizeMessage())