const frm = document.querySelector("form")
const resp1 = document.querySelector("img")
const resp2 = document.querySelector("h3")

console.log("Criada as referencias")

frm.addEventListener("submit", (e) => {
     e.preventDefault();
    //Pegando o valor do nome
    let nome = frm.inNome.value 
    
    //pegando a altura 
    const altura = Number(frm.inAltura.value)
    //Pegando o sexo Selecionado
    const sexoMasculino = frm.inMasculino.checked

     const sexo = sexoMasculino ? 22 * (altura * 2) : 21 * (altura * 2)
     resp2.innerText =`Ola ${nome} seu peso Ideal é ${sexo.toFixed(2)}`

     resp2.style.transition = "opacity 2s ease"

      esmaecerTexto = setTimeout(() => {
    resp2.style.opacity = "0"
}, 10000)

})


// frm.addEventListener("reset", () => {
//     resp2.innerText = ""
// })

