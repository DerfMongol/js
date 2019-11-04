//Lesson
let isAccountLocked = false
let userRole = 'user'

if (isAccountLocked) {
    console.log('Is account locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
}
else {
    console.log('Welcome Loser Bitch')
}

//Challenge
let temp = 330
if (temp <= 32) {
    console.log('It is freezing outside!')
} else if (temp >= 100) {
    console.log('It is way too hot outside!')
} else {
    console.log('It is very average...')
}