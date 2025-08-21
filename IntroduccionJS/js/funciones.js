const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

export {
    sumar,
    restar,
    multiplicar,
    dividir
};

export default function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

// solo puede existir una exportación por defecto
// porque es la que se importa sin llaves