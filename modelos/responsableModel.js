// simulación de base de datos.
const responsableBD = [
    {
        id: 1,
        numeroEmpleado: 1991,
        nombre: "Emilio Hernández",
        activos: [1, 4, 7],
        imagen: "https://plus.unsplash.com/premium_photo-1661270464552-14596350963b?q=80&w=1170"
    },
    {
        id: 2,
        numeroEmpleado: 1989,
        nombre: "María Debé",
        activos: [2, 5, 8],
        imagen: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1170"
    },
    {
        id: 3,
        numeroEmpleado: 2004,
        nombre: "Mario Pérez",
        activos: [3, 6, 9],
        imagen: "https://images.unsplash.com/photo-1521737451536-00a86f630f3e?q=80&w=1170"
    }
]

// arreglo con las claves de los responsables para verificación.
const claves = Object.keys(responsableBD[0])

// función que regresa todos los responsables.
const getAll = function() {
    return responsableBD
}

// función que regresa un responsable mediante su Id.
const getById = function(id) {
    return responsableBD.find((responsable) => responsable.id == id)
}

// función que regresa un responsable mediante su número de empleado.
const getByNumeroEmpleado = function(numeroEmpleado) {
    return responsableBD.find((responsableBD) => responsableBD.numeroEmpleado == numeroEmpleado)
}

// función que ingresa un nuevo responsable hacia la base de datos.
const postResponsable = function(responsable) {
    // se verifica el formato del nuevo responsable mediante las claves.
    if (claves.every(clave => responsable.hasOwnProperty(clave))) {
        responsableBD.push(responsable)
    } else {
        throw Error("Formato inválido.")
    }
}

// función que elimina un responsable mediante su Id.
const deleteResponsable = function(id) {
    // se busca el índice del responsable mediante su Id. Si no se encuentra, se regresa un error.
    const index = responsableBD.findIndex(responsable => responsable.id == id)
    if (index == -1) throw Error("Id no encontrado.")
    
    // obtenemos el responsable y lo eliminamos.
    const responsable = responsableBD[index]
    responsableBD.splice(index, 1)
   
    // se regresa el responsable eliminado.
    return responsable
}

// función para reemplazar un responsable con uno nuevo (modificado).
const putResponsable = function(id, responsableNuevo) {
    // se busca el índice del responsable mediante su Id. Si no se encuentra, se regresa un error.
    const index = responsableBD.findIndex(responsable => responsable.id == id)
    if (index == -1) throw Error("Id no encontrado.")

    // se reemplaza el reesponsable.
    responsableBD[index] = responsableNuevo
    
    // se regresa el responsable modificado.
    return responsableNuevo
}

// función para modificar ciertos parámetros del responsable.
const patchResponsable = function(id, body) {
    // se busca el índice del responsable mediante su Id. Si no se encuentra, se regresa un error.
    const index = responsableBD.findIndex(responsable => responsable.id == id)
    if (index == -1) throw Error("Id no encontrado.")
    
    // se verifica que los parámetros a modificar son válidos.
    if (!Object.keys(body).every(clave => claves.includes(clave))) throw Error("Formato inválido.")

    // se modifica cada campo del responsable.
    for (const clave in body) responsableBD[index][clave] = body[clave]

    // se regresa el responsable modificado.
    return responsableBD[index]
}

// exportación de las funciones para el módulo.
export default { 
    getAll, getById, getByNumeroEmpleado,
    postResponsable,
    deleteResponsable,
    putResponsable,
    patchResponsable
}

/*
{
    id: 4,
    numeroEmpleado: 2024,
    nombre: "Luis Leonardo",
    activos: [1, 2, 3],
    imagen: "https://plus.unsplash.com/premium_photo-1661270464552-14596350963b?q=80&w=1170"
}
*/