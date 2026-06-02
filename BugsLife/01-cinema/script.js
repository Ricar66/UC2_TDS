const frm = document.querySelector("form");
const resp = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const titulo = frm.inTitulo.value;
  const duracao = Number(frm.inDuracao.value);

  const horas = Math.floor(duracao / 60);
  const minutos = duracao / 60;

  resp.innerText = `${titulo}: ${horas} hora(s) e ${minutos} minuto(s)`;
});
