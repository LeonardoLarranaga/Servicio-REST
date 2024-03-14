// simulación de bases de datos.
const ubicacionBD = [
    {
        id: 1,
        descripcion: "Ubicación principal donde se almacenan y gestionan los productos, facilitando el control y distribución eficiente desde un punto central.",
        activos: [1, 4, 7],
        imagen: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1170"
    },
    {
        id: 2,
        descripcion: "Ubicación adicional utilizada para almacenar inventario de respaldo, garantizando disponibilidad rápida en caso de agotamiento en el almacén principal.",
        activos: [2, 5, 8],
        imagen: "https://images.unsplash.com/photo-1609143739217-01b60dad1c67?q=80&w=1287"
    },
    {
        id: 3,
        descripcion: "Espacio para solicitar y recibir productos o servicios prestados, diseñado para una gestión rápida y eficiente, con personal disponible para asistir a los usuarios.",
        activos: [3, 6, 9],
        imagen: "https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?q=80&w=1031"
    }
]

// arreglo con las claves de las ubicaciones para verificación.
const claves = Object.keys(ubicacionBD[0])

// función que regresa todas las ubicaciones.
const getAll = function() {
    return ubicacionBD
}

// función que regresa una ubicación mediante su Id.
const getById = function(id) {
    return ubicacionBD.find((ubicacion) => ubicacion.id == id)
}

// función que ingresa una nueva ubicación hacia la base de datos.
const postUbicacion = function(ubicacion) {
    // se verifica el formato de la nueva ubicación mediante las claves.
    if (claves.every(clave => ubicacion.hasOwnProperty(clave))) {
        ubicacionBD.push(ubicacion)
    } else {
        throw Error("Formato inválido.")
    }
}

// función que elimina una ubicación mediante su Id.
const deleteUbicacion = function(id) {
    // se busca el índice de la ubicación mediante su Id. Si no se encuentra, se regresa un error.
    const index = ubicacionBD.findIndex(ubicacion => ubicacion.id == id)
    if (index == -1) throw Error("Id no encontrado.")
    
    // obtenemos la ubicación y la eliminamos.
    const ubicacion = ubicacionBD[index]
    ubicacionBD.splice(index, 1)
   
    // se regresa la ubicación eliminada.
    return ubicacion
}

// función para reemplazar una ubicación con una nueva (modificada).
const putUbicacion = function(id, ubicacionNueva) {
    // se busca el índice de la ubicación mediante su Id. Si no se encuentra, se regresa un error.
    const index = ubicacionBD.findIndex(ubicacion => ubicacion.id == id)
    if (index == -1) throw Error("Id no encontrado.")

    // se reemplaza la ubicación.
    ubicacionBD[index] = ubicacionNueva
    
    // se regresa la ubicación modificada.
    return ubicacionNueva
}

// función para modificar ciertos parámetros de la ubicación.
const patchUbicacion = function(id, body) {
    // se busca el índice de la ubicación mediante su Id. Si no se encuentra, se regresa un error.
    const index = ubicacionBD.findIndex(ubicacion => ubicacion.id == id)
    if (index == -1) throw Error("Id no encontrado.")

    // se verifica que los parámetros a modificar son válidos.
    if (!Object.keys(body).every(clave => claves.includes(clave))) throw Error("Formato inválido.")

    // se modifica cada campo de la ubicación.
    for (const clave in body) ubicacionBD[index][clave] = body[clave]

    // se regresa la ubicación modificada.
    return ubicacionBD[index]
}

// exportamos las funciones para el módulo.
export default {
    getAll, getById,
    postUbicacion,
    deleteUbicacion,
    putUbicacion,
    patchUbicacion
}

/*
    {
        id: 4,
        descripcion: "Nueva ubicación de capital de 13 mil millones de dólares.",
        activos: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        imagen: "https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?q=80&w=1031"
    }
*/