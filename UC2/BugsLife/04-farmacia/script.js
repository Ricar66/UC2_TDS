const frm = document.querySelector("form");
const respMedicamento = document.querySelector("h3");
const respPromocao = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const medicamento = frm.inMedicamento.value;
  const preco = Number(frm.inPreco.value);

  const promocao = Math.ceil(preco);

  respMedicamento.innerText = `Promocao de ${medicamento}`;
  respPromocao.innerText = `Leve 2 por apenas R$ ${promocao.toFixed(2)}`;
});
