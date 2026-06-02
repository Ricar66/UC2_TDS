const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const produto = frm.inProduto.value;
  const preco = Number(frm.inPreco.value);

  const total = preco * 2;

  resp1.innerText = `${produto} - Promocao: leve 3 unidades`;
  resp1.innerText = `O terceiro produto sai por 50%. Total: R$ ${total.toFixed(2)}`;
});
