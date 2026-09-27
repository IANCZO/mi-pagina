let boton = document.getElementById('enviar');

if (boton) {

    boton.addEventListener('click', (e) => {
        e.preventDefault();

        let puntaje = 0;
        let r1 = document.getElementById('uruguay').checked;
        let r2 = document.getElementById('mesi').checked;
        let r3 = document.getElementById('mexico').checked;
        let r4 = document.getElementById('bra').checked;
        let r5 = document.getElementById('sudafrica').checked;
        let r6 = document.getElementById('messi').checked;
        let r7 = document.getElementById('2018').checked;
        let r8 = document.getElementById('panama').checked;
        let r9 = document.getElementById('croacia').checked;
        let r10 = document.getElementById('4anios').checked;

        if (r1) puntaje++;
        if (r2) puntaje++;
        if (r3) puntaje++;
        if (r4) puntaje++;
        if (r5) puntaje++;
        if (r6) puntaje++;
        if (r7) puntaje++;
        if (r8) puntaje++;
        if (r9) puntaje++;
        if (r10) puntaje++;

        let usuario = document.getElementById('nombre').value;

        localStorage.setItem("Usuario", usuario);
        localStorage.setItem("Total", puntaje);

        window.location.href = 'fin.html';
    });
}

let puntos = localStorage.getItem("Total");
let usuario = localStorage.getItem("Usuario");

let spanPuntos = document.getElementById("puntaje");
let spanUsuario = document.getElementById("usuario");

if (spanPuntos) {
    spanPuntos.textContent = puntos;
}
if (spanUsuario) {
    spanUsuario.textContent = usuario;
} 

let musica = document.getElementById("musica");
let paginaActual = window.location.pathname;

function reproducir(){
    musica.play().catch(error => {
        console.log("Audio bloqueado por el navegador. Esperando interacción...");

        document.addEventListener('click', () => {
            musica.play();
        }, { once: true });
    });
}

if(paginaActual.includes("index.html") || paginaActual == "/"){
    setTimeout(function(){
        musica.src = "audios/inicio.mp3";

        musica.play().catch(error => {
            console.log("Audio de inicio bloqueado por el navegador. Esperando primer clic...");

            document.addEventListener('click', () => {
                musica.play(); 
            }, { once: true });
        });
    }, 500);


} else if (paginaActual.includes("cuestionario.html")) {
    setTimeout(function(){
        musica.src = "audios/preguntas.mp3";
        musica.loop = true;
        reproducir();
    }, 500);

} else if (paginaActual.includes("fin.html")){
    let puntaje = parseInt(localStorage.getItem("Total")) || 0;

    setTimeout(function() {
        if(puntaje > 7){
            musica.src = "audios/mayor7.mp3";
        } else if (puntaje >= 4 && puntaje <=7){
            musica.src = "audios/entre4y7.mp3";
        } else {
            musica.src = "audios/menor4.mp3";
        }
        reproducir();
    }, 500);
}