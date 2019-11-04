//lesson
let name = '    Lee Martin    '
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
let passwords = 'abc123password098'
console.log(passwords.includes('password'))
console.log(name.trim())

//challenge
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}
console.log(isValidPassword('lkjdsf'))
console.log(isValidPassword('lkjdsfasdfasdf33323'))
console.log(isValidPassword('lkjdsfsdf44545password'))