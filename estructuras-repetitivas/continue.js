
// Imprimir solo números primos mediante un continue

console.log('Inicio del Programa');
let x = 0;

while (x<10) {
  x++;
  if (x%2==0) {
    continue;
  }
  console.log(x);

}
console.log('Fin del Programa');
