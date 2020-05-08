

// Define una primera función que suma dos números


function cambiar (persona) {
  persona.nombre = "Luis";
}

let persona = {"nombre":"Víctor","edad":42};
console.log("Antes de invocar");
console.log(persona.nombre);  // Saldrá Víctor

cambiar(persona);

console.log("Después de invocar");
console.log(persona.nombre); // Saldrá Luís
