// Constante que almacena el elemento con ID = "IMGrande" 
const IMGrande = document.getElementById("IMGrande");

// Constante que almacena el elemento con ID = "img"
let img = document.getElementById("img");

// Constantes que almacena los elementos de cerrar
const EquisCerrar = document.getElementById("EquisCerrar");

// Obtener todos los elementos con clase gallery_item
let gallery_Items = document.querySelectorAll(".gallery_item");

// Guardamos la posicion de la imagen a la que le damos click
let posicion = 0;

// Recorrer todos los elementos de la galería
gallery_Items.forEach((elemento, i) => {
    // Para cada elemento, agrega un evento click
    elemento.addEventListener("click", (e) => {
        // Encontrar la imagen dentro del div
        const imagen = elemento.querySelector('img');
        
        // Mostrar en el elemento imagen de IMGrande a la que se le da click
        posicion = i;
        IMGrande.style.display = "flex";
        img.src = imagen.src;

        console.log(posicion);
    });
});

// Se oculta la imagen grande al dar click sobre la x
EquisCerrar.addEventListener("click", (e) => {
    IMGrande.style.display = "none";
});

// Se oculta la imagen grande al dar click alrededor de ella
IMGrande.addEventListener("click", (e) => {
    if(e.target.classList.contains("IMGrande")) {
        IMGrande.style.display = "none";
    }
});

// Se oculta la imagen grande al presionar la tecla Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && IMGrande.style.display === "flex") {
        IMGrande.style.display = "none";
    }
});