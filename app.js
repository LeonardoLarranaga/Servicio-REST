import express from "express"
const app = express()
const port = 4000

import activo from "./controladores/activoController.js"
import responsable from "./controladores/responsableController.js"
import ubicacion from "./controladores/ubicacionController.js"

app.listen(port, () => {
    console.log(`Servidor escuchando por el puerto: http://localhost:${port}`)
}).on("error", error => {
    console.log("Error al iniciar el servidor:", error)
})

app.get("/", (request, respond) => {
    respond.send("Sistema de control de activos.")
})

app.use(express.json())

/*
    Activos
 */
app.get("/activo", activo.getAll)
app.get("/activo/id/:id", activo.getById)
app.get("/activo/serie/:serie", activo.getBySerie)
app.get("/activo/serieUABC/:serieUABC", activo.getBySerieUABC)
app.get("/activo/responsable/:responsable", activo.getByResponsable)
app.get("/activo/tipo/:tipo", activo.getByTipo)
app.get("/activo/ubicacion/:ubicacion", activo.getByUbicacion)

app.post("/activo", activo.postActivo)

app.delete("/activo/:id", activo.deleteActivo)

app.put("/activo/:id", activo.putActivo)

app.patch("/activo/:id", activo.patchActivo)

/*
    Responsables
*/
app.get("/responsable", responsable.getAll)
app.get("/responsable/id/:id", responsable.getById)
app.get("/responsable/numeroEmpleado/:numeroEmpleado", responsable.getByNumeroEmpleado)

app.post("/responsable", responsable.postResponsable)

app.delete("/responsable/:id", responsable.deleteResponsable)

app.put("/responsable/:id", responsable.putResponsable)

app.patch("/responsable/:id", responsable.patchResponsable)

/*
    Ubicaciones
*/
app.get("/ubicacion", ubicacion.getAll)
app.get("/ubicacion/id/:id", ubicacion.getById)

app.post("/ubicacion", ubicacion.postUbicacion)

app.delete("/ubicacion/:id", ubicacion.deleteUbicacion)

app.put("/ubicacion/:id", ubicacion.putUbicacion)

app.patch("/ubicacion/:id", ubicacion.patchUbicacion)