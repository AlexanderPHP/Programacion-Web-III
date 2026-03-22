// Crear una función que cuente cuántas veces aparece cada 
// vocal en un texto

function miFuncion_ContarVocalesEnUnaPalabra(palabra){
    if(typeof palabra!=='string'){
        return console.log("no es string")
    }else{
        const texto = palabra.toLowerCase();
        var contador_a = 0;
        var contador_e = 0;
        var contador_i = 0;
        var contador_o = 0;
        var contador_u = 0;
        for(let i=0; i<texto.length;i++){
            let letra= texto[i];
                if (letra == 'a')
                    contador_a++;
                if (letra == 'e')
                    contador_e++;
                if (letra == 'i')
                    contador_i++;
                if (letra == 'o')
                    contador_o++;
                if (letra == 'u')
                    contador_u++;
        }
        return{contador_a,
        contador_e,
        contador_i,
        contador_o,
        contador_u}
    }
}
let obj = miFuncion_ContarVocalesEnUnaPalabra("euforia");
console.log(obj);