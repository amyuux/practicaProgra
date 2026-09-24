// Tarea 2: Clasificador de números con múltiples condiciones
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("== CLASIFICADOR DE NÚMEROS ==");

rl.question("Ingrese el primer número (a): ", function(num1) {
    rl.question("Ingrese el segundo número (b): ", function(num2) {
        rl.question("Ingrese el tercer número (c): ", function(num3) {

            let a = parseFloat(num1);
            let b = parseFloat(num2);
            let c = parseFloat(num3);

            console.log("resultados");

            // Evaluación de igualdad entre los nuumeros
            if (a === b && b === c) {
                console.log("Los tres números son iguales");
            } else if (a !== b && a !== c && b !== c) {
                console.log("Los tres números son diferentes");
            } else {
                console.log("Hay dos números iguales");
            }

            // calculo de mayor y menor
            let mayor = a;
            let menor = a;

            if (b > mayor) mayor = b;
            if (c > mayor) mayor = c;

            if (b < menor) menor = b;
            if (c < menor) menor = c;

            console.log("El número mayor es: " + mayor);
            console.log("El número menor es: " + menor);

            // Verificación de números negativos

            if (a < 0 || b < 0 || c < 0) {
                console.log("hay numeros negativos");
            }

            rl.close();
        });
    });
});