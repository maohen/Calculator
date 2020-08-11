//seleccion de elementos del DOM
let cronometro = document.getElementById("contenedor-cronom");
let calculadora = document.getElementById("calculadora");
let btnCronom = document.getElementById("btn-cronom");
let btnCalc = document.getElementById("btn-calc");


//al cargar el documento se aplican estilos
cronometro.style.display= "none";
btnCalc.style.background= "#78bfcf";


//eventos
//mostrar y desaparecer elementos calculadora y cronometro
btnCronom.addEventListener("click",(e)=>{
    e.preventDefault();

    calculadora.style.display= "none";
    cronometro.style.display= "flex";
    btnCalc.style.background= "#59919e";
    btnCronom.style.background= "#78bfcf";
})

btnCalc.addEventListener("click",(e)=>{
    e.preventDefault();

    cronometro.style.display= "none";
    calculadora.style.display="block";
    btnCronom.style.background= "#59919e";
    btnCalc.style.background= "#78bfcf";
})

