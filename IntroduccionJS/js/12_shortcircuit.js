// TRUTHY and FALSY //
// todo valor es considerado truthy a menos que sea: false, 0, "", null, undefined o NaN, en ese caso es falsy

//ejm de truthy:
if(44){
    console.log("Es un valor truthy");
} else {
    console.log("Es un valor falsy");
}

if("Hola"){
    console.log("Es un valor truthy");
} else {
    console.log("Es un valor falsy");
}

if(Infinity){
    console.log("Es un valor truthy");
} else {
    console.log("Es un valor falsy");
}

if([]){
    console.log("Es un valor truthy");
} else {
    console.log("Es un valor falsy");
}

if(-22){
    console.log("Es un valor truthy");
} else {
    console.log("Es un valor falsy");
}

// ejm de falsy:

if(null){
    console.log("Es un valor truthy");
} else {
    console.log("Es un valor falsy");
}

if(0){
    console.log("Es un valor truthy");
} else {
    console.log("Es un valor falsy");
}

if(undefined){
    console.log("Es un valor truthy");
} else {
    console.log("Es un valor falsy");
}

if(NaN){
    console.log("Es un valor truthy");
} else {
    console.log("Es un valor falsy");
} 


///////////////////////////////////////

// EVALUACION DE CORTO CIRCUITO //

const user = {}

user && console.log("El usuario existe")