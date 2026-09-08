const readline = require('readline');

const rl = readline.createInterface({
    
    input: process.stdin, output: process.stdout
 });

rl.question("Ingrese código (ej. EST20260645): ", (codigo) => {
  console.log(`Primeros 3 caracteres: ${codigo.slice(0, 3)}`);
  console.log(`Últimos 4 caracteres: ${codigo.slice(-4)}`);
  rl.close();

});