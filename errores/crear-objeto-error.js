
// Crear objeto Error

try {
  throw new Error("Esto es un nuevo error");
} catch (e) {
  console.log(e.name + ':' + e.message)
}
