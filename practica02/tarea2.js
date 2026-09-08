const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Ingrese el nombre del producto: ", (producto) => {
  rl.question("Ingrese el precio unitario: ", (precioStr) => {
    rl.question("Ingrese la cantidad: ", (cantidadStr) => {
      
      // Convertir entradas de texto a números
      const precio = parseFloat(precioStr);
      const cantidad = parseInt(cantidadStr);
      
      // Transformaciones de texto
      const nombreMayus = producto.toUpperCase();
      const primerasTres = producto.slice(0, 3);
      
      // calculo y formateo numérico con 2 decimales
      const precioTotal = precio * cantidad;
      const totalFormateado = precioTotal.toFixed(2);

      // Mostrar resultados
      console.log(`\n--- RESUMEN DE PRODUCTO ---`);
      console.log(`Producto (Mayúsculas): ${nombreMayus}`);
      console.log(`Primeras 3 letras: ${primerasTres}`);
      console.log(`Precio Total: $${totalFormateado}`);

      rl.close();
    });
  });
});