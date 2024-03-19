import express from "express"
const router = express.Router()
import ubicacionController from "../controladores/ubicacionController.js"

// rutas GET de las ubicaciones.
router.get("/", ubicacionController.getAll)
router.get("/id/:id", ubicacionController.getById)

// rutas POST de las ubicaciones.
router.post("/", ubicacionController.postUbicacion)

// rutas DELETE de las ubicaciones.
router.delete("/:id", ubicacionController.deleteUbicacion)

// rutas PUT de las ubicaciones.
router.put("/:id", ubicacionController.putUbicacion)

// rutas PATCH de las ubicaciones.
router.patch("/:id", ubicacionController.patchUbicacion)

// exportamos el router de las ubicaciones.
export default router