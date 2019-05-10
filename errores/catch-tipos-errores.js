

// Capturar los errores dependiendo de su tipo

try {

  // Error 1
  let objeto = 'a';
  console.log(objeto.sumar());

  // Error 2
  console.log(casa);

} catch (e) {
  if (e instanceof TypeError) {
    console.log("Error de Sintaxis");
  } else if (e instanceof ReferenceError) {
    console.log("Elemento referenciado sin existir");
  } else {
    console.log("Tipo de error no controlado");
  }
}
