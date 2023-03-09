let entero = 1234567890;
let entero_no_seguro = Number.MAX_SAFE_INTEGER+1;  // Si restas 1 ya será un entero seguro

console.log(Number.isSafeInteger(entero));
console.log(Number.isSafeInteger(entero_no_seguro));