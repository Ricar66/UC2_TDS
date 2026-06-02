const frm = document.querySelector("form");
const respCm = document.querySelector("h3");
const respMm = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const metros = Number(frm.inMetros.value);

  const centimetros = metros * 10;
  const milimetros = metros * 1000;

  respCm.innerText = `${milimetros} milimetros`;
  respMm.innerText = `${centimetros} centimetros`;
});
