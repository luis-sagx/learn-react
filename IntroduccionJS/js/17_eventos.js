// eventos click

const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')


heading.addEventListener('click', () => {
    heading.textContent = 'has hecho click'
})

enlaces.forEach((enlace, index) => { 
    enlace.addEventListener('click', (event) => {
        event.preventDefault() // prevenir el comportamiento por defecto del enlace
        console.log(event.target)
        event.target.textContent = 'soy nuevo enlace -> ' + index
    })
}, 0)


// eventos formularios

const inputNombre = document.querySelector('#nombre')

inputNombre.addEventListener('input', (e) => {
    console.log(e.target.value)
})


const inputPassword = document.querySelector('#password')

inputPassword.addEventListener('input', seeFastPassword = () => {
    inputPassword.type = "text";

    setTimeout(() => {
        inputPassword.type = "password"
    }, 200)
})


// envio de formularios

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(inputNombre.value)
    console.log(inputPassword.value)


    if(!inputNombre.value.trim() || !inputPassword.value.trim()){
        createAlert()
    }
})


const createAlert = () => {
    const alerta = document.createElement('DIV')
    alerta.textContent = 'Los campos no pueden estar vacios'
    alerta.classList.add('alerta', 'text-blue-500', 'text-sm', 'text-center', 'mb-3')

    const alertaPrevia = document.querySelector('.alerta')

    if(!alertaPrevia){
        // Agregar la alerta al formulario
        formulario.appendChild(alerta)
    
    }

    setTimeout(() => {
        alerta.remove()
    }, 2000)
}