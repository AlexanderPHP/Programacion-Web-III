//2
/*
Crear una función que invierta el orden de las palabras en una frase.
let cad = miFuncion(“abcd”)
console.log(obj) // dcba
*/
function miFuncion_InvierteElOrdenDeLasPalabras(palabra) {
    if(typeof palabra!=='string'){
        return console.log("no es string")
    }else{
        const texto = palabra.toLowerCase();
        let vector_palabra=[]
        let vector_palabraInversa=[]
        let tamaño_palabra=texto.length
        for(let i=0; i<tamaño_palabra;i++){
            vector_palabra[i]=texto[i];
        }
        let contador=0;
        for(let i=(tamaño_palabra-1); i>=0;i--){
            vector_palabraInversa[contador]=texto[i];
            contador++
        }
    
        return{vector_palabra,
        vector_palabraInversa,}
    }
}

let cad = miFuncion_InvierteElOrdenDeLasPalabras("abcd");
console.log(cad); // dcba
