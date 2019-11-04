const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}

const getCountry = async (code) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')
        if (response.status === 200) {
            const data = await response.json()
            return data.find((country) => country.alpha2Code === code)
        } else {
            throw new Error('An error has taken place')
        } 
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=fb0ae170e9d524')
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('An error has taken place')
        } 
}

export {getPuzzle as default}

// const getCountry = (code) => new Promise((resolve, reject) => {
//     const request2 = new XMLHttpRequest() 
//     request2.addEventListener('readystatechange', (e) => {
//         if(e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             data.find((country) => {
//                 if(country.alpha2Code === code) {
//                     resolve(country)
//                 }   
//             })
//         } else if(e.target.readyState === 4) {
//             reject('An error has taken place')
//         } 
//     })
//     request2.open('GET', 'http://restcountries.eu/rest/v2/all')
//     request2.send()
// })
