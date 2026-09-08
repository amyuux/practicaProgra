const fecha = new Date();
const h = fecha.getHours().toString().padStart(2, '0');
const m = fecha.getMinutes().toString().padStart(2, '0');
const s = fecha.getSeconds().toString().padStart(2, '0');

console.log(`Hora actual: ${h}:${m}:${s}`);