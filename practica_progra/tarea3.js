// Tarea 3: cálculo del costo de electricidad con impuesto
let consumoKwh = 250;
let tarifaPorKwh = 0.15;
let porcentajeImpuesto = 0.10;
let costoSinImpuesto = consumoKwh * tarifaPorKwh;
let impuestoCalculado = costoSinImpuesto * porcentajeImpuesto;
let totalPagar = costoSinImpuesto + impuestoCalculado;
console.log('consumo: ' + consumoKwh + ' kWh');
console.log('costo sin impuesto: $' + costoSinImpuesto.toFixed(2));
console.log('impuesto: $' + impuestoCalculado.toFixed(2));
console.log('costo total a pagar: $' + totalPagar.toFixed(2));