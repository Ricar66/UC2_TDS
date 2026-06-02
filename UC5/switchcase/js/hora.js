const frm = document.querySelector("form")
const resp = document.querySelector("h3")

function resposta(){
    const hora = Number(frm.inHoraBrasil.value)

    let horaFranca = hora + 5

    if(horaFranca > 24) horaFranca = horaFranca - 24


    
  resp.innerText = `Hora na França ${horaFranca.toFixed(2)}`
    


}