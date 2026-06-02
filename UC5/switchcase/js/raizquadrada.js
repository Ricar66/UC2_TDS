const frm = document.querySelector("form")
const resp = document.querySelector("h3")


function resposta(){
    const numero = Number(frm.inNumero.value)
    const resultado = Math.sqrt(numero) // calculando a raiz
    

    //Verificando se o numero é inteiro
    if(Number.isInteger(resultado)){
        resp.innerText = `Parabens o numero tem raiz quadrada exata ${resultado}`
    }else{
        resp.innerText = `O numero nao é raiz quadrada exata`
    }

}