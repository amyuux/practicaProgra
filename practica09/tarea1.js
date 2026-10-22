
// calculamos el factorial de un numero
function calcularFactorial(n) {
  // caso base
  if (n === 0 || n === 1) {
    return 1;
  }

  // llamada recursiva
  return n * calcularFactorial(n - 1);
}

// calculamos la potencia sin usar **
function calcularPotencia(base, exponente) {
  // caso base
  if (exponente === 0) {
    return 1;
  }

  // llamada recursiva
  return base * calcularPotencia(base, exponente - 1);
}

// sumamos los numeros desde 1 hasta n
function sumarHastaN(n) {
  // caso base
  if (n === 0) {
    return 0;
  }

  // llamada recursiva
  return n + sumarHastaN(n - 1);
}

// solicitamos un numero al usuario
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function main() {
  let numero = Number(await rl.question("ingrese un numero entero entre 0 y 10: "));

  // validamos el numero para evitar resultados demasiado grandes
  while (!Number.isInteger(numero) || numero < 0 || numero > 10) {
    console.log("ingrese un numero entero entre 0 y 10");
    numero = Number(await rl.question("ingrese el numero nuevamente: "));
  }

  // mostramos los resultados
  console.log(`factorial de ${numero}: ${calcularFactorial(numero)}`);
  console.log(`potencia de ${numero} elevado a ${numero}: ${calcularPotencia(numero, numero)}`);
  console.log(`suma desde 1 hasta ${numero}: ${sumarHastaN(numero)}`);

  rl.close();
}

main();
