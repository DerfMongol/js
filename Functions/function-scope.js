//lesson
let convertFahrenheitToCelcius = function (temp) {
    let celcius = (temp - 32) * (5 / 9)
    if (celcius <= 0 ) {
        let isFreezing = true
    }
    return celcius
}
let temp = convertFahrenheitToCelcius(32)
console.log(temp)