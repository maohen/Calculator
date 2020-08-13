//variables globales
let horas = document.querySelector("#horas");
let minutos = document.querySelector("#minutos");
let segundos = document.querySelector("#segundos");
let btnPlay = document.getElementById("btn-play");
let btnOff = document.getElementById("btn-off");
let intervalo;
let pausar = false;
let seg = 1;
let min = 0;
let hora = 0;


btnPlay.addEventListener("click", correr);
//al hacer click en boto off se inicializan valores en el dom en 0 y variables.
btnOff.addEventListener("click",()=>{
    horas.textContent="00";
    minutos.textContent="00";
    segundos.textContent="00";
    clearInterval(intervalo);
    seg=1;
    min=0;
    hora=0;
    pausar=false;
})

function correr() {
    //se valida que variable pausar este en false para correr cronometro
    if (pausar === false) {
        
        intervalo = setInterval(() => {
            if (min == 60) {
                min = 0;
                hora++;
                if (hora < 10) {
                    horas.textContent = "0" + (hora);
                } else {
                    horas.textContent = hora;
                }
            }

            if (seg == 60) {
                seg = 0;
                min++;

                if (min < 10) {
                    minutos.textContent = "0" + (min);
                } else {
                    if (min == 60)
                        minutos.textContent = "0" + 0;
                    else {
                        minutos.textContent = min;
                    }
                }

            }

            if (seg < 10) {
                segundos.textContent = "0" + (seg);
            } else {
                segundos.textContent = seg;
            }
            seg++

        }, 1000)
        pausar = true;
    } 
    //si variable pausar es true se suspende el intervalo
    else {
        clearInterval(intervalo);
        pausar= false;
    }
}
