import modelo from "../modelos/responsableModel.js"

const getAll = function(_, respond) {
    respond.send(modelo.getAll())
}

const getById = async function(request, respond) {
    respond.json(JSON.stringify(modelo.getById(request.params.id)))
}

const getByNumeroEmpleado = async function(request, respond) {
    respond.json(JSON.stringify(modelo.getByNumeroEmpleado(request.params.numeroEmpleado)))
}

const postResponsable = async function(request, respond) {
    try {
        modelo.postResponsable(request.body)
        respond.status(201).send({mensaje: "Responsable creado exitosamente.", responsable: request.body})
    } catch(error) {
        respond.status(500).send({mensaje: "Error. Responsable no creado: " + error.message, responsable: null})
    }
}

const deleteResponsable = async function(request, respond) {
    try {
        const responsable = modelo.deleteResponsable(request.params.id)
        respond.status(200).send({mensaje: "Responsable eliminado exitosamente.", responsable: responsable})
    } catch (error) {
        respond.status(500).send({mensaje: "Error. Responsable no eliminado: " + error.message, responsable: null})
    }
}

const putResponsable = async function(request, respond) {
    try {
        const responsable = modelo.putResponsable(request.params.id, request.body)
        respond.status(201).send({mensaje: "Responsable modificado exitosamente.", responsable: responsable})
    } catch (error) {
        respond.status(500).send({mensaje: "Responsable no modificado:" + error.message, responsable: null})
    }
}

const patchResponsable = async function(request, respond) {
    try {
        const responsable = modelo.patchResponsable(request.params.id, request.body)
        respond.status(200).send({mensaje: "Responsable modificado exitosamente.", responsable: responsable})
    } catch (error) {
        respond.status(500).send({mensaje: "Responsable no modificado:" + error.message, responsable: null})
    }
}

export default { 
    getAll, getById, getByNumeroEmpleado,
    postResponsable,
    deleteResponsable,
    putResponsable,
    patchResponsable
}