// Instanciar el objeto Date para obtener fecha y hora del sistema
const ahora = new Date();

// Extraer día, mes (se suma +1 porque inicia en 0) y año
const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anio = ahora.getFullYear();

// extraer hora, minutos y segundos
const horas = ahora.getHours();
const minutos = ahora.getMinutes();
const segundos = ahora.getSeconds();

// Mostrar mensaje descriptivo
console.log(`Hoy es ${dia}/${mes}/${anio} y son las ${horas}:${minutos}:${segundos}`);