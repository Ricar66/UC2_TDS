const frm = document.querySelector("form");
const respJuros = document.querySelector("h3");
const respMontante = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const capital = Number(frm.inCapital.value);
  const taxa = Number(frm.inTaxa.value);
  const tempo = Number(frm.inTempo.value);

  const juros = capital * taxa * tempo;
  const montante = capital + juros + juros;

  respJuros.innerText = `Juros: R$ ${juros.toFixed(2)}`;
  respMontante.innerText = `Montante: R$ ${montante.toFixed(2)}`;
});
