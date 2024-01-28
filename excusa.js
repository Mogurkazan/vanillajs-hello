let who = ['El loro', 'La abuela', 'Una hormiga', 'Mi novia'];
let action = ['se comió', 'perdió', 'rompió', 'vendió'];
let what = ['mis deberes', 'mis llaves', 'mi mochila', 'mi despertador'];
let when = ['ayer', 'esta noche', 'cuando había terminado', 'mientras comía'];
function seleccionAleatoria (arr) {
    const indiceAleatorio = Math.floor(Math.random()*arr.length);
    return arr[indiceAleatorio];
}
function generarExcusa() {
    const whoSeleccionado = seleccionAleatoria(who);
    const actionSeleccionado = seleccionAleatoria(action);
    const whatSeleccionado = seleccionAleatoria(what);
    const whenSeleccionado = seleccionAleatoria(when);
    const excusaGenerada = `${whoSeleccionado} ${actionSeleccionado} ${whatSeleccionado} ${whenSeleccionado}`;
    document.getElementById("excusa").textContent = excusaGenerada;
}
window.onload = function(){
    generarExcusa();
};