// ejemplo if clasico

const saldo = 1000;
const pagar = 1200;
const tarjeta = true;

if (saldo >= pagar || tarjeta) {
  console.log("Pago autorizado");
} else {
  console.log("Pago denegado");
}

///////////////////////////////
// Operador Ternario

const resultado = (saldo >= pagar || tarjeta) ? "Pago autorizado por ternario" : "Pago denegado por ternario";
console.log(resultado);

// Operador Ternario si se tuviera if, else if, else

const resultado2 = (saldo >= pagar) ? 
    "Pago autorizado por ternario" : 
    (tarjeta) ? "Pago con tarjeta autorizado por ternario" : 
    "Caso no cubierto por ternario";
console.log(resultado2);


