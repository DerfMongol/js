//lessons
let add = function (a, b, c) {
    return a + b + c
}
let result = add(3, 4, 5)
console.log(result)

//defaualt arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    // return 'Name: ' + name + ' --> Score: ' + score
    //Below is a template string of the code above
    return `Name: ${name} --> Score: ${score}`
}
let scoreText = getScoreText(undefined, 67)
console.log(scoreText)

//template strings
let name = 'Lee'
let age = 12
console.log(`Hey, my name is ${name}! I am ${age} years old`)

//challenge
let getTip = function (total, tipPercent = .2) {
    return '$' + total * tipPercent
}
let bill = getTip(50)
console.log(bill)

//challenge for template
let getTip2 = function (total, tipPercent = .2) {
    return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`
}
let bill2 = getTip2(60)
console.log(bill2)


