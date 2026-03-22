//12. Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede
//reescribir mejor con async/await haciendo el código más limpio y mantenible.

function obtenerUsuario(id, callback) {
    setTimeout(() => {
        callback({ id: id, nombre: "Juan", empresaId: 1 })
    }, 1000)
}
function obtenerEmpresa(empresaId, callback) {
    setTimeout(() => {
        callback({ id: empresaId, nombre: "TechCorp" })
    }, 1000)
}
function obtenerProyectos(empresaId, callback) {
    setTimeout(() => {
        callback([
            { id: 1, nombre: "Proyecto A" },
            { id: 2, nombre: "Proyecto B" }
        ])
    }, 1000)
}
obtenerUsuario(1, function(usuario) {
    console.log("Usuario:", usuario);
    
    obtenerEmpresa(usuario.empresaId, function(empresa) {
        console.log("Empresa:", empresa);
        
        obtenerProyectos(empresa.id, function(proyectos) {
            console.log("Proyectos:", proyectos);
            
            console.log(`${usuario.nombre} trabaja en ${empresa.nombre}`);
        })
    })
})

console.log("------------------------------------------------------------------")

function obtenerUsuario(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: id, nombre: "Juan", empresaId: 1 })
        }, 1000)
    })
}

function obtenerEmpresa(empresaId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: empresaId, nombre: "TechCorp" })
        }, 1000)
    })
}

function obtenerProyectos(empresaId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, nombre: "Proyecto A" },
                { id: 2, nombre: "Proyecto B" }
            ])
        }, 1000)
    })
}

async function procesarDatos() {
    const usuario = await obtenerUsuario(1);
    console.log("Usuario:", usuario);
    
    const empresa = await obtenerEmpresa(usuario.empresaId);
    console.log("Empresa:", empresa);
    
    const proyectos = await obtenerProyectos(empresa.id);
    console.log("Proyectos:", proyectos);
    
    console.log(`${usuario.nombre} trabaja en: ${empresa.nombre}`);
}

procesarDatos();
