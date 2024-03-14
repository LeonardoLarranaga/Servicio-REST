import modelo from "../modelos/activoModel.js"

const getAll = function(_, respond) {
    respond.send(modelo.getAll())   
}

const getById = async function(request, respond) {
    respond.json(JSON.stringify(modelo.getById(request.params.id)))
}

const getBySerie = async function(request, respond) {
    respond.json(JSON.stringify(modelo.getBySerie(request.params.serie)))
}

const getBySerieUABC = async function(request, respond) {
    respond.json(JSON.stringify(modelo.getBySerieUABC(request.params.serieUABC)))
}

const getByResponsable = async function(request, respond) {
    respond.send(modelo.getByResponsable(request.params.responsable))
}

const getByTipo = async function(request, respond) {
    respond.send(modelo.getByTipo(request.params.tipo))
}

const getByUbicacion = async function(request, respond) {
    respond.send(modelo.getByUbicacion(request.params.ubicacion))
}

const postActivo = async function(request, respond) {
    try {
        modelo.postActivo(request.body)
        respond.status(201).send({mensaje: "Activo creado exitosamente.", activo: request.body})
    } catch(error) {
        respond.status(500).send({mensaje: "Error. Activo no creado: " + error.message, activo: null})
    }
}

const deleteActivo = async function(request, respond) {
    try {
        const activo = modelo.deleteActivo(request.params.id)
        respond.status(200).send({mensaje: "Activo eliminado exitosamente.", activo: activo})
    } catch (error) {
        respond.status(500).send({mensaje: "Error Activo no eliminado: " + error.message, activo: null})
    }
}

const putActivo = async function(request, respond) {
    try {
        const activo = modelo.putActivo(request.params.id, request.body)
        respond.status(201).send({mensaje: "Activo modificado exitosamente.", activo: activo})
    } catch (error) {
        respond.status(500).send({mensaje: "Activo no modificado:" + error.message, activo: null})
    }
}

const patchActivo = async function(request, respond) {
    try {
        const activo = modelo.patchActivo(request.params.id, request.body)
        respond.status(200).send({mensaje: "Activo modificado exitosamente.", activo: activo})
    } catch (error) {
        respond.status(500).send({mensaje: "Activo no modificado:" + error.message, activo: null})
    }
}

export default { 
    getAll, getById, getByResponsable, getBySerie, getBySerieUABC, getByTipo, getByUbicacion,
    postActivo, 
    deleteActivo, 
    putActivo,
    patchActivo
}