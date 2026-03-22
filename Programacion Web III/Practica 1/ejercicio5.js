//5
/*Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y
al revés).
let band = miFuncion(“oruro”)
console.log(band) // true
let band = miFuncion(“hola”)
console.log(band) // false*/
function miFuncion_EsPalindromo(palabra) {
    if(typeof palabra!=='string'){
        return console.log("no es string")
    }else{
        const texto = palabra.toLowerCase();
        let sw=0;
        let vector_palabra=[]
        let vector_palabraInversa=[]
        for(let i=0; i<texto.length;i++){
            vector_palabra[i]=texto[i]
        }
        let contador=0
        for(let i=texto.length-1; i>=0;i--){
            vector_palabraInversa[contador]=texto[i]
            contador++
        }
        for(let i=0; i<texto.length;i++){
            if(vector_palabra[i]==vector_palabraInversa[i]){

            }else{
                sw=1
            }
        }
        return sw==0
    }
}

let band = miFuncion_EsPalindromo("oruro");
console.log(band) // true

let band2 = miFuncion_EsPalindromo("orurdo");
console.log(band2) // false