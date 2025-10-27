const form = document.getElementById("formContato");
const msg = document.getElementById("msgSucesso");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.classList.remove("oculto");
  form.reset();
});
