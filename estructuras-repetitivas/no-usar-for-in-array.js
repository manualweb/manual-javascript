

// No es recomendable utilizar un for..in para recuperar los elementos de un array
// Y es que al array se le pueden agregar propiedades y por lo tanto no saldrían
// solo los elementos a listar


let arr = [3, 5, 7];
arr.nombre = 'Mi array';

for (x in arr) {
  console.log(arr[x]);
}

for (x=0;x<arr.length;x++) {
  console.log(arr[x]);
}
