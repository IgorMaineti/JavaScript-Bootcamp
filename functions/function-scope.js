// Global scope (convertFahrenheitToCelsius, celsius, otherCelsius)
    // Local scope(f, celsius)
        // Local scope(isFreezing)

let convertFahrenheitToCelsius = function(f) {
    let celsius =  (f - 32) * 5 / 9;

    if (celsius <= 0) {
        let isFreezing = true
    }
    return celsius;
}

let celsius = convertFahrenheitToCelsius(32)
let otherCelsius = convertFahrenheitToCelsius(68)

console.log(celsius)
console.log(otherCelsius)