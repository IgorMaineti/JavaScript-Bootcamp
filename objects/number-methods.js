let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 1
let max = 5

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

//challenge time

let makeGuess = function(num) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return num === randomNum
    }

    console.log(makeGuess(2))