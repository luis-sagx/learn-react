// Optional Chaining (?)
// permite acceder a propiedades o metodos sin tener que verificar si existen

const usuario = {
    nombre: "Juan",
    direccion: {
        ciudad: "Madrid",
    }
};

console.log(usuario.direccion?.ciudad); // "Madrid"
console.log(usuario.telefono?.numero); // undefined
// marca como undefined pero no lanza un error
// y permite que se siga ejecutando el código



// Nullish Coalescing (??)
// permite asignar un valor por defecto en caso de que el valor sea null o undefined
// retorna el operando del lado derecha cuando el izquierdo es null o undefined

const page = null;
const resultado = page ?? 1;
console.log(resultado); // 1
