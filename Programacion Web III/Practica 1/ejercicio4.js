//4
/**
 *  Crear una función que reciba un arreglo de números y devuelva el número mayor y el
menor, en un objeto.
let obj = miFuncion([3,1,5,4,2])
console.log(obj) // { mayor: 5, menor: 1 }
 */
function miFuncion_DevuelveNumeroMayorYMenor(arreglo) {
    let valor_maximo = Math.max(...arreglo);  
    let valor_minimo = Math.min(...arreglo);  

    return { mayor: valor_maximo, menor: valor_minimo }; 
}

let obj = miFuncion_DevuelveNumeroMayorYMenor([3,1,5,4,2]); 
console.log(obj) 