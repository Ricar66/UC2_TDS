const frm = document.querySelector("form");
const res = document.querySelector("h3");


frm.addEventListener("submit", (e) => {
    const descricao = frm.inDescricao.value;
    const preco = Number(frm.inPreco.value);
                                            
    const valorTotal =((preco * 3) - (preco * 0.5).toFixed(2)); // Calcula o valor com desconto para 3 unidades
    res.innerText = `Promoção: ${descricao} - o valor total dos itens é R$ ${valorTotal.toFixed(2)}. O 3 item custa R$ ${(preco * 0.5).toFixed(2)}.`;
    e.preventDefault();});

    