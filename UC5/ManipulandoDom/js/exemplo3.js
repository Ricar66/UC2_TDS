const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const media = (parseFloat(frm.nota1.value) + parseFloat(frm.nota2.value)) / 2;

    resp.innerText = `A média entre ${frm.nota1.value} e ${frm.nota2.value} é ${media.toFixed(2)}`;

    e.preventDefault();
});


