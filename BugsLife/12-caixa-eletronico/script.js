const frm = document.querySelector("form");
const resp100 = document.querySelector("h3");
const resp50 = document.querySelector("h4");
const resp10 = document.querySelector("h5");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = Number(frm.inValor.value);

  const notas100 = Math.round(valor / 100);
  let resto = valor % 100;

  const notas50 = Math.round(resto / 50);
  resto = resto % 50;

  const notas10 = Math.round(resto / 10);

  resp100.innerText = `Notas de R$ 100: ${(notas100)}`;
  resp50.innerText = `Notas de R$ 50: ${(notas50)}`;
  resp10.innerText = `Notas de R$ 10: ${(notas10)}`;
});
