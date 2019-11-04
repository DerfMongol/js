//lesson
let temp = 3
if (temp >= 55 && temp <= 80) {
    console.log('It is so sexy out right now')
}
else if (temp < 0 || temp > 100) {
    console.log('Do not go outside big honey crisp')
}
else {
    console.log('It is ok outside')
}

//challenge
let guestOneVegan = false
let guestTwoVegan = false
if (guestOneVegan && guestTwoVegan) {
    console.log('Stop being vegan!!')
}
else if ( guestOneVegan || guestTwoVegan) {
    console.log('Only one of you can eat here')
}
else {
    console.log('There are plenty of options for the both of you')
}