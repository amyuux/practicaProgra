
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

// contamos las vocales de una cadena
function contarVocales(cadena) {
  // caso base
  if (cadena.length === 0) {
    return 0;
  }

  // verificamos la primera letra
  const primera = cadena[0].toLowerCase();
  const esVocal = "aeiou".includes(primera) ? 1 : 0;

  // llamada recursiva
  return esVocal + contarVocales(cadena.slice(1));
}

// invertimos una cadena
function invertirCadena(cadena) {
  // caso base
  if (cadena.length <= 1) {
    return cadena;
  }

  // llamada recursiva
  return invertirCadena(cadena.slice(1)) + cadena[0];
}

// verificamos si una cadena es palindromo
function esPalindromo(cadena) {
  // limpiamos espacios y convertimos a minusculas
  const texto = cadena.toLowerCase().replace(/[^a-z0-9]/g, "");

  // llamamos a la funcion recursiva auxiliar
  return verificarPalindromo(texto);
}

function verificarPalindromo(texto) {
  // caso base
  if (texto.length <= 1) {
    return true;
  }

  // si los extremos son diferentes no es palindromo
  if (texto[0] !== texto[texto.length - 1]) {
    return false;
  }

  // llamada recursiva quitando los extremos
  return verificarPalindromo(texto.slice(1, -1));
}

async function main() {
  // solicitamos una palabra o frase
  const cadena = await rl.question("ingrese una palabra o frase: ");

  // mostramos los resultados
  console.log(`cantidad de vocales: ${contarVocales(cadena)}`);
  console.log(`cadena invertida: ${invertirCadena(cadena)}`);

  if (esPalindromo(cadena)) {
    console.log("la cadena es un palindromo");
  } else {
    console.log("la cadena no es un palindromo");
  }

  rl.close();
}

main();
