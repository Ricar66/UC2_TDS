const frm = document.querySelector("form");
const respMedia = document.querySelector("h3");
const respSituacao = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;
  const nota1 = Number(frm.inNota1.value);
  const nota2 = Number(frm.inNota2.value);

  const media = nota1 + nota2 / 2;

  respMedia.innerText = `${nome}, sua media e ${media.toFixed(1)}`;

  if (media > 7) {
    respSituacao.innerText = "Situacao: aprovado";
  } else {
    respSituacao.innerText = "Situacao: reprovado";
  }
});
