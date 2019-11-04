//lessons
let greetUser = function () {
    console.log('Welcome user!')
}
greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}
let value = square(4)
console.log(value)

//challenge
let convertFahrenheitToCelcius = function (temp) {
    let celcius = (temp - 32) * (5 / 9)
    console.log(celcius)
}
convertFahrenheitToCelcius(32)
convertFahrenheitToCelcius(68)