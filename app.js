// importamos Express, se inicializa y elegimos el puerto a utilizar.
import express from "express"
import https from "https"
import fs from "fs"
import cors from "cors"

const app = express()
app.use(cors())
const port = 4000

// se importan las rutas para los activos, responsables y ubicaciones.
import activos from "./rutas/activos.js"
import responsables from "./rutas/responsables.js"
import ubicaciones from "./rutas/ubicaciones.js"

// credenciales OpenSSL
const credenciales = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cer")
}

// se inicia el servidor.
const server = https.createServer(credenciales, app)

server.listen(port, () => {
    console.log(`Servidor escuchando por el puerto: https://localhost:${port}`)
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