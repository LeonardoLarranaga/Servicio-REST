import express from "express"
const router = express.Router()
import responsableController from "../controladores/responsableController.js"

// rutas GET de los responsables.
router.get("/", responsableController.getAll)
router.get("/id/:id", responsableController.getById)
router.get("/numeroEmpleado/:numeroEmpleado", responsableController.getByNumeroEmpleado)

// rutas POST de los responsables.
router.post("/", responsableController.postResponsable)

// rutas DELETE de los responsables.
router.delete("/:id", responsableController.deleteResponsable)

// rutas PUT de los responsables.
router.put("/:id", responsableController.putResponsable)

// rutas PATCH de los responsables.
router.patch("/:id", responsableController.patchResponsable)

// exportamos el router de los responsables.
export default router