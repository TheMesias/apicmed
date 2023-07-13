import { Router } from "express";
import { obtenerEspecialidades, crearEspecialidad, editarEspecialidad, eliminarEspecialidad, obtenerEspecialidad } from "../controllers/especialidad.controllers.js";

const router = Router();

router.get("/especialidades-medicas", obtenerEspecialidades);

router.post("/especialidades-medicas", crearEspecialidad);

router.put("/especialidades-medicas/:id", editarEspecialidad);

router.delete("/especialidades-medicas/:id", eliminarEspecialidad);

router.get("/especialidades-medicas/:id", obtenerEspecialidad);

export default router;