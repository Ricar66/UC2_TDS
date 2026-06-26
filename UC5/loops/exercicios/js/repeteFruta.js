// <!-- a) Elaborar um programa que leia o nome de uma fruta e um número. O programa deve repetir
// a exibição do nome da fruta, de acordo com o número informado. Utilize o * para separar 
// os nomes.
// Use o arquivo repetefruta.html
// Crie o arquivo repeteFruta.js
// Use a imagem exerc.jpg -->

const frm = document.querySelector("form")
const resp = document.querySelector("h3")


function frutas(){
    let nome = frm.inFruta.value
    let valor = Number(frm.inNumero.value)
    let resposta = ""

    for(let i = 1 ; i < valor; i++){

        resposta += ` ${nome} * `
        
        debugger
    }
     resp.innerText = `${resposta} ${nome}`
    
    

    
}