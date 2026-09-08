const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Ingrese su nombre completo: ", (nombreCompleto) => {
  // convertir a mayúsculas
  const mayusculas = nombreCompleto.toUpperCase();
  
  // extraer las primeras 4 letras usando .slice(inicio, fin)
  const primerasCuatro = nombreCompleto.slice(0, 4);
  
  // Convertir a minúsculas
  const minusculas = nombreCompleto.toLowerCase();

  // mostrar resultados claros en consola
  console.log(`\n--- RESULTADOS TAREA 1 ---`);
  console.log(`Nombre en mayúsculas: ${mayusculas}`);
  console.log(`Primeras 4 letras: ${primerasCuatro}`);
  console.log(`Nombre en minúsculas: ${minusculas}`);

  rl.close();
});