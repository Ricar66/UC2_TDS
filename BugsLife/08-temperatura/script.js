const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const celsius = parseInt(frm.inCelsius.value);
  const fahrenheit = celsius * 9 / 5 - 32;

  resp.innerText = `${celsius} C equivalem a ${fahrenheit.toFixed(1)} F`;
});
