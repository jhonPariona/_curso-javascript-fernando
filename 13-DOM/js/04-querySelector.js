/* -------------------------------------------------------------------------- */
/*                               query selector                               */
/* -------------------------------------------------------------------------- */

/* ----- solo devuelve un elemento y podemos usar los selcctores de css ----- */
const card = document.querySelector(
  ".card"
); /* solo retorn el primero que encuentre con la clase */
console.log("card", card);
const contenido = document.querySelector(".premium .info");
console.log("contenido", contenido);

const segundocard = document.querySelector(
  "section.hospedaje .card:nth-child(2"
);
console.log("segundocard", segundocard);

const formulario = document.querySelector("#formulario");
console.log("formulario", formulario); /* id */

const elemento = document.querySelector("nav"); /* por etiqueta */
console.log("elemento", elemento);

/* ---------------------------- querySelectorAll ---------------------------- */

/* ---- retorna un nodeList con todos los elementos que coinciden ---- */
const cardAll = document.querySelectorAll(".card");
console.log("cardAll", cardAll);
