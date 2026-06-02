const prompt = require('prompt-sync')();

const valorVeiculo = parseFloat(prompt('Digite o valor do veículo: '));
const nomeVeiculo = prompt('Digite o nome do veículo: ');


const valorDaEntrada = valorVeiculo * 0.5;
const valorParcela = (valorVeiculo - valorDaEntrada) / 12;


for (let i = 1; i <= 12; i++) {
    console.log(`Parcela ${i}: R$ ${valorParcela.toFixed(2)}`);
}

console.log(`Veículo: ${nomeVeiculo}`);
console.log(`Valor do veículo: R$ ${valorVeiculo.toFixed(2)}`);
console.log(`Valor da entrada: R$ ${valorDaEntrada.toFixed(2)}`);
