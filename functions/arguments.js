//Multiple arguments

let add = function(a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

//Default arguments

let getScoreText = function(name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
    //return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge time


let totalTip = function(total, tipPercentage = 0.2) {

    return `A ${tipPercentage * 100}% tip on $${total} would be $${total * tipPercentage}`
    //return total * tipPercentage
}

let tip = totalTip(100, undefined)
console.log(tip)

