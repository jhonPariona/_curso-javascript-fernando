/* -------------------------------------------------------------------------- */
/*                                    hijo                                    */
/* -------------------------------------------------------------------------- */
const navegacion = document.querySelector(".navegacion");
console.log("navegacion", navegacion);

const hijosConEspacios = navegacion.childNodes;
console.log(
  "hijosConEspacios",
  hijosConEspacios
); /* Los espacios en blanco son considerados elementos retorna un nodeList*/

const hijosSinEspacios = navegacion.children;
console.log("hijosSinEspacios", hijosSinEspacios); /* retorna html collection */

/* ------------------------- obtener el primer hijo ------------------------- */
const firstHijo = navegacion.firstElementChild;
console.log("firstHijo", firstHijo);

/* --------------------------- obtener ultimo hijo -------------------------- */
const ultimoHijo = navegacion.lastElementChild;
console.log("ultimoHijo", ultimoHijo);

const card = document.querySelector(".card");
const hijosCard = card.children;
console.log("hijosCard", hijosCard); /* listar los hijos */
const traversing = card.children[1].children[1].textContent;
console.log("traversing", traversing); /* recorrer los hijos */

/* -------------------------------------------------------------------------- */
/*                                   padres                                   */
/* -------------------------------------------------------------------------- */
const padre = card.parentNode; /* toma en cuenta el espacio blanco */
console.log("padre", padre);
const padreSinEspacio = card.parentElement.parentElement.parentElement;
console.log("padreSinEspacio", padreSinEspacio);

/* -------------------------------------------------------------------------- */
/*                                   hermano                                  */
/* -------------------------------------------------------------------------- */
// siguiente
const hermano = card.nextElementSibling.nextElementSibling;
console.log("hermano", hermano);
// anterior
const ultimoCard = document.querySelector(".card:last-child");
console.log("ultimoCard", ultimoCard);
const anteriorHermano = ultimoCard.previousElementSibling;
console.log("anteriorHermano", anteriorHermano);
