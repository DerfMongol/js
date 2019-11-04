//lessons
let num = 103.941
console.log(num.toFixed(1))
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))
console.log(Math.round(num))

let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)

//challenge
let makeGuess = function (num) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(randomNum)
    return num === randomNum

}
console.log(makeGuess(1))