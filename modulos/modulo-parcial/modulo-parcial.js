let nombre_defecto = 'Luis';

function saludo () {
   console.log('Hola ' + nombre_defecto);
}

function saludo_nombre(nombre) {
  console.log('Hola ' + nombre);
}

export { saludo_nombre} ;