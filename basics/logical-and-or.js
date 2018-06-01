let temp = 115;

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice outside!')
}

if (temp <= 32 || temp >= 110) {
    console.log('Do not go outside!');
}
else {
    console.log('Do what you want!')
}

// Challenge

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Vegan foods')
}
else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Show vegan options')
}
else {
    console.log('Anything on the menu')
}