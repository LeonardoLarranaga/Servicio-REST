// importación del modelo de Activo.
import modelo from "../modelos/activoModel.js"

// función para obtener todos los activos.
const getAll = function(_, respond) {
    respond.send(modelo.getAll())   
}

// función para obtener un activo mediante su Id.
const getById = async function(request, respond) {
    respond.json(JSON.stringify(modelo.getById(request.params.id)))
}


// función para obtener una activo mediante su serie.
const getBySerie = async function(request, respond) {
    respond.json(JSON.stringify(modelo.getBySerie(request.params.serie)))
}

// función para obtener una activo mediante su serieUABC.
const getBySerieUABC = async function(request, respond) {
    respond.json(JSON.stringify(modelo.getBySerieUABC(request.params.serieUABC)))
}

// función para obtener una activo mediante su responsable.
const getByResponsable = async function(request, respond) {
    respond.send(modelo.getByResponsable(request.params.responsable))
}

// función para obtener una activo mediante su tipo.
const getByTipo = async function(request, respond) {
    respond.send(modelo.getByTipo(request.params.tipo))
}

// función para obtener una activo mediante su ubicación.
const getByUbicacion = async function(request, respond) {
    respond.send(modelo.getByUbicacion(request.params.ubicacion))
}

// función para hacer un POST y crear un nuevo activo.
const postActivo = async function(request, respond) {
    try {
        modelo.postActivo(request.body)
        //OK. Se regresa un mensaje exitoso y el activo creado.
        respond.status(201).send({mensaje: "Activo creado exitosamente.", activo: request.body})
    } catch(error) {
        // en caso de error, regresamos el mensaje del error.
        respond.status(500).send({mensaje: "Error. Activo no creado: " + error.message, activo: null})
    }
}

// función para hacer un DELETE de un activo.
const deleteActivo = async function(request, respond) {
    try {
        const activo = modelo.deleteActivo(request.params.id)
        //OK. Se regresa un mensaje exisoto y el activo eliminado.
        respond.status(200).send({mensaje: "Activo eliminado exitosamente.", activo: activo})
    } catch (error) {
        // en caso de error, regresamos el mensaje del error.
        respond.status(500).send({mensaje: "Error Activo no eliminado: " + error.message, activo: null})
    }
}

// función para hacer un PUT y modificar un activo.
const putActivo = async function(request, respond) {
    try {
        const activo = modelo.putActivo(request.params.id, request.body)
        //OK. Se regresa un mensaje exisoto y el activo modificado.
        respond.status(201).send({mensaje: "Activo modificado exitosamente.", activo: activo})
    } catch (error) {
        // en caso de error, regresamos el mensaje del error.
        respond.status(500).send({mensaje: "Activo no modificado:" + error.message, activo: null})
    }
}

// función para hcer un PATCH y modificar ciertos parámetros del activo.
const patchActivo = async function (request, respond) {
    try {
        const activo = modelo.patchActivo(request.params.id, request.body)
        //OK. Se regresa un mensaje exisoto y el activo modificado.

        respond.status(200).send({ mensaje: "Activo modificado exitosamente.", activo: activo })
    } catch (error) {
        // en caso de error, regresamos el mensaje del error.

        respond.status(500).send({ mensaje: "Activo no modificado:" + error.message, activo: null })
    }
}

// exportamos las funciones para el módulo.
export default { 
    getAll, getById, getByResponsable, getBySerie, getBySerieUABC, getByTipo, getByUbicacion,
    postActivo, 
    deleteActivo, 
    putActivo,
    patchActivo
}