const frm = document.querySelector("form");
const res = document.querySelector("h3");


frm.addEventListener("submit", (e) => {
     const valor = Number(frm.inValor.value) * 2
     const resto = Math.floor(valor) 


    res.innerText = `O medicamneto é ${frm.inProduto.value} o valor dele com desconto é ${resto}`

    e.preventDefault();
});