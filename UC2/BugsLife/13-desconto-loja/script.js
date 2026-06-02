const frm = document.querySelector("form");
const respDesconto = document.querySelector("h3");
const respFinal = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const produto = frm.inProduto.value;
  const preco = Number(frm.inPreco.value);
  const percentual = Number(frm.inPercentual.value);

  const desconto = preco * percentual;
  const precoFinal = preco;

  respDesconto.innerText = `${produto}: desconto de R$ ${desconto.toFixed(2)}`;
  respFinal.innerText = `Preco final: R$ ${precoFinal.toFixed(2)}`;
});
