const readline = require('readline');
const rl = readline.createInterface({
     input: process.stdin, output: process.stdout 
    });

rl.question("Nombre: ", (nom) => {
  rl.question("Apellido: ", (ape) => {
    rl.question("Año de ingreso: ", (anio) => {
      rl.question("Promedio: ", (prom) => {

        
        console.log("\nresultados");

        console.log(`Nombre completo: ${nom.toUpperCase()} ${ape.toUpperCase()}`);
        console.log(`Primeras 3 letras del apellido: ${ape.slice(0, 3)}`);
        console.log(`Ultimos 2 dígitos del año: ${anio.slice(-2)}`);
        console.log(`Promedio (2 decimales): ${parseFloat(prom).toFixed(2)}`);

        rl.close();
      });
    });
  });
});