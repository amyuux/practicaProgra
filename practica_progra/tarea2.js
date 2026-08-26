// Tarea 2: conversión de USD a diferentes monedas
let montoUsd = 100;
let tasaEuro = 0.92;
let tasaSvc = 8.75;
let tasaGtq = 7.80;
let conversionEuro = montoUsd * tasaEuro;
let conversionSvc = montoUsd * tasaSvc;
let conversionGtq = montoUsd * tasaGtq;
console.log('La conversión de ' + montoUsd + ' USD a Euro es: $' + conversionEuro.toFixed(2));
console.log('La conversión de ' + montoUsd + ' USD a SVC es: $' + conversionSvc.toFixed(2));
console.log('La conversión de ' + montoUsd + ' USD a GTQ es: $' + conversionGtq.toFixed(2));
