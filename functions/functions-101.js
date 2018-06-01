let greetUser = function() {
    console.log('Welcome user!')
}

greetUser()

let square = function(num) {
    let result = num * num
    return result
}

let value = square(10)
let otherValue = square(3)

console.log(value)
console.log(otherValue)

// Challenge time

let convertFahrenheitToCelsius = function(f) {
    return (f - 32) * 5 / 9;
}

let celsius = convertFahrenheitToCelsius(32)
let otherCelsius = convertFahrenheitToCelsius(68)

console.log(celsius)
console.log(otherCelsius)