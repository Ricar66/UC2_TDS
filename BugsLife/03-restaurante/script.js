const frm = document.querySelector("form");
const resp = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const precoKg = Number(frm.inPrecoKg.value);
  const gramas = Number(frm.inGramas.value);

  const valor = precoKg * gramas;

  resp.innerText = `Valor a pagar: R$ ${valor.toFixed(2)}`;
});
