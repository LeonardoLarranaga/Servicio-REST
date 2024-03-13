import express from "express"
const app = express()
const port = 4000

import activos from "./activos.js"

/*
    Ejemplo
*/

app.get("/", (request, respond) => {
    respond.send("Hola, Mundoooo")
})

app.get("/hi", (request, respond) => {
    respond.send("Hi para ti.")
})

app.get("/json", (request, respond) => {
    respond.json({
        status: "OK",
        mensaje: "Este es un mensaje en JSON."
    })
})

app.get("/servicios", (request, respond) => {
    respond.send("Consultando todos los servicios.")
})

app.get("/servicios/:id", (request, respond) => {
    respond.send("Consultado servicio No. " + request.params.id)
})

app.post("/servicios", (request, respond) => {
    respond.send("Creando un nuevo producto.")
})

app.put("/servicios/:id", (request, respond) => {
    respond.send("Modificando el registro del producto:" + request.params.id)
})

app.patch("/servicios/:id", (request, respond) => {
    respond.send("Modificando atributos del producto: " + request.params.id)
})

/*
    Activos
*/

app.get("/activos", (request, respond) => {
    respond.send(activos.findAll())
})

app.get("/activos/:id", (request, respond) => {
    respond.json(activos.findById(request.params.id))
})

app.get("/activos/:serie", (request, respond) => {
    console.log(activos.findBySerie(request.params.serie) || "Nope.")
    respond.json(activos.findBySerie(request.params.serie))
})

app.listen(port, () => {
    console.log(`Servidor escuchando por el puerto: http://localhost:${port}`)
}).on("error", error => {
    console.log("Error al iniciar el servidor:", error)
})