const readline = require('readline');
const rl = readline.createInterface({
     input: process.stdin, output: process.stdout
     });

rl.question("Ingrese número de referencia (8 dígitos): ", (numStr) => {
  const numero = Number(numStr);
  const texto = numero.toString();
  console.log(`Primeros 4 dígitos: ${texto.slice(0, 4)}`);
  rl.close();
});