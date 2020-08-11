//variables globales
let screen = document.getElementById("resultado"),
    btnClean = document.getElementById("retroceso"),
    botones = document.querySelectorAll("#calculadora button"),
    valor1 = "",
    valor2 = "",
    operador;

    
//escuchar evento click para boton borrar
btnClean.addEventListener("click", () => {
    valorResult = screen.value;
    screen.value = valorResult.substring(0, valorResult.length - 1);
});
//VALIDAR SI SE INGRESA POR TECLADO UN NUMERO
screen.onkeypress = function(e) {
    console.log(String.fromCharCode(e.charCode))
    if(isNaN(String.fromCharCode(e.charCode)))
       return false;
 }
 //evita que copien el texto por atajo
 screen.onpaste = function(e){
    e.preventDefault();
 }


//iteramos sobre cada boton
botones.forEach(boton => {

    //cada boton tendra un escuchador del evento click
    boton.addEventListener("click", () => {
        let btnInput = boton.textContent;
        validarBtn(btnInput);
    })
});

//funciones
function validarBtn(boton) {

    if (boton === "C") {
        screen.value = "";
        valor1="";
        valor2="";
        operador="";

    } else {
        if (boton === "+" || boton === "-" || boton === "x" || boton === "/") {
            //definir valor 1 como el valor en pantalla
            valor1 = parseFloat(screen.value);
            operador = boton;

            //valor2 se inicializa en blanco siempre que se de clic en un operador
            valor2 = "";

            //valida si en pantalla ya se escribio operador /
            if (!screen.value.includes(operador))
                screen.value += operador;

        } else if (boton === "%") {

            valor2 = parseFloat(screen.value);
            screen.value = valor2 / 100;
            valor2 = "";

        } else if(boton ==="="){
            operacion();
        }
        else {
            validaOperator();
            screen.value += boton;
        }
    }
}

//validar si se asigno un operador
function validaOperator() {
    if (screen.value.includes("/") || screen.value.includes("x") || screen.value.includes("+") || screen.value.includes("-"))
        screen.value = "";
}


//realizar la operacion
function operacion() {

    //valida si el valor 2 ya contiene datos en caso de repetir la operacion
    if (valor2 === "")
        valor2 = parseFloat(screen.value);

    //valida si en pantalla no hay datos
    if (screen.value === "") {
        return
    } else {

        if (operador === "/")
            if (valor2 === 0) {
                screen.value = "ERROR";
            }
        else {
            screen.value = valor1 / valor2;
        }

        if (operador === "x")
            screen.value = valor1 * valor2;

        if (operador === "+")
            screen.value = valor1 + valor2;

        if (operador === "-")
            screen.value = valor1 - valor2;

        //valor1 toma el valor en pantalla de repetir o contiuar la operacion en ciclo
        valor1 = parseFloat(screen.value);
    }
}