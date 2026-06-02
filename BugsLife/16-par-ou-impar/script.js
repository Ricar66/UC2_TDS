const frm = document.querySelector("form");
const resp = document.querySelector("h3");
const respDobro = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = frm.inNumero.value;
  const dobro = numero * 2;

  if (numero % 2 === 0) {
    resp.innerText = `${numero} e par`;
  } else {
    resp.innerText = `${numero} e impar`;
  }

  respDobro.innerText = `Dobro: ${dobro}`;
});
