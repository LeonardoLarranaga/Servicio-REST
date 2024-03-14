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

const claves = Object.keys(ubicacionBD[0])

const getAll = function() {
    return ubicacionBD
}

const getById = function(id) {
    return ubicacionBD.find((ubicacion) => ubicacion.id == id)
}

const postUbicacion = function(ubicacion) {
    if (claves.every(clave => ubicacion.hasOwnProperty(clave))) {
        ubicacionBD.push(ubicacion)
    } else {
        throw Error("Formato inválido.")
    }
}

const deleteUbicacion = function(id) {
    const index = ubicacionBD.findIndex(ubicacion => ubicacion.id == id)
    if (index == -1) throw Error("Id no encontrado.")
    
    const ubicacion = ubicacionBD[index]
    ubicacionBD.splice(index, 1)
   
    return ubicacion
}

const putUbicacion = function(id, ubicacionNueva) {
    console.log(id)
    const index = ubicacionBD.findIndex(ubicacion => ubicacion.id == id)
    console.log(index)
    if (index == -1) throw Error("Id no encontrado.")

    ubicacionBD[index] = ubicacionNueva
    
    return ubicacionNueva
}

const patchUbicacion = function(id, body) {
    const index = ubicacionBD.findIndex(ubicacion => ubicacion.id == id)

    if (index == -1) throw Error("Id no encontrado.")
    if (!Object.keys(body).every(clave => claves.includes(clave))) throw Error("Formato inválido.")

    for (const clave in body) ubicacionBD[index][clave] = body[clave]

    return ubicacionBD[index]
}

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