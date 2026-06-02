const prompt = require('prompt-sync')();

const salario = parseFloat(prompt('Digite o salário do funcionário: '));
const anosTrabalhados = parseInt(prompt('Digite os anos trabalhados: '));


const salarioFinal = (Math.floor(anosTrabalhados / 4) * salario / 100 + salario)    ;


console.log(`O funcionário tem ${salarioFinal} final a receber a mais por conta dos quadrienios.`);