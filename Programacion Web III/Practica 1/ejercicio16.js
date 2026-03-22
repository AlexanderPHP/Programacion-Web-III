//16. Proporcione un ejemplo para migrar una función con promesas a async/await.

function obtenerSaludoPromesa(nombre) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Hola " + nombre);
        }, 1000);
    });
}
console.log("1. Con promesas:");
obtenerSaludoPromesa("Ana")
    .then
        (saludo => console.log(saludo));

async function obtenerSaludoAsync(nombre) {
    let saludo = await new Promise(resolve => {
        setTimeout(() => {
            resolve("Hola " + nombre);
        }, 1000);
    });
    return saludo;
}
async function mostrarSaludo() {
    console.log("2. Con async/await:");
    let saludo = await obtenerSaludoAsync("Carlos");
    console.log(saludo);
}
setTimeout(() => {
    mostrarSaludo();
}, 2000); 