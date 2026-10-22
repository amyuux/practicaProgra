
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

// creamos la interfaz para ingresar datos
const rl = readline.createInterface({ input, output });

// funciones para calcular el area y perimetro del circulo
function calcularAreaCirculo(radio) {
  return Math.PI * radio * radio;
}

function calcularPerimetroCirculo(radio) {
  return 2 * Math.PI * radio;
}

// funciones para calcular el area y perimetro del cuadrado
function calcularAreaCuadrado(lado) {
  return lado * lado;
}

function calcularPerimetroCuadrado(lado) {
  return 4 * lado;
}

// funciones para calcular el area y perimetro del rectangulo
function calcularAreaRectangulo(base, altura) {
  return base * altura;
}

function calcularPerimetroRectangulo(base, altura) {
  return 2 * (base + altura);
}

// funciones para calcular el area y perimetro del triangulo
function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function calcularPerimetroTriangulo(a, b, c) {
  return a + b + c;
}

// solicitamos un numero positivo
async function pedirNumero(mensaje) {
  let numero = Number(await rl.question(mensaje));

  while (!Number.isFinite(numero) || numero <= 0) {
    console.log("ingrese un numero mayor a cero");
    numero = Number(await rl.question(mensaje));
  }

  return numero;
}

async function main() {
  let opcion;

  // mostramos el menu hasta que el usuario decida salir
  do {
    console.log("\n===== figuras geometricas =====");
    console.log("1. circulo");
    console.log("2. cuadrado");
    console.log("3. rectangulo");
    console.log("4. triangulo");
    console.log("5. salir");

    opcion = await rl.question("seleccione una figura: ");

    // calculamos segun la figura seleccionada
    switch (opcion) {
      case "1": {
        const radio = await pedirNumero("ingrese el radio: ");

        console.log(`area: ${calcularAreaCirculo(radio).toFixed(2)}`);
        console.log(`perimetro: ${calcularPerimetroCirculo(radio).toFixed(2)}`);
        break;
      }

      case "2": {
        const lado = await pedirNumero("ingrese el lado: ");

        console.log(`area: ${calcularAreaCuadrado(lado).toFixed(2)}`);
        console.log(`perimetro: ${calcularPerimetroCuadrado(lado).toFixed(2)}`);
        break;
      }

      case "3": {
        const base = await pedirNumero("ingrese la base: ");
        const altura = await pedirNumero("ingrese la altura: ");

        console.log(`area: ${calcularAreaRectangulo(base, altura).toFixed(2)}`);
        console.log(
          `perimetro: ${calcularPerimetroRectangulo(base, altura).toFixed(2)}`
        );
        break;
      }

      case "4": {
        const a = await pedirNumero("ingrese el primer lado: ");
        const b = await pedirNumero("ingrese el segundo lado: ");
        const c = await pedirNumero("ingrese el tercer lado: ");

        // verificamos que los lados formen un triangulo
        if (a + b <= c || a + c <= b || b + c <= a) {
          console.log("las medidas no forman un triangulo valido");
          break;
        }

        const altura = await pedirNumero("ingrese la altura correspondiente a la base: ");

        console.log(`area: ${calcularAreaTriangulo(a, altura).toFixed(2)}`);
        console.log(`perimetro: ${calcularPerimetroTriangulo(a, b, c).toFixed(2)}`);
        break;
      }

      case "5":
        console.log("programa finalizado");
        break;

      default:
        console.log("opcion no valida");
    }
  } while (opcion !== "5");

  // cerramos la interfaz
  rl.close();
}

main();
