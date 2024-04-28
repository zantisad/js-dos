
/* 

const boton = document.getElementById("btn");

boton.addEventListener("mousedown", () => [
    console.log("visible")
])
boton.addEventListener("mouseup", () => [
    console.log("oculto")
])
 */
/* 
const boton2 = document.getElementById("btn2");

boton2.addEventListener("click", () => {
    console.log("click hecho")
})

const boton3 = document.getElementById("btn3");

boton2.addEventListener("dbclick", () => {
    console.log("doble cl   |ick hecho")
})
 */

const parrafo1 = document.getElementById("parrafo1");

parrafo1.addEventListener("click", () => {
    parrafo1.textContent = "Que me haces click trolo";
    parrafo1.style.color = "red"
})


const parrafos = document.getElementsByClassName("parrafos");

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].addEventListener("mouseover", () => {
        parrafos[i].style.backgroundColor = "red";
        parrafos[i].style.border = "1px solid black";
        parrafos[i].textContent = "No me cambies porfaaa"
    })
}

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].addEventListener("mouseout", () => {
        parrafos[i].style.backgroundColor = "";
        parrafos[i].style.border = "";
        parrafos[i].textContent = "Texto cambiado"
    })
}

const texto = document.getElementById("texto");

textoVerde.addEventListener("click", () => {
    texto.style.color = "green";
})
textoRojo.addEventListener("click", () => {
    texto.style.color = "red";
})
textoAzul.addEventListener("click", () => {
    texto.style.color = "blue";
})
textoColorReset.addEventListener("click", () => {
    texto.style.color = "black";
})

fondoVioleta.addEventListener("click", () => {
    texto.style.backgroundColor = "violet";
})
fondoNegro.addEventListener("click", () => {
    texto.style.backgroundColor = "black";
})
fondoGris.addEventListener("click", () => {
    texto.style.backgroundColor = "gray";
})
fondoColorReset.addEventListener("click", () => {
    texto.style.backgroundColor = "white";
})



const tabla = document.getElementById("miTabla");

// Crear una nueva fila y celdas
const nuevaFila = tabla.insertRow();

// Agregar celdas a la fila
const nuevaCelda1 = nuevaFila.insertCell(0);
const nuevaCelda2 = nuevaFila.insertCell(1);
const nuevaCelda3 = nuevaFila.insertCell(2);

/* nuevaCelda1.textContent = ;
nuevaCelda2.textContent = ;
nuevaCelda3.textContent = ; */

let nuevaMateria = document.getElementById("materia");

nuevaMateria.addEventListener("keypress" function(event) => {
    if (event.keyCode === 13) {
        const nuevaFila = tabla.insertRow(1);
        const nuevaCelda1 = nuevaFila.insertCell(0);
        nuevaCelda1.textContent = nuevaMateria;
    }
})

let xd = [""];
