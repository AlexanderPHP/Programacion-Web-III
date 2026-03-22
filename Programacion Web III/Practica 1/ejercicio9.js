//9. Crear una promesa que devuelva un mensaje de éxito después de 3 segundos.
let miPromesa_Exito3Segundos = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Exito, este mensaje se mando en 3s")
    },3000)
})
miPromesa_Exito3Segundos.then(mensaje => console.log(mensaje));
