const techs = ['HTML', 'CSS', 'JS']
const numbers = [1, 2, 3, 4, 5]


// Map 
let techMap = techs.map((tech) => tech.toUpperCase())
console.log(techMap)

let numbersMap = numbers.map((num) => num*num)
console.log(numbersMap)


// Filter
let techFilter = techs.filter((tech) => tech.includes('JS'))
console.log(techFilter)

let numberFilter = numbers.filter((num) => num%2 != 0)
console.log(numberFilter);


// Reduce
let techReduce = techs.reduce((acc, tech) => acc + tech.length, 0)
console.log(techReduce)

let numberReduce = numbers.reduce((sum, num) => sum+=num, 0)
console.log(numberReduce)


// Find
// find devuelve el primer elemento que cumple la condición
let techFind = techs.find((tech) => tech.includes('JS'))
console.log(techFind)

let numberFind = numbers.find((num) => num === 3)
console.log(numberFind)


// Some -> devuelve true o false
// some devuelve true si al menos un elemento cumple la condición
let techSome = techs.some((tech) => tech.includes('JS'))
console.log(techSome)

let numberSome = numbers.some((num) => num === 3)
console.log(numberSome)


// Every -> devuelve true o false
// every devuelve true si todos los elementos cumplen la condición
let techEvery = techs.every((tech) => tech.includes('JS'))
console.log(techEvery)

let numberEvery = numbers.every((num) => num === 3)
console.log(numberEvery)
