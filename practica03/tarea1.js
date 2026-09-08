
const readline = require('readline');
const rl = readline.createInterface({ 

    input: process.stdin, output: process.stdout

});

rl.question("Ingrese un número: ", (entrada) => {
  // Convertir la entrada de texto a número flotante
  const numero = parseFloat(entrada);

  // Estructura condicional para evaluar el número
  if (numero > 0) {
    console.log("El número es positivo");
  } else if (numero < 0) {
    console.log("El número es negativo");
  } else {
    console.log("El número es cero");
  }
 //se cierra
  rl.close();
});