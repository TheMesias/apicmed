import { Router } from "express";
import { obtenerHistorialesMedicos, crearHistorialMedico, editarHistorialMedico, eliminarHistorialMedico, obtenerHistorialMedico } from "../controllers/historial_medico.controllers.js";

const router = Router();

router.get("/historiales-medicos", obtenerHistorialesMedicos);

router.post("/historiales-medicos", crearHistorialMedico);

router.put("/historiales-medicos/:id", editarHistorialMedico);

router.delete("/historiales-medicos/:id", eliminarHistorialMedico);

router.get("/historiales-medicos/:id", obtenerHistorialMedico);

export default router;