const prompt = require('prompt-sync')(); // Importa a biblioteca prompt-sync para ler a entrada do usuário
const Numero1 = parseInt(prompt('Digite o primeiro número: '));
const Numero2 = parseInt(prompt('Digite o segundo número: '));
const Soma = Numero1 + Numero2;
console.log(`A soma de ${Numero1} e ${Numero2} é ${Soma}`);