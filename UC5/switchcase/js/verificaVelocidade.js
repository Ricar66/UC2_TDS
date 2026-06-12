// b) Elaborar um programa que leia a velocidade permitida em uma estrada e a velocidade
// de um condutor. Se a velocidade for inferior ou igual à permitida, exiba "Sem Multa".
// Se a velocidade for de até 20% maior que a permitida, exiba "Multa Leve".
// E se a velocidade for superior a 20% da velocidade permitida, exiba "Multa Grave".
// Crie o arquivo verificavelocidade.html
// Crie o arquivo verificaVelocidade.js
// Use o css existente.

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

function resposta() {
  const velocidadeEstrada = Number(frm.inVelPermitida.value);
  const velocidadeCondutor = Number(frm.inVelCondutor.value);
  debugger;
  if (velocidadeCondutor <= velocidadeEstrada) {
    resp.innerText = `Sem multa`;
  } else {
    
    if (velocidadeCondutor <= velocidadeEstrada * 1.2 ) {
      resp.innerText = `Multa Leve`;
    } else {
      resp.innerText = `Multa Grave`;
   
    }
  }
}
