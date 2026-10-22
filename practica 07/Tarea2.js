import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

// creamos la interfaz para leer datos
const rl = readline.createInterface({ input, output });

async function main() {
  // declaramos el saldo inicial y la opcion
  let saldo = 1000;
  let opcion;

  // repetimos el menu hasta que el usuario decida salir
  do {
    console.log("\n===== cajero automatico =====");
    console.log("1. consultar saldo");
    console.log("2. retirar dinero");
    console.log("3. depositar dinero");
    console.log("4. salir");

    opcion = await rl.question("seleccione una opcion: ");

    // ejecutamos la opcion seleccionada
    switch (opcion) {
      case "1":
        // mostramos el saldo actual
        console.log(`saldo actual: $${saldo.toFixed(2)}`);
        break;

      case "2": {
        // solicitamos la cantidad que desea retirar
        const retiro = Number(
          await rl.question("ingrese la cantidad a retirar: ")
        );

        // verificamos que el retiro sea valido
        if (!Number.isFinite(retiro) || retiro <= 0) {
          console.log("la cantidad debe ser mayor a cero");
        } else if (retiro > saldo) {
          console.log("saldo insuficiente");
        } else {
          // restamos el retiro al saldo
          saldo -= retiro;
          console.log(`retiro exitoso. saldo actual: $${saldo.toFixed(2)}`);
        }
        break;
      }

      case "3": {
        // solicitamos la cantidad que desea depositar
        const deposito = Number(
          await rl.question("ingrese la cantidad a depositar: ")
        );

        // verificamos que el deposito sea valido
        if (!Number.isFinite(deposito) || deposito <= 0) {
          console.log("el deposito debe ser mayor a cero");
        } else {
          // sumamos el deposito al saldo
          saldo += deposito;
          console.log(`deposito exitoso. saldo actual: $${saldo.toFixed(2)}`);
        }
        break;
      }

      case "4":
        // mostramos el mensaje de salida
        console.log("gracias por utilizar el cajero");
        break;

      default:
        // avisamos si la opcion no existe
        console.log("opcion no valida");
    }
  } while (opcion !== "4");

  // cerramos la interfaz
  rl.close();
}

main();
