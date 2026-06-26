// c) Elaborar um programa que leia um número e verifique se ele é ou não perfeito. Número
// perfeito é quele que é igual a soma dos seus divisores inteiros (exceto o próprio número)
// O programa dee exibir os divisores do número e a soma deles.
// (Use estruturas de repetição e acumuladores).

const frm = document.querySelector("form");
const resp1 = document.querySelector("#outDivisores");
const resp2 = document.querySelector("#outResposta");
 
frm.addEventListener("submit", (e) => {
    e.preventDefault();
 
    const numero = Number(frm.inNumero.value);
 
    // como 1 é divisor universal, já iniciamos com ele
    let divisores = `Divisores do ${numero} :1`;
    let soma = 1;
 
    // percorrer os possiveis divisores e acumular
    for (let i = 2; i <= numero / 2; i++) {
        if (numero % i == 0) {
            divisores += `, ${i}`;   // virgula + i (evita ultima virgula)
            soma += i;
        }
    }
    divisores += ` (Soma: ${soma}) `;
 
    // altera o conteúdo de outDivisores
    resp1.innerText = divisores;
 
    // verifica se é perfeito  exibe resposta na tag outResposta (resp2)
    if (numero == soma) {
        resp2.innerText = `${numero} É um Número Perfeito`;
    } else {
        resp2.innerText = `${numero} Não É um Número Perfeito`;
    }
 
})