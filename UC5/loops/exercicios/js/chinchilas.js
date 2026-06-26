// <!-- b) Digamos que o número de chinchilas de uma fazenda triplica a cada ano, após o primeiro
// ano. Elaborar um programa que leia o número inicial de chinchilas e anos e informe ano a
// ano o número médio previsto de chinchilas da fazenda. O número inicial de chinchilas deve
// ser maior ou igual a 2 (um casal). -->

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

function anos() {
  let chinchilas = Number(frm.inValor.value);
  const anos = Number(frm.inAno.value);

  if (chinchilas < 2) {
    resp.innerText = "O número de chinchilas deve ser maior ou igual a 2";
    return;
  }

  let numeroAno = "";

  for (let i = 1; i <= anos; i++) {
    numeroAno += `Ano ${i}: ${chinchilas} chinchilas\n`;
    chinchilas *= 3;
  }

  resp.innerText = numeroAno;
}
