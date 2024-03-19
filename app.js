// importamos Express, se inicializa y elegimos el puerto a utilizar.
import express from "express"
const app = express()
const port = 4000

// se importan las rutas para los activos, responsables y ubicaciones.
import activos from "./rutas/activos.js"
import responsables from "./rutas/responsables.js"
import ubicaciones from "./rutas/ubicaciones.js"

// se inicia el app.
app.listen(port, () => {
    console.log(`Servidor escuchando por el puerto: http://localhost:${port}`)
}).on("error", error => {
    console.log("Error al iniciar el servidor:", error)
})

// página principal del app.
app.get("/", (_, respond) => {
    respond.send("Sistema de control de activos.")
})

// usamos express.json() para poder procesar los request en donde su body contiene un json.
app.use(express.json())

// activos
app.use("/activo", activos)

// responsables
app.use("/responsable", responsables)

//ubicaciones
app.use("/ubicacion", ubicaciones)