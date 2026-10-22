
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

// creamos la interfaz para leer datos
const rl = readline.createInterface({ input, output });

async function main() {
  // generamos un numero secreto entre 1 y 50
  const secreto = Math.floor(Math.random() * 50) + 1;
  let numero = 0;
  let intentos = 0;

  // repetimos mientras el usuario no adivine
  while (numero !== secreto) {
    const respuesta = await rl.question("adivina el numero (1-50): ");
    numero = Number(respuesta);
    intentos++;

    // verificamos que el numero sea valido
    if (!Number.isInteger(numero) || numero < 1 || numero > 50) {
      console.log("ingresa un numero entero entre 1 y 50");
    } else if (numero > secreto) {
      console.log("el numero secreto es menor");
    } else if (numero < secreto) {
      console.log("el numero secreto es mayor");
    } else {
      // mostramos el resultado cuando acierta
      console.log("felicidades, adivinaste el numero");
      console.log(`intentos realizados: ${intentos}`);
    }
  }

  // cerramos la interfaz
  rl.close();
}

main();

