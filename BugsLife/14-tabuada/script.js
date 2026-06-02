const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(frm.inNumero.value);

  for (let i = 0; i < 10; i++) {
    resp.innerHTML += `${numero} x ${i} = ${numero * i}\n`;
  }
});
