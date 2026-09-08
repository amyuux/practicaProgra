const fecha = new Date();
const dia = fecha.getDate();
const mes = fecha.getMonth() + 1;
const anio = fecha.getFullYear();

console.log(`Fecha actual: ${dia}/${mes}/${anio}`);