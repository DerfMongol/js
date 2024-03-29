//lessons
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)
console.log(bookSummary.pageCountSummary)
console.log(otherBookSummary.summary)

//challenge
let convertTemp = function (temp) {
    return {
        faranheit: temp,
        celcius: (temp - 32) * (5 / 9),
        kelvin: (temp + 459.67) * (5 / 9)
    }
}

let tempSummary = convertTemp(65)
console.log(tempSummary.faranheit)
console.log(tempSummary.celcius)
console.log(tempSummary.kelvin)