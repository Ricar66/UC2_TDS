const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = Number(frm.inValor.value);
  const tempo = Number(frm.inTempo.value);

  const periodos = Math.floor(tempo / 15);
  const total = valor * periodos;

  resp.innerText = `Valor a pagar: R$ ${periodos.toFixed(2)}`;
});
