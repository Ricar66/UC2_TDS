const frm = document.querySelector("frm")
const resp = document.querySelector("h3")


function Numero(){

    const num = Number(frm.inNumero.value)
    let estrelas = "";

    for(let i = 1; i <= num; i++){
        if(i % 2 == 1){
            estrelas += "*"
        }else{
            estrelas += "_"
        }
    }

    resp.innerText = estelas; 
}