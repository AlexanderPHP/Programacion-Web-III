//15. Proporcione un ejemplo para convertir un callback en una promesa

function obtenerDatos_Callback(id, callback) {
    setTimeout(() => {
        if (id > 0) {
            callback(null, { id: id, nombre: "Juan" });
        } else {
            callback("ID inválido", null);
        }
    }, 3000);
}

obtenerDatos_Callback(1, (error, datos) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Datos:", datos);
    }
});

console.log("promesa(identifica errores)--");

function obtenerDatos_Promesa(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({ id: id, nombre: "Juan" });
            } else {
                reject("ID inválido"); 
            }
        }, 3000);
    });
}

obtenerDatos_Promesa(-3)
    .then(datos => console.log("Datos:", datos))
    .catch(error => console.log("Error:", error));

// Prueba con ID inválido
obtenerDatos_Promesa(-1)
    .then(datos => console.log("Datos:", datos))
    .catch(error => console.log("Error:", error));