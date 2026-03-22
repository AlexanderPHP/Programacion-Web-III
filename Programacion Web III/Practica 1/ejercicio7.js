/*
7. Almacenar el resto de los elementos de un arreglo sin tomar en cuenta los dos primeros
elementos de un arreglo, mediante desestructuración.
*/ 

let arreglo = [10, 20, 30, 40, 50];
let [, , ...resto] = arreglo;
console.log(resto)

console.log("   ")
const universitario= {
    nombre: "Alexander",
    ru: 18783796,
    ci: 6874887,
    carrera:"informatica"
}
const{nombre,ru,...restoUniversitario}=universitario
console.log(restoUniversitario)
console.log("   ")
const{nombre:nombreAlex, ru:ruAlex,...restoUni}=universitario
console.log(restoUni)
