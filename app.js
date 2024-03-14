import express from "express"
const app = express()
const port = 4000

import activo from "./controladores/activoController.js"

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