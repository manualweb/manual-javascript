function FunctionalException(message) {
  this.message = message;
  this.name = 'FunctionalException';
  this.toString = function() {
    return this.name + ': "' + this.message + '"';
  }
}


try {
  let saldo = -12;

  if (saldo <0) {
    throw new FunctionalException('Saldo inferior a 0');
  } else {
    console.log("Saldo Positivo")
  }
} catch (fe) {
    console.log(fe.toString());
}
