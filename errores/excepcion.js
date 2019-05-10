
// Crear una Excepción

function FunctionalException(message) {
  this.message = message;
  this.name = 'FunctionalException';
  this.toString = function() {
    return this.name + ': "' + this.message + '"';
  }
}

let fe1 = new FunctionalException('Saldo Negativo');
console.log(fe1.toStrig());
