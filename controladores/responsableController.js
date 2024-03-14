// importación del modelo de Responsable.
import modelo from "../modelos/responsableModel.js"

// función para obtener todos los responsables.
const getAll = function(_, respond) {
    respond.send(modelo.getAll())
}

// función para obtener un responsable mediante su Id.
const getById = async function(request, respond) {
    respond.json(JSON.stringify(modelo.getById(request.params.id)))
}

// función para obtener un responsable mediante su número de empleado.
const getByNumeroEmpleado = async function(request, respond) {
    respond.json(JSON.stringify(modelo.getByNumeroEmpleado(request.params.numeroEmpleado)))
}


// función para hacer un POST y crear un nuevo responsable.
const postResponsable = async function(request, respond) {
    try {
        modelo.postResponsable(request.body)
        //OK. Se regresa un mensaje exitoso y el responsable creado.
        respond.status(201).send({mensaje: "Responsable creado exitosamente.", responsable: request.body})
    } catch(error) {
        // en caso de error, regresamos el mensaje del error.
        respond.status(500).send({mensaje: "Error. Responsable no creado: " + error.message, responsable: null})
    }
}

// función para hacer un DELETE y eliminar un responsable.
const deleteResponsable = async function(request, respond) {
    try {
        const responsable = modelo.deleteResponsable(request.params.id)
        //OK. Se regresa un mensaje exitoso y el responsable eliminado.
        respond.status(200).send({mensaje: "Responsable eliminado exitosamente.", responsable: responsable})
    } catch (error) {
        // en caso de error, regresamos el mensaje del error.
        respond.status(500).send({mensaje: "Error. Responsable no eliminado: " + error.message, responsable: null})
    }
}

// función para hacer un PUT y modificar un responsable
const putResponsable = async function(request, respond) {
    try {
        const responsable = modelo.putResponsable(request.params.id, request.body)
        //OK. Se regresa un mensaje exitoso y el responsable modificado.
        respond.status(201).send({mensaje: "Responsable modificado exitosamente.", responsable: responsable})
    } catch (error) {
        // en caso de error, regresamos el mensaje del error.
        respond.status(500).send({mensaje: "Responsable no modificado:" + error.message, responsable: null})
    }
}


// función para hacer un PATCH y modificar ciertos parámetros del responsable.
const patchResponsable = async function(request, respond) {
    try {
        const responsable = modelo.patchResponsable(request.params.id, request.body)
        //OK. Se regresa un mensaje exitoso y el responsable modificado.
        respond.status(200).send({mensaje: "Responsable modificado exitosamente.", responsable: responsable})
    } catch (error) {
         // en caso de error, regresamos el mensaje del error.
         respond.status(500).send({mensaje: "Responsable no modificado:" + error.message, responsable: null})
    }
}

// exportamos las funciones para el módulo.
export default { 
    getAll, getById, getByNumeroEmpleado,
    postResponsable,
    deleteResponsable,
    putResponsable,
    patchResponsable
}