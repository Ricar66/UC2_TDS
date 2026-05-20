const frm = document.querySelector("form");
const res = document.querySelector("h3");

const numeroSecreto = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numero = Number(frm.inNumero.value);
  
  console.log(`Número secreto: ${numeroSecreto}`); // Exibe o número secreto no console para fins de teste
  
  res.innerText = "";
  
    if (numero === numeroSecreto) {
      res.innerText = `Parabéns! Você acertou o número secreto: ${numeroSecreto}`;
    } else if (numero < numeroSecreto) {
      res.innerText = "O número secreto é maior. Tente novamente!";
    } else if (numero > numeroSecreto) {
      res.innerText = "O número secreto é menor. Tente novamente!";
    }


  tempoMensagem = setTimeout(() => {
    res.innerText = "";
    frm.inNumero.value = "";

  }, 2000.);

});
