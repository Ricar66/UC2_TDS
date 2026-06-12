// d)Elaborar um programa que leia três lados e verifique se eles podem formar ou não
// um triangulo. Para formar um triangulo, um dos lados não pode ser maior que a soma
// dos outros dois.
// Caso possam formar um triangulo, exiba também qual o tipo do triangulo:
// Equilátero (3 lados iguais), Isósceles (2 lados iguais) e Escaleno (3 lados diferentes)
// Crie o arquivo triangulo.html
// Crie o arquivo triangulo.js
// Use o css existente.

let frm = document.querySelector("form");
let resp = document.getElementById("outSimNao");
let respTipo = document.getElementById("outTipo");

function resposta() {
  //Limpando o campo de resposta apos o clique do botao  
  resp.innerText = "";
  respTipo.innerText = "";

  // Pegando o valor das variaveis
  let A = Number(frm.inLadoA.value);
  let B = Number(frm.inLadoB.value);
  let C = Number(frm.inLadoC.value);

  if (A > B + C || B > A + C || C > A + B) {
    resp.innerText = "Não é um triângulo";
    frm.inLadoA.focus();
    return;
  } else {
    if (A == B && B == C) {
      respTipo.innerText = `Equilatero`;
    } else {
      if (A == B || A == C || B == C) {
        respTipo.innerText = `Isoceles`;
      } else {
        respTipo.innerText = `Escaleno`;
      }
    }
  }
}
