const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese su nombre: ", function(nombre) {
  if (nombre) {
    let nombreMayus = nombre.toUpperCase();
    let nombreMinus = nombre.toLowerCase();

    console.log("Nombre en mayúsculas: " + nombreMayus);
    console.log("Nombre en minúsculas: " + nombreMinus);
  } else {
    console.log("No se ingresó ningún nombre.");
  }
  rl.close();
});