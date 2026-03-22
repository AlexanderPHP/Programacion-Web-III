//11. Proporcione un ejemplo concreto de encadenamiento de promesas.

//Prender computadora
let miPromesa_EncederPC = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("tardo 3s en prender (debe ser buena maquina)")
    },3000)
})
miPromesa_EncederPC
    .then(mensaje => {
        console.log(mensaje);
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve("yo tarde 5s en encontrar la calculadora")
            }, 5000)
        })
    })
    .then(mensaje => {
        console.log(mensaje);
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve("probaré con 53 + 32")
            }, 1000)
        })
    })
    .then(mensaje => {
        console.log(mensaje);
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                let resultado = 53 + 32;
                resolve(`=> ${resultado} (tardó 2s en sumar)`)
            }, 2000)
        })
    })
    .then(resultado => {
        console.log(resultado);
    })