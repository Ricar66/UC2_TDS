const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// function numero() {
//   const num = Number(frm.inNumero.value);

//   let numDivisisores = 0;

//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       numDivisisores++;
//     } else {
//       if (numDivisisores == 2) {
//         resp.innerText = `${num} é primo`;
//         break;
//       } else {
//         resp.innerText = `${num} não é primo`;
//         debugger;
//       }
//     }
//   }
// }
function numero() {
  const num = Number(frm.inNumero.value);

  let primo = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      primo = false;
      break;
    }
  }

  resp.innerText = primo
    ? `${num} é primo`
    : `${num} não é primo`;
}