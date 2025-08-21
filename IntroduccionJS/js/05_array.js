const myArray = [11,22,33,true,"hola"];

console.table(myArray);

//Modificar arreglos

const tech = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

//Agregar un elemento al final
tech.push("Express");
console.table(tech);

//Eliminar el último elemento
tech.pop();
console.table(tech);

//Eliminar el primer elemento
tech.shift();
console.table(tech);

//Agregar un elemento al inicio
tech.unshift("Tailwind CSS");
console.table(tech);

//Modificar un elemento
tech[0] = "Bootstrap";
console.table(tech);

//Aternativa para no mutar arreglo

//Agregar un elemento
const newTech = [...tech, "TypeScript"];
console.table(newTech);

//Eliminar un elemento
const newTech2 = newTech.filter(item => item !== "Node.js");
console.table(newTech2);

//Modificar un elemento
const newTech3 = newTech2.map(item => item === "JavaScript" ? "JS" : item);
console.table(newTech3);