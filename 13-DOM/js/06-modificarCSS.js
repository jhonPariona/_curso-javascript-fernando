/* ------------------------------- cambiar css ------------------------------ */
const encabezado = document.querySelector("h1");
console.log(encabezado.style);

encabezado.style.backgroundColor = "red";

/* ---------------------------- agregando clases ---------------------------- */
const card = document.querySelector(".card");
card.classList.add("nueva-clase");
card.classList.remove("nueva-clase");
console.log("card", card);
