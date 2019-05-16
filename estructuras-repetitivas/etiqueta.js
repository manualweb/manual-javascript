

// Break to Label

console.log("Inicio del Programa");

let x = 1;
let y = 1;


inicio: while (x<10) {
  console.log(x);
  while (y<10) {
    console.log (x + ',' + y);
    y++;
    if (y==5) {
      break inicio;
    }
  }
  x++;
  y = 0;
}

console.log("Fin del Programa");
