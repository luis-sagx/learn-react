const tech = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

const react = tech[3];
console.log(react)

// Destructuring en arrays trae el valor de la posicion del indice
const [myHtml, myCss, myJs] = tech;
console.log(myJs);

// Se usa ',' para omitir elementos
const [, , , myReact] = tech;
console.log(myReact);
