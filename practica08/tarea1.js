
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

// creamos la interfaz para ingresar datos
const rl = readline.createInterface({ input, output });

// convertimos una calificacion numerica en una letra
function obtenerLetra(calificacion) {
  if (calificacion >= 90) return "A";
  if (calificacion >= 80) return "B";
  if (calificacion >= 70) return "C";
  if (calificacion >= 60) return "D";
  return "F";
}

// calculamos el promedio de las calificaciones
function calcularPromedio(calificaciones) {
  let suma = 0;

  for (const calificacion of calificaciones) {
    suma += calificacion;
  }

  return suma / calificaciones.length;
}

async function main() {
  // solicitamos la cantidad de calificaciones
  let cantidad = Number(
    await rl.question("cuantas calificaciones desea ingresar: ")
  );

  while (!Number.isInteger(cantidad) || cantidad <= 0) {
    console.log("ingrese una cantidad entera mayor a cero");
    cantidad = Number(await rl.question("cantidad de calificaciones: "));
  }

  const calificaciones = [];

  // ingresamos y validamos cada calificacion
  for (let i = 0; i < cantidad; i++) {
    let nota = Number(
      await rl.question(`ingrese la calificacion ${i + 1} (0-100): `)
    );

    while (!Number.isFinite(nota) || nota < 0 || nota > 100) {
      console.log("la calificacion debe estar entre 0 y 100");
      nota = Number(await rl.question("ingrese nuevamente la calificacion: "));
    }

    calificaciones.push(nota);
  }

  // mostramos cada calificacion y su letra
  console.log("\n===== resultados =====");

  for (const nota of calificaciones) {
    console.log(`calificacion: ${nota} - letra: ${obtenerLetra(nota)}`);
  }

  // calculamos y mostramos el promedio
  const promedio = calcularPromedio(calificaciones);

  console.log(`promedio: ${promedio.toFixed(2)}`);
  console.log(`letra del promedio: ${obtenerLetra(promedio)}`);

  rl.close();
}

main();
