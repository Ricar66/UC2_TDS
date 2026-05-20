const frm = document.querySelector("form");
const res = document.querySelector("h3");



frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value); //Obtem o valor do quilo do prato
    const consumo = Number(frm.inConsumo.value); //Obtem o valor do consumo do cliente

    const valor = (quilo / 1000) * consumo; //Calcula o valor a ser pago

    res.innerText = `Valor a pagar: R$ ${valor.toFixed(2)}`; //Exibe o valor a ser pago com 2 casas decimais
    e.preventDefault();
});
