//constructor functions use capital letters and the new keyword
//never need to use return function
//Prototypal Inheritance 
//myPerson --> Person.prototype --> Object.prototype -->null

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.fullName} is a ${this.position}`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade) {
        super(firstName, lastName, age)
        this.grade = grade
    }
    getBio() {
        if (this.grade >= 70) {
            return `${this.firstName} is passing the class`
        } else {
            return `${this.firstName} is failing the class`
        }
    }
    updateGrade(points) {
        this.grade += points
    }
}

const lee = new Student('Billy', 'Madison', '43', '70')
lee.fullName = 'Tom Clancy'
console.log(lee.getBio())
lee.updateGrade(-10)
console.log(lee.getBio())

const me = new Employee('Lee', 'Martin', '28', 'Stripper', ['masturbating', 'women'])



console.log(me.getBio())
console.log(me.getYearsLeft())

const person2 = new Person('Big', 'Old', '977')
console.log(person2.getBio())