// Tarea 3: Simulador de cajero automático con menú

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldo = 1000;

function mostrarMenu() {
    console.log("==============================");
    console.log("       CAJERO AUTOMÁTICO      ");
    console.log("==============================");
    console.log("1. Consultar saldo");
    console.log("2. Retirar dinero");
    console.log("3. Depositar dinero");
    console.log("4. Salir");

    rl.question("Seleccione una opción (1-4): ", function(opcionInput) {
        let opcion = parseInt(opcionInput);

        switch (opcion) {
            case 1:
                console.log("\nSaldo actual: $" + saldo);
                mostrarMenu();
                break;

            case 2:
                rl.question("\nMonto a retirar: $", function(montoInput) {
                    let retiro = parseFloat(montoInput);

                    if (isNaN(retiro) || retiro <= 0) {
                        console.log("Error: El monto debe ser mayor a 0.");
                    } else if (retiro % 5 !== 0) {
                        console.log("Error: El monto debe ser múltiplo de $5.");
                    } else if (retiro > saldo) {
                        console.log("Error: Saldo insuficiente.");
                    } else {
                        saldo = saldo - retiro;
                        console.log("Retiro exitoso. Nuevo saldo: $" + saldo);
                    }
                    mostrarMenu();
                });
                break;

            case 3:
                rl.question("\nMonto a depositar: $", function(montoInput) {
                    let deposito = parseFloat(montoInput);

                    if (isNaN(deposito) || deposito <= 0) {
                        console.log("Error: El monto debe ser mayor a 0.");
                    } else if (deposito > 5000) {
                        console.log("Error: El depósito no puede exceder los $5000.");
                    } else {
                        saldo = saldo + deposito;
                        console.log("Depósito exitoso. Nuevo saldo: $" + saldo);
                    }
                    mostrarMenu();
                });
                break;

            case 4:
                console.log("\nGracias por usar el cajero");
                rl.close();
                break;

            default:
                console.log("\nOpción no válida");
                mostrarMenu();
                break;
        }
    });
}

// Iniciar el cajero
mostrarMenu();