import express from "express"
const router = express.Router()
import activoController from "../controladores/activoController.js"

// rutas GET de los activos.
router.get("/", activoController.getAll)
router.get("/id/:id", activoController.getById)
router.get("/serie/:serie", activoController.getBySerie)
router.get("/serieUABC/:serieUABC", activoController.getBySerieUABC)
router.get("/responsable/:responsable", activoController.getByResponsable)
router.get("/tipo/:tipo", activoController.getByTipo)
router.get("/ubicacion/:ubicacion", activoController.getByUbicacion)

// rutas POST de los activos.
router.post("/", activoController.postActivo)

// rutas DELETE de los activos.
router.delete("/:id", activoController.deleteActivo)

// rutas PUT de los activos.
router.put("/:id", activoController.putActivo)

// rutas PATCH de los activos.
router.patch("/:id", activoController.patchActivo)

// exportamos el router de los activos.
export default router