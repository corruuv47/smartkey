let envio = document.getElementById('envio');
let total = document.getElementById('total');


envio.addEventListener('change', () => {
let base = 7999;
if (envio.checked) base * 1.6;
total.innerHTML = `Total a pagar: <strong>${Math.round(base)} ARS</strong>`;
});


function realizarCompra() {
document.getElementById('exito').style.display = 'block';
window.scrollTo(0, 0);
}