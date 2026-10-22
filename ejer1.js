// Tarea 1: Sistema de acceso bancario
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== SISTEMA DE ACCESO BANCARIO ===");
console.log("Tipos de tarjeta:\n1. Debito ($500)\n2. Credito ($1000)\n3. Premium ($2000)");

rl.question("Seleccione el tipo de tarjeta (1-3): ", function(tipoInput) {
    rl.question("Ingrese el monto a retirar: $", function(montoInput) {
        
        let tipoTarjeta = parseInt(tipoInput);
        let montoRetiro = parseFloat(montoInput);

        let limite = 0;
        let tarjetaValida = true;

        // Evaluacion del tipo de tarjeta con Switch
        switch (tipoTarjeta) {
            case 1:
                limite = 500;
                break;
            case 2:
                limite = 1000;
                break;
            case 3:
                limite = 2000;
                break;
            default:
                tarjetaValida = false;
                break;
        }

        // Validaciones con IF y ELSE IF

        if (!tarjetaValida) {
            console.log("Tarjeta no valida");
        } else if (montoRetiro > limite) {
            console.log("Limite excedido");
        } else if (montoRetiro % 10 !== 0 || montoRetiro <= 0) {
            console.log("El monto debe ser múltiplo de 10");
        } else {
            console.log("Retiro exitoso");
        }

        rl.close();
    });
});