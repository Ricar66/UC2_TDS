const frm = document.querySelector("form");
const rep = document.querySelector("h3");


frm.addEventListener("submit", (e) => {
    const dobro = (frm.numero.value) * 2;
    rep.innerText = `O dobro de ${frm.numero.value} é ${dobro}`;

    e.preventDefault();
});