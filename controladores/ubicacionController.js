// importación del modelo de Ubicación.
import modelo from "../modelos/ubicacionModel.js"

// función para obtener todos las ubicaciones.
const getAll = function(_, respond) {
    respond.send(modelo.getAll())
}

// función para obtener una ubicación mediante su Id.
const getById = function(request, respond) {
    respond.json(JSON.stringify(modelo.getById(request.params.id)))
}

//función para hacer un POST y crear una nueva ubicación.
const postUbicacion = async function(request, respond) {
    try {
        modelo.postUbicacion(request.body)
        //OK. Se regresa un mensaje exitoso y la ubicación creada.
        respond.status(201).send({mensaje: "Ubicación creada exitosamente.", ubicacion: request.body})
    } catch(error) {
         // en caso de error, regresamos el mensaje del error.
         respond.status(500).send({mensaje: "Error. Ubicación no creada: " + error.message, ubicacion: null})
    }
}


// función para hacer un DELETE y eliminar una ubicación.
const deleteUbicacion = async function(request, respond) {
    try {
        const ubicacion = modelo.deleteUbicacion(request.params.id)
         //OK. Se regresa un mensaje exitoso y la ubicación eliminada.
         respond.status(200).send({mensaje: "Ubicación eliminada exitosamente.", ubicacion: ubicacion})
    } catch (error) {
         // en caso de error, regresamos el mensaje del error.
         respond.status(500).send({mensaje: "Error. Ubicación no eliminada: " + error.message, ubicacion: null})
    }
}

// función para hacer un PUT y modificar una ubicación.
const putUbicacion = async function(request, respond) {
    try {
        const ubicacion = modelo.putUbicacion(request.params.id, request.body)
         //OK. Se regresa un mensaje exitoso y la ubicación modificada.
         respond.status(201).send({mensaje: "Ubicación modificada exitosamente.", ubicacion: ubicacion})
    } catch (error) {
         // en caso de error, regresamos el mensaje del error.
         respond.status(500).send({mensaje: "Ubicación no modificada:" + error.message, ubicacion: null})
    }
}

// función para hacer un PATCH y modificar una ubicación.
const patchUbicacion = async function(request, respond) {
    try {
        const ubicacion = modelo.patchUbicacion(request.params.id, request.body)
         //OK. Se regresa un mensaje exitoso y la ubicación modificada.
         respond.status(200).send({mensaje: "Ubicación modificada exitosamente.", ubicacion: ubicacion})
    } catch (error) {
         // en caso de error, regresamos el mensaje del error.
         respond.status(500).send({mensaje: "Ubicación no modificada:" + error.message, ubicacion: null})
    }
}

// exportamos las funciones para el módulo.
export default {
    getAll, getById,
    postUbicacion,
    deleteUbicacion,
    putUbicacion,
    patchUbicacion
}