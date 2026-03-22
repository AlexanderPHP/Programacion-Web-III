/**//* 13. Proporcione un ejemplo concreto donde el anidamiento de promesas se puede
reescribir mejor con async/await haciendo el código más limpio y mantenible.*/

function obtenerUsuario(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ nombre: "Juan", empresaId: 1 })
        }, 1000)
    })
}

function obtenerEmpresa(empresaId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ nombre: "TechCorp" })
        }, 1000)
    })
}

function obtenerSalario(usuarioId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(50000)
        }, 1000)
    })
}/*
obtenerUsuario(1)
    .then(usuario => {
        console.log("Usuario:", usuario.nombre);
        return obtenerEmpresa(usuario.empresaId);
    })
    .then(empresa => {
        console.log("Empresa:", empresa.nombre);
        return obtenerSalario(1);
    })
    .then(salario => {
        console.log("Salario:", salario);
    })*/

console.log("------------------------------------------");

async function procesarDatos() {
    const usuario = await obtenerUsuario(1);
    console.log("Usuario:", usuario.nombre);
    
    const empresa = await obtenerEmpresa(usuario.empresaId);
    console.log("Empresa:", empresa.nombre);
    
    const salario = await obtenerSalario(1);
    console.log("Salario:", salario);
}

procesarDatos();