const frm = document.querySelector("form");
const respModelo = document.querySelector("h3");
const respPagamento = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const modelo = frm.inModelo.value;
  const preco = Number(frm.inPreco.value);

  const entrada = preco / 5;
  const parcela = preco / 12;

  respModelo.innerText = `Promocao: ${modelo}`;
  respPagamento.innerText = `Entrada de R$ ${entrada.toFixed(2)} + 12x de R$ ${parcela.toFixed(2)}`;
});
