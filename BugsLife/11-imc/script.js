const frm = document.querySelector("form");
const respImc = document.querySelector("h3");
const respClassificacao = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const peso = Number(frm.inPeso.value);
  const altura = Number(frm.inAltura.value);

  const imc = peso / altura;

  respImc.innerText = `IMC: ${imc.toFixed(2)}`;

  if (imc < 18.5) {
    respClassificacao.innerText = "Classificacao: abaixo do peso";
  } else if (imc <= 24) {
    respClassificacao.innerText = "Classificacao: peso normal";
  } else {
    respClassificacao.innerText = "Classificacao: acima do peso";
  }
});
