import { Router } from "express";
import { obtenerExamenesFisicos, crearExamenFisico, editarExamenFisico, eliminarExamenFisico, obtenerExamenFisico } from "../controllers/examen_fisico.controllers.js";

const router = Router();

router.get("/examenes-fisicos", obtenerExamenesFisicos);

router.post("/examenes-fisicos", crearExamenFisico);

router.put("/examenes-fisicos/:id", editarExamenFisico);

router.delete("/examenes-fisicos/:id", eliminarExamenFisico);

router.get("/examenes-fisicos/:id", obtenerExamenFisico);

export default router;