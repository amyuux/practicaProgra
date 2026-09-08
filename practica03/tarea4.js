const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Ingrese el nombre del candidato: ", (nombre) => {
  rl.question("Ingrese la edad: ", (edadStr) => {
    rl.question("Ingrese los años de experiencia: ", (expStr) => {

      const edad = parseInt(edadStr);
      const experiencia = parseInt(expStr);

      // Evaluación con operador lógico AND (&&)
      if (edad > 18 && experiencia > 0) {
        console.log(`\nCandidato ${nombre}: Candidato válido`);
      } else {
        console.log(`\nCandidato ${nombre}: No cumple con los requisitos`);
      }

      rl.close();
    });
  });
});