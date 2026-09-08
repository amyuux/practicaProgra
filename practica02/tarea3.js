const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Ingrese su año de nacimiento: ", (anioNacimientoStr) => {
  // Convertir año ingresado a número
  const anioNacimiento = parseInt(anioNacimientoStr);
  
  // Obtener el año actual mediante el objeto Date
  const fechaActual = new Date();
  const anioActual = fechaActual.getFullYear();
  
  // Calcular la edad aproximada
  const edad = anioActual - anioNacimiento;

  // Mostrar salida descriptiva
  console.log(`Tu edad aproximada es: ${edad} años.`);

  rl.close();
});