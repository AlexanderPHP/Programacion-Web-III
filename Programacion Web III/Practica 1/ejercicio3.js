//3
/*
Crear una función que reciba un arreglo de números y devuelva en un objeto a los pares
e impares:
let obj = miFuncion([1,2,3,4,5])
console.log(obj) // { pares: [2,4], impares: [1,3,5]}
*/ 
function miFuncion_ParesImparesDeUnArreglo(arreglo) {
        let vector_pares=[]
        let vector_impares=[]
        let contador_pares=0
        let contador_impares=0
        for(let i=0; i<arreglo.length;i++){
            if(arreglo[i]%2==0){
                vector_pares[contador_pares]=arreglo[i];
                contador_pares++
            }else{
                vector_impares[contador_impares]=arreglo[i];
                contador_impares++
            }
        }
        return{ pares:      vector_pares,
                impares:    vector_impares,}  
}

let obj = miFuncion_ParesImparesDeUnArreglo([1, 2, 3, 4, 5]);
console.log(obj);