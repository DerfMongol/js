const products = ['f']
const product = products[0]

//Truthy - Values that resolve in true in boolean context
//Falsey - Values that resolve to false in boolean context
//Falsey - false, 0, ,empty string, null, undefined, NaN

if (product) {
    console.log('Product found')

}else {
    console.log('Product not found')
}

// 1/0 = NaN