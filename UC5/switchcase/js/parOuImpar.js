const frm = document.querySelector("form")
const resp = document.querySelector("h3")


function resposta(){
    const numero = frm.inNumero.value
    
    // if(numero % 2 === 0){
    //     resp.innerText = `O numero é par`
    // }

    //   resp.innerText = `O Numero é impar `
    
    const imprOuPar = numero % 2 === 0 ? "Par" : "Impar"
    resp.innerText = `O numero é ${imprOuPar}` 
}