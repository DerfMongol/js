const grade = function (score, total) {
    const percent = (score / total) * 100
    let letter = 'F'
    let a = 'a'
    if (typeof score !== 'number' || typeof total !== 'number') {
        throw Error
    }
    if (percent >= 90 && percent <= 100) {
        letter = 'A'
        a = 'an'
    } else if (percent >= 80 && percent < 90) {
        letter = 'B'
    } else if (percent >= 70 && percent < 80) {
        letter = 'C'
    } else if (percent >= 60 && percent < 70) {
        letter = 'D'
    } else if (percent >= 0 && percent < 70){
        letter = 'F'
        a = 'an'
    } else {
        return 'Please enter a score between 0 and the total'
    }
    return `You got ${a} ${letter} (${percent}%)! `
}
try {
    const test = grade(3,4)
    console.log(test)
} catch (e) {
    console.log('Please type a number')
}