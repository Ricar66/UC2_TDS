// <!-- Elaborar um programa para uma lan house de um aeroporto, o programa deve ler o valor de cada 
//    15 minutos de uso de um computador e o tempo de uso por um cliente em minutos.
//    Informe o valor a ser pago pelo cliente, sabendo que as frações extras de 15 minutos devem ser 
//    cobradas de forma integral.
//    Crie o arquivo lanhouse.html e lanhouse.js -->

const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit", (e) =>{
     const valor15Minutos = Number(frm.inMinutos.value) //pegando o valor a cada 15 minutos
     const  Tempo = Number(frm.inTempo.value) //pegando o valor que devera ser em minutos 
     
     const valorMinutos = Math.ceil(Tempo / 15) * valor15Minutos // descobrindo o valor das horas      

     resp.innerText = `O Tempo de uso é ${Tempo} minutos o valor a ser pago pelo cliente é R$:${valorMinutos} `


    e.preventDefault()
})