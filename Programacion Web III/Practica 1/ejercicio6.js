//Desestructuración de arrays en JS
/*
6. Tomar los dos primeros elementos de un arreglo y almacenarlos en dos variables
mediante desestructuración.
*/ 
const arreglo_primero=[1,2,3,4,5,6,7,8,9,10]
const [primera_posicion, segunda_posicion]=arreglo_primero
console.log(primera_posicion,segunda_posicion)

console.log("   ")
const universitario= {
    nombre: "Alexander",
    ru: 18783796,
    ci: 6874887
}
const{nombre,ru}=universitario
console.log(nombre,ru)
console.log("   ")
const{nombre:nombreAlex, ru:ruAlex}=universitario
console.log(nombreAlex,ruAlex)
