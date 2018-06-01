let isAccountLocked = true;
let userRole = 'user'

if (isAccountLocked) {
    console.log('The account is locked!')
}
else if (userRole === 'admin') {
    console.log('Welcom Admin!')
}
else {
    console.log('Welcome');
}

let temp = 45;

if (temp <= 32) {
    console.log('It is freezing outside!')
}
else if (temp >= 110) {
    console.log('It is pretty hot outside')
}
else {
    console.log('Perfect temperature')
}