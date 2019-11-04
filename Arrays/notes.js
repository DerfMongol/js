//lessons
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eat better'

}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

console.log('a' < 'j')

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}
sortNotes(notes)
console.log(notes)
// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// notes.unshift('My first note')

// notes.splice(1, 1, 'This is a splice item')

// notes[2] = 'This is the easy swap'

// notes.forEach(function(item, index) {
//     console.log(index)
//     console.log(item)
// })

const findNote = function (notes, noteTitle) {
    return notes.find(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function(note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    }) 
}


console.log(findNotes(notes, 'work'))
// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function(note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const note = findNote(notes, 'office modification ')
console.log(note)

// console.log(notes.length)
// console.log(notes)

// const index = notes.findIndex(function(note, index) {
//     console.log(note)
//     return note.title === 'Habits to work on'
// })
// console.log(index)
// let someObject = {}
// let otherObject = someObject
// console.log(someObject === otherObject)

// for (let count = 0; count <= 2; count++) {
//     console.log(`Counting... ${count + 1}`)
// }

// for (let count = 0; count < notes.length; count++) {
//     console.log(count)
//     console.log(notes[count])
// }