// funciones clasicas //
function saludarC(nombre) {
    return `Hola, ${nombre}!`
}

function sumarC(a, b) {
    return a + b
}

//llamado a la funcion clasica
let sumaC = sumarC(2,6)
console.log(sumaC)

// funciones declarativas //
const saludarD = function(nombre) {
    return `Hola, ${nombre}!`
}

const sumarD = function(a, b) {
    return a + b
}

//llamado a la funcion declarativa
let sumaD = sumarD(2,6)
console.log(sumaD)

//////////////////////////////////

// Arrow Functions //

const sumarA = (a, b) => {
    return a + b
}

let sumaA = sumarA(2,6)
console.log(sumaA)

const restar = (a,b) => {
    return a-b
}