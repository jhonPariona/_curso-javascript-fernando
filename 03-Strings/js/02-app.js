const variable = "Monitor 20";
const precio = 20;

/* ---------------------- tamaño de la cadena de texto ---------------------- */
console.log(variable.length);

/* --------------------- sabr si se incluye una palabra --------------------- */
console.log(
  variable.indexOf("20")
); /* retorna el indice en q se encuentra la primera letra */

/* - saber si la palabra esta incluida retorn tru o fal y es case sensitive - */
console.log(variable.includes("monitor"));

/* ------------------------------- concatenar ------------------------------- */
console.log(variable.concat(precio));
console.log(variable + "tien " + precio);
console.log(variable, "tien ", precio);
console.log(`${variable} tien ${precio}`); /* template strings */

/* ---------------------------- eliminar spacios ---------------------------- */ const espacios =
  "                       holi                         ";
console.log("espacios", espacios);
console.log("eliminar del incio", espacios.trimStart());
console.log("eliminar del final", espacios.trimEnd());
console.log("eliminar de los dos lados", espacios.trim());

/* ------------------------------ remplazar ------------------------------ */
const remplazar = "monitor de 20 pulgadas";
console.log("remplazar", remplazar.replace("pulgadas", '"'));

/* --------------------------------- cortar --------------------------------- */
const cortar = "abcdefghi";
console.log("cortar", cortar.slice(0, 3)); /* [0,3> */
console.log("cortar", cortar.slice(3, 1)); /* no hace nada */
console.log("cortar", cortar.substring(0, 3)); /* [0,3> */
console.log(
  "cortar",
  cortar.substring(3, 1)
); /* [1,3> pasa el 1 como indice de incio y pasa 5 como candidad de caracteres a recortar */
console.log(
  "cortar",
  cortar.charAt(2)
); /* retorna un caracter del indice pasado*/

/* --------------------------------- repetir -------------------------------- */
const repetir = "texto";
console.log("repetir", repetir.repeat(5)); /* repite  5 veces*/
console.log("repetir", repetir.repeat(2.5)); /* repite  2 veces*/

/* -------------- sacar palabras dividiendolos por un caracter -------------- */
const split = "palabra otra y otra";
console.log("split", split.split(" "));

/* --------------------------------- conversion----------------------------- */
const minuscula = "MINUSCULA";
console.log("palabra", minuscula);
console.log("minuscula", minuscula.toLocaleLowerCase());
console.log("Mayuscula", minuscula.toUpperCase());

/* --------------------------- de numeros a string -------------------------- */
const numero = 100;
console.log("numero", numero);
console.log("numero", numero.toString());
