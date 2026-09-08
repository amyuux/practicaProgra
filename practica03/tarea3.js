const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Ingrese el monto total de la compra: ", (montoStr) => {
  const montoOriginal = parseFloat(montoStr);
  let PorcentajeDescuento = 0;

  // Evaluar porcentaje aplicable según el monto
  if (montoOriginal > 100) {
    PorcentajeDescuento = 0.15; // 15%
  } else if (montoOriginal > 50) {
    PorcentajeDescuento = 0.10; // 10%
  } else {
    PorcentajeDescuento = 0;    // Sin descuento
  }

  // Cálculos de descuento y total final
  const descuentoAplicado = montoOriginal * PorcentajeDescuento;
  const totalAPagar = montoOriginal - descuentoAplicado;

  // Salida descriptiva formateada a 2 decimales
  console.log(`\n--- RESUMEN DE COMPRA ---`);
  console.log(`Monto original: $${montoOriginal.toFixed(2)}`);
  console.log(`Descuento aplicado: $${descuentoAplicado.toFixed(2)} (${PorcentajeDescuento * 100}%)`);
  console.log(`Total a pagar: $${totalAPagar.toFixed(2)}`);

  rl.close();
});