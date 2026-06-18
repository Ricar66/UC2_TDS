const prompt = require('prompt-sync')();
console.log("Programa Anos de copa do mundo. Digite N para sair")
console.log("--------------------------------------------------")
let resp = ""

do{  

  const ano = Number(prompt("Ano: ")) //pedindo para o usuario digitar o Ano 
  if(resp === "n" || resp === "N"){
    break;
  }else if(ano === 1942 || ano === 1946){
    console.log(`Não houve Copa em ${ano} (Segunda guerra Mundial)`)
  }else if(ano >= 1930 && ano % 4 == 2){
    console.log(`Sim ${ano} é ano de copa do mundo`)
  }else{
    console.log(`Não....${ano} é ano de copa do mundo`)
  }
  resp = prompt("Deseja Continuar? S ou N --- ")   

}while(resp === "S" || resp === "s")