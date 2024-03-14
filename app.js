// importamos Express, se inicializa y elegimos el puerto a utilizar.
import express from "express"
const app = express()
const port = 4000

// se importan los controladores para los activos, responsables y ubicaciones.
import activo from "./controladores/activoController.js"
import responsable from "./controladores/responsableController.js"
import ubicacion from "./controladores/ubicacionController.js"

// se inicia el app.
app.listen(port, () => {
    console.log(`Servidor escuchando por el puerto: http://localhost:${port}`)
}).on("error", error => {
    console.log("Error al iniciar el servidor:", error)
})

// página principal del app.
app.get("/", (request, respond) => {
    respond.send("Sistema de control de activos.")
})

// usamos express.json() para poder procesar los request en donde su body contiene un json.
app.use(express.json())

/*
    Activos
 */
// rutas GET de los activos.
app.get("/activo", activo.getAll)
app.get("/activo/id/:id", activo.getById)
app.get("/activo/serie/:serie", activo.getBySerie)
app.get("/activo/serieUABC/:serieUABC", activo.getBySerieUABC)
app.get("/activo/responsable/:responsable", activo.getByResponsable)
app.get("/activo/tipo/:tipo", activo.getByTipo)
app.get("/activo/ubicacion/:ubicacion", activo.getByUbicacion)

// rutas POST de los activos.
app.post("/activo", activo.postActivo)

// rutas DELETE de los activos.
app.delete("/activo/:id", activo.deleteActivo)

// rutas PUT de los activos.
app.put("/activo/:id", activo.putActivo)

// rutas PATCH de los activos.
app.patch("/activo/:id", activo.patchActivo)

/*
    Responsables
*/
// rutas GET de los responsables.
app.get("/responsable", responsable.getAll)
app.get("/responsable/id/:id", responsable.getById)
app.get("/responsable/numeroEmpleado/:numeroEmpleado", responsable.getByNumeroEmpleado)

// rutas POST de los responsables.
app.post("/responsable", responsable.postResponsable)

// rutas DELETE de los responsables.
app.delete("/responsable/:id", responsable.deleteResponsable)

// rutas PUT de los responsables.
app.put("/responsable/:id", responsable.putResponsable)

// rutas PATCH de los responsables.
app.patch("/responsable/:id", responsable.patchResponsable)

/*
    Ubicaciones
*/
// rutas GET de las ubicaciones.
app.get("/ubicacion", ubicacion.getAll)
app.get("/ubicacion/id/:id", ubicacion.getById)

// rutas POST de las ubicaciones.
app.post("/ubicacion", ubicacion.postUbicacion)

// rutas DELETE de las ubicaciones.
app.delete("/ubicacion/:id", ubicacion.deleteUbicacion)

// rutas PUT de las ubicaciones.
app.put("/ubicacion/:id", ubicacion.putUbicacion)

// rutas PATCH de las ubicaciones.
app.patch("/ubicacion/:id", ubicacion.patchUbicacion)