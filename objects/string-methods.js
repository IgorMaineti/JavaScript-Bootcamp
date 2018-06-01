let name = 'Andrew Mead'

// Length property
console.log(name.length)

// Converto to Upper case
console.log(name.toUpperCase())

// Convert to Lower case
console.log(name.toLowerCase())

// Includes method

let password = 'abc123asdasf2332'
console.log(password.includes('password'))

// trim method
console.log(name.trim())

// Challenge time

isValidPassword = function(password) {
    return password.length > 8 && password.includes('password')
}

console.log(isValidPassword('abc123ioioio'))
console.log(isValidPassword('abab'))
console.log(isValidPassword('dsidsidsipassword'))