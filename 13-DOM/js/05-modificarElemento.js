/* ---------------------------- acceder al texto ---------------------------- */
const card = document.querySelector(".contenido-hero h1");
console.log("card", card);

const noEncuentraHidden = card.innerText;
console.log("noEncuentraHidden", noEncuentraHidden);
const siEncuentraSiEstaHiden = card.textContent;
console.log("siEncuentraSiEstaHiden", siEncuentraSiEstaHiden);
const traeHtml = card.innerHTML;
console.log("traeHtml", traeHtml);

card.innerText = "nuevo con inner text";
card.textContent = "nuevo con text content";
card.innerHTML = "nuevo con inner html";

/* ----------------------- acceder a src de la imagen ----------------------- */
const imagen = document.querySelector(".card img");
imagen.src = "img/hacer2.jpg";
