const frm = document.querySelector("form")
const resp = document.querySelector("pre")



function resposta(){
     let numero = Number(frm.inNumero.value)
     let resultado = ""

    for(let i = 0; i <= 10; i++){

        let tabuada = numero * i
        resultado += ` ${numero} X ${i} = ${tabuada} ||`;
         debugger;
    }

     resp.innerText = resultado

    
}