//14. Proporcione un ejemplo para convertir una promesa en un callback.

let miPromesa_Exito3Segundos = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Exito, este mensaje se mando en 3s(con promesa)")
    },3000)
        reject("errror")
})
miPromesa_Exito3Segundos.then(mensaje => console.log(mensaje));

function miFuncion_Callback() {
    console.log("Exito, este mensaje se mando en 3s(con callback)");
}
setTmiFuncion_Callbackimeout(miFuncion, 3000);