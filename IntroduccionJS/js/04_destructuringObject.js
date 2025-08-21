//Destructuring de 2 o mas objetos

const product = {
    nombre: "Cafe",
    price: 10,
    isAvailable: false
}

const client1 = {
    nombre: "Juan",
    age: 30,
    isPremium: true,
    address: {
        city: "Quito",
        street: "Av. Maldonado"
    }
}

const { nombre: nameP, price, isAvailable } = product;
const { nombre: nameC, age, isPremium, address: { city, street } } = client1;

console.log(nameP, price, isAvailable);
console.log(nameC, age, isPremium, city, street);   

const client2 = {
    nombre: "Pepe",
    age: 20,
    isPremium: true,
}

const carrito = {
    cantidad: 1,
    ...product  // spread operator
}

console.log(carrito);

///////////////////////////////
const combinacionObjeto = {
    ...client2,
    ...carrito
} 

console.log(combinacionObjeto);

const nuevoObjeto2 = Object.assign(client2, carrito);
console.log(nuevoObjeto2);