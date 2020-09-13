/* -------------------------------------------------------------------------- */
/*                            Seleccionar por clase                           */
/* -------------------------------------------------------------------------- */
const header = document.getElementsByClassName("header");
console.log(header);

const contenedores = document.getElementsByClassName("contenedor");
console.log("contenedores", contenedores); /* retorn varios */

/* ------------------------------ si no existe ------------------------------ */
const noexiste = document.getElementsByClassName("no-existe");
console.log("noexiste", noexiste); /* retorna un htmlcollection vacio */
