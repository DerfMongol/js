const myAge = 7
const message = myAge >= 18 ? 'You can vote' : 'You cannot vote'

// if (myAge >= 19) {
//     message = 'You can vote'
// } else {
//     message = 'You cannot vote'
// }

console.log(message)

const age = 3
const showPage = () => {
    return 'Showing the page'
}
const showErrorPage = () => {
   return 'Showing the error page'
}

const letter = age >= 21 ? showPage() : showErrorPage()
console.log(letter)

const team = ['Tyler', 'Porter', 'Billy', 'Cock', 'Jim']
console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team')