import modelo from "../modelos/ubicacionModel.js"

const getAll = function(_, respond) {
    respond.send(modelo.getAll())
}

const getById = function(request, respond) {
    respond.json(JSON.stringify(modelo.getById(request.params.id)))
}

const postUbicacion = async function(request, respond) {
    try {
        modelo.postUbicacion(request.body)
        respond.status(201).send({mensaje: "Ubicación creada exitosamente.", ubicacion: request.body})
    } catch(error) {
        respond.status(500).send({mensaje: "Error. Ubicación no creada: " + error.message, ubicacion: null})
    }
}

const deleteUbicacion = async function(request, respond) {
    try {
        const ubicacion = modelo.deleteUbicacion(request.params.id)
        respond.status(200).send({mensaje: "Ubicación eliminada exitosamente.", ubicacion: ubicacion})
    } catch (error) {
        respond.status(500).send({mensaje: "Error. Ubicación no eliminada: " + error.message, ubicacion: null})
    }
}

const putUbicacion = async function(request, respond) {
    try {
        const ubicacion = modelo.putUbicacion(request.params.id, request.body)
        respond.status(201).send({mensaje: "Ubicación modificada exitosamente.", ubicacion: ubicacion})
    } catch (error) {
        respond.status(500).send({mensaje: "Ubicación no modificada:" + error.message, ubicacion: null})
    }
}

const patchUbicacion = async function(request, respond) {
    try {
        const ubicacion = modelo.patchUbicacion(request.params.id, request.body)
        respond.status(200).send({mensaje: "Ubicación modificada exitosamente.", ubicacion: ubicacion})
    } catch (error) {
        respond.status(500).send({mensaje: "Ubicación no modificada:" + error.message, ubicacion: null})
    }
}

export default {
    getAll, getById,
    postUbicacion,
    deleteUbicacion,
    putUbicacion,
    patchUbicacion
}