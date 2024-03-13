// id, serie, descripcion

const BD = [
    {
        id: 1,
        serie: "2024-1",
        descripcion: "Laptop"
    },
    {
        id: 2,
        serie: "2024-2",
        descripcion: "Osciloscopio"
    },
    {
        id: 3,
        serie: "2024-3",
        descripcion: "Arduino UNO"
    },
    {
        id: 4,
        serie: "2024-4",
        descripcion: "Fuente de voltaje"
    },
    {
        id: 5,
        serie: "2024-5",
        descripcion: "Celular"
    }
]

const findAll = function() {
    return BD
}

const findById = function(id) {
    return BD.find((activo) => activo.id == id)
}

const findBySerie = function(serie) {
    return BD.find((activo) => activo.serie == serie)
}

export default { findAll, findById, findBySerie }