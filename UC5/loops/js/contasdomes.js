const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")


let numeroContas = 0; //declara e inicializa o contador
let valorTotal = 0;  // declara e inicializa o contador 
let resposta = "";  //string com a resposta a ser exibida

function contas(){
    const descicao = frm.inDescricao.value
    const valor = Number(frm.inValor.value)

    numeroContas++;
    valorTotal += valor


    resposta += `${descicao} R$: ${valor.toFixed(2)} \n`
    
    resp1.innerText = `${resposta}----------------------------`
    resp2.innerText = `${numeroContas} Conta(s) - Total R$: ${valorTotal.toFixed(2)}`

    frm.inDescricao.value = "";
    frm.inValor.value = "";
    frm.inDescricao.focus();
}