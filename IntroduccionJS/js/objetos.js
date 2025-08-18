// Objetos

const product = {
    nameP: "Cafe",
    price: 10,
    isAvailable: true
}

console.log(product)
console.table(product)

console.log(product.nameP)

console.log("-------------------------\nDestructuring\n-------------------------")
// Destructuring

const { nameP, price, isAvailable } = product;

console.log(nameP)
console.log(price);
console.log(isAvailable);


// Object Literal Enhacement
const isAuth = true;
const user = "Juan"

const userObj = { isAuth, user }

console.log(userObj)
console.log(typeof userObj)


//Manipular objetos

const product2 = {
    nameP: "Te",
    price: 15,
    isAvailable: false
}

// Object.freeze(product2);
// Object.seal(product2);


//reescribir un valor
product2.nameP = "Te Verde";
product2.price = 20;
product2.isAvailable = true;

console.log(product2)

//agregar un nuevo valor
product2.category = "Infusiones";
console.log(product2)

//eliminar un valor
delete product2.price;
console.log(product2)


Object.freeze(product2); // Congela el objeto, no se pueden modificar sus propiedades, agregar ni eliminar
Object.seal(product2); // Sella el objeto, no se pueden agregar ni eliminar propiedades, pero se pueden modificar