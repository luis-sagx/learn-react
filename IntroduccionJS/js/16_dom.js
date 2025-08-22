// Selectores

const heading = document.querySelector('.heading');

console.log(heading);
console.log(heading.textContent) //ver contenido
console.log(heading.classList) // ver clases que tiene

heading.textContent = "Nuevo Título"


const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach(enlace => {
    console.log(enlace.textContent) //ver contenido de todos los enlaces
});

enlaces.forEach((enlace, index) => {
    enlace.textContent = `nuevo enlace ${index}`
},0)

