import { Router } from "express";
import { obtenerMedicos, crearMedico, editarMedico, eliminarMedico, obtenerMedico, ObtenerPerMedEsp } from "../controllers/medico.controllers.js";
const router = Router();

router.get("/medicos", obtenerMedicos);

router.post("/medicos", crearMedico);

router.put("/medicos/:id", editarMedico);

router.delete("/medicos/:id", eliminarMedico);

router.get("/medicos/:id", obtenerMedico);

router.get("/medicos-data/:id", ObtenerPerMedEsp);

export default router;