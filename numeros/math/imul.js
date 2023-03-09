let numero = 0xffffffff;
console.log(Math.imul(numero,2)); // -2

let multiplicacion = numero * 2; // 8589934590
console.log(multiplicacion | 0); // -2 