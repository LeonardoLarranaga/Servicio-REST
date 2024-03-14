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

const claves = Object.keys(responsableBD[0])

const getAll = function() {
    return responsableBD
}

const getById = function(id) {
    return responsableBD.find((responsable) => responsable.id == id)
}

const getByNumeroEmpleado = function(numeroEmpleado) {
    console.log(numeroEmpleado)
    return responsableBD.find((responsableBD) => responsableBD.numeroEmpleado == numeroEmpleado)
}

const postResponsable = function(responsable) {
    if (claves.every(clave => responsable.hasOwnProperty(clave))) {
        responsableBD.push(responsable)
    } else {
        throw Error("Formato inválido.")
    }
}

const deleteResponsable = function(id) {
    const index = responsableBD.findIndex(responsable => responsable.id == id)
    if (index == -1) throw Error("Id no encontrado.")
    
    const responsable = responsableBD[index]
    responsableBD.splice(index, 1)
   
    return responsable
}

const putResponsable = function(id, responsableNuevo) {
    const index = responsableBD.findIndex(responsable => responsable.id == id)
    if (index == -1) throw Error("Id no encontrado.")

    responsableBD[index] = responsableNuevo
    
    return responsableNuevo
}

const patchResponsable = function(id, body) {
    const index = responsableBD.findIndex(responsable => responsable.id == id)

    if (index == -1) throw Error("Id no encontrado.")
    if (!Object.keys(body).every(clave => claves.includes(clave))) throw Error("Formato inválido.")

    for (const clave in body) responsableBD[index][clave] = body[clave]

    return responsableBD[index]
}

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