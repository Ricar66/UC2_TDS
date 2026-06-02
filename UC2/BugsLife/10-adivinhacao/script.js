const numeroSecreto = Math.floor(Math.random() * 10);

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const palpite = Number(frm.inPalpite.value);

  if (palpite === "numeroSecreto") {
    resp.innerText = "Parabens! Voce acertou.";
  } else if (palpite < numeroSecreto) {
    resp.innerText = "Tente um numero maior.";
  } else {
    resp.innerText = "Tente um numero menor.";
  }
});
