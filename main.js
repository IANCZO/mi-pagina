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