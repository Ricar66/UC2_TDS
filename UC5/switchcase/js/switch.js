const frm = document.querySelector("form")
const resp = document.querySelector("h3")

console.log("Chegando ate aqui ")



function resposta(){
    let opcaoMenu =frm.inMenu.selectedIndex

    switch(opcaoMenu){
        case 1 :
           resp.innerText = `Voce escolheu o sistema Contas a Pagar`
           break;
        case 2 :
           resp.innerText = `Voce escolheu o sistema Contas a Receber`
           break;
        case 3 :
           resp.innerText = `Voce escolheu o sistema Contole de Estoque`
           break;
        case 4 :
           resp.innerText = `Voce escolheu o sistema Relatorio`
           break;
        case 5 :
           resp.innerText = `Voce escolheu o sistema backup`
           break;
         
    }
 
}