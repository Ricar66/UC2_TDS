// c) Elaborar um programa para simular um parquimetro, o qual leia o valor de moedas
// depositado em um terminal de estacionamento rotativo. O programa deve informar o
// tempo de permanência do veículo no local e o troco (se existir).
// Se o valor for inferior ao tempo mínimo, exiba a mensagem: "Valor insuficiente".
// Considere os seguintes valores/tempos abaixo: (o máximo é 120 min).
// Valor R$  |  Tempo (min)
// 1,00     |    30
// 1,75     |    60
// 3,00     |    120

const frm = document.querySelector("form");
const resp = document.getElementById("outTempo");
const tep = document.getElementById("outTroco");

let tempo;
let valorFinal;

function resposta() {

  const valorPago = Number(frm.inValor.value);
  if (valorPago >= 3) {
    tempo = 120;
    valorFinal = valorPago - 3;
  } else if (valorPago >= 1.75) {
    tempo = 60;
    valorFinal = valorPago - 1.75;
  } else {
    tempo = 30;
    valorFinal = valorPago - 1;
  }
  if (valorPago < 1) {
    resp.innerText = "Valor insuficiente";
    tep.innerText = "";
    return;
  }
  debugger;
  resp.innerText = `Tempo: ${tempo} minutos`;
  tep.innerText = `Troco: R$ ${valorFinal.toFixed(2)}`;
}
