const frm = document.querySelector("form");
const res = document.querySelector("h3");


frm.addEventListener("submit", (e) => {
    const converteMinutosEmHoras = Math.floor(frm.Minutos.value / 60);
    const resto = frm.Minutos.value % 60;
  
    res.innerText = `Seu Nome é ${frm.nome.value} 
    Voce assistira ${frm.filme.value} 
    O filme tem ${Math.round(converteMinutosEmHoras)} horas e ${Math.round(resto)} minutos.`;

    e.preventDefault();});