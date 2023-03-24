let a = 4;
let b = 3;
let hipotenusa = Math.hypot(a,b);

let seno_alpha = b/hipotenusa;
let seno_beta = a/hipotenusa;

let alpha = Math.asin(seno_alpha);
let beta = Math.asin(seno_beta);

console.log(`El angulo alpha es de ${(alpha*180)/Math.PI} grados`);
console.log(`El angulo beta es de ${(beta*180)/Math.PI} grados`);