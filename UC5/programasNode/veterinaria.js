const prompt = require('prompt-sync')();

const valorEmKilos = Number(prompt('Digite o valor em kg: '));
const valorEmGrmas = Number(prompt('Digite o valor em gramas: '));

const ValorEmQuilosConvertido = valorEmKilos * 1000;

const diasDuracaoRacao = Math.floor(ValorEmQuilosConvertido/valorEmGrmas)
const resto = ValorEmQuilosConvertido % valorEmGrmas

console.log(`A ração ira durar ${diasDuracaoRacao.toFixed(0)} dias. Sobrara do saco ${resto}`)