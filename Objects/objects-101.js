//lessons
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}
console.log(`${myBook.title} by ${myBook.author} `)
myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author} `)

//challenge
let person = {
    name: 'Lee Martin',
    age: 28,
    location: 'Orlando'
}
console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)
person.age += 1
console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)