
// creamos un arreglo con cuatro productos
const inventario = [
  { nombre: "laptop", precio: 650, cantidad: 3 },
  { nombre: "mouse", precio: 15, cantidad: 10 },
  { nombre: "teclado", precio: 25, cantidad: 5 },
  { nombre: "monitor", precio: 180, cantidad: 4 }
];

let totalProductos = 0;
let valorTotalInventario = 0;

console.log("===== inventario de productos =====");

// recorremos cada producto del arreglo con for...of
for (const producto of inventario) {
  // calculamos el valor total de cada producto
  const valorTotal = producto.precio * producto.cantidad;

  // mostramos los datos del producto
  console.log(`nombre: ${producto.nombre}`);
  console.log(`precio: $${producto.precio.toFixed(2)}`);
  console.log(`cantidad: ${producto.cantidad}`);
  console.log(`valor total: $${valorTotal.toFixed(2)}`);
  console.log("-------------------------");

  // acumulamos la cantidad y el valor de los productos
  totalProductos += producto.cantidad;
  valorTotalInventario += valorTotal;
}

// creamos un objeto con el resumen del inventario
const resumen = {
  totalProductos: totalProductos,
  valorTotalInventario: valorTotalInventario
};

console.log("===== resumen del inventario =====");

// recorremos las propiedades del resumen con for...in
for (const propiedad in resumen) {
  // mostramos el nombre y el valor de cada propiedad
  console.log(`${propiedad}: ${resumen[propiedad]}`);
}
