const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Ingrese la primera calificación (0-100): ", (nota1Str) => {
  rl.question("Ingrese la segunda calificación (0-100): ", (nota2Str) => {
    
    // Convertir a tipo numérico
    const nota1 = parseFloat(nota1Str);
    const nota2 = parseFloat(nota2Str);

    // Comparación mediante sentencias IF
    if (nota1 > nota2) {
      console.log(`La primera calificación (${nota1}) es más alta que la segunda (${nota2}).`);
    } else if (nota2 > nota1) {
      console.log(`La segunda calificación (${nota2}) es más alta que la primera (${nota1}).`);
    } else {
      console.log(`Ambas calificaciones son iguales (${nota1}).`);
    }

    rl.close();
  });
});