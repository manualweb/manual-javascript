console.log('Inicio del Programa');

function persona(nombre,edad) {
  this.nombre = nombre;
  this.edad = edad;
}

let p = new persona('victor',42);

for (x in p)
  console.log(p[x]);

console.log('Fin del Programa');
