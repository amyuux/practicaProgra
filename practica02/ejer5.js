const readline = require('readline');
const rl = readline.createInterface({
    
    input: process.stdin, output: process.stdout
 });

rl.question("Ingrese su año de nacimiento: ", (anioNac) => {

  const anioActual = new Date().getFullYear();
  const edad = anioActual - parseInt(anioNac);
  console.log(`Su edad es: ${edad} años`);
  rl.close();
  
});