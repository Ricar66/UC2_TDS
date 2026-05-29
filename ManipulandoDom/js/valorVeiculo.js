const frm = document.querySelector("form");
const res = document.querySelector("h3");
const res2 = document.querySelector("#valorEntrada");
const res3 = document.querySelector("#valorParcela");
const res4 = document.querySelector("#juros");

frm.addEventListener("submit", (e) => {

    const valorVeiculo = Number(frm.valorVeiculo.value);

    // valor base das parcelas
    const valorParcela = valorVeiculo * 0.5 / 12;

    // entrada de 50%
    const valorEntrada = valorVeiculo * 0.5;

    // variável para acumular o total com juros
    // ela precisa ficar FORA do for
    let valorTotal = 0;

    res.innerText = `Valor total do veículo: R$ ${valorVeiculo.toFixed(2)}`;
    res2.innerText = `Valor da entrada: R$ ${valorEntrada.toFixed(2)}`;

    // limpa o conteúdo antes de adicionar novamente
    res3.innerHTML = "";

    for(let i = 1; i <= 12 ; i++) {

        let parcelaAtual = valorParcela;

        // 5% de juros
        let juros = 0.05;

        // juros acumulados conforme as parcelas aumentam
        let jurosAcumulados = juros * (i - 1);

        // adiciona juros na parcela
        parcelaAtual += parcelaAtual * jurosAcumulados;
        
        // soma cada parcela no valor total
        valorTotal += parcelaAtual;
         debugger;
        // exibe cada parcela
        res3.innerHTML += `Parcela ${i}: R$ ${parcelaAtual.toFixed(2)} <br>`;

       
    }

    // agora funciona porque valorTotal existe fora do for
    res4.innerText = `Total pago com juros: R$ ${valorTotal.toFixed(2)}`;

     
});