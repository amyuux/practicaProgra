
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

// sumamos los primeros n numeros pares
function sumarPares(n) {
  // caso base
  if (n === 0) {
    return 0;
  }

  // llamada recursiva
  return (n * 2) + sumarPares(n - 1);
}

// sumamos los primeros n numeros impares
function sumarImpares(n) {
  // caso base
  if (n === 0) {
    return 0;
  }

  // llamada recursiva
  return (n * 2 - 1) + sumarImpares(n - 1);
}

// calculamos el termino n de fibonacci
function fibonacci(n) {
  // casos base
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  // llamada recursiva
  return fibonacci(n - 1) + fibonacci(n - 2);
}

async function main() {
  let opcion;

  // repetimos el menu hasta elegir salir
  do {
    console.log("\n===== menu de operaciones =====");
    console.log("1. sumar numeros pares");
    console.log("2. sumar numeros impares");
    console.log("3. calcular fibonacci");
    console.log("4. salir");

    opcion = await rl.question("seleccione una opcion: ");

    // ejecutamos la operacion elegida
    switch (opcion) {
      case "1":
      case "2":
      case "3": {
        let n = Number(await rl.question("ingrese n (0-20): "));

        // validamos el valor ingresado
        while (!Number.isInteger(n) || n < 0 || n > 20) {
          console.log("ingrese un entero entre 0 y 20");
          n = Number(await rl.question("ingrese n nuevamente: "));
        }

        if (opcion === "1") {
          console.log(`suma de los primeros ${n} pares: ${sumarPares(n)}`);
        } else if (opcion === "2") {
          console.log(`suma de los primeros ${n} impares: ${sumarImpares(n)}`);
        } else {
          console.log(`termino fibonacci en la posicion ${n}: ${fibonacci(n)}`);
        }
        break;
      }

      case "4":
        console.log("programa finalizado");
        break;

      default:
        console.log("opcion no valida");
    }
  } while (opcion !== "4");

  rl.close();
}

main();
