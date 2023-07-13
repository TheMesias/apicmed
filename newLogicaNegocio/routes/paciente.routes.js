import { Router } from "express";
import { obtenerPacientes, crearPaciente, editarPaciente, eliminarPaciente, obtenerPaciente } from "../controllers/paciente.controllers.js";

const router = Router();

router.get("/pacientes", obtenerPacientes);

router.post("/pacientes", crearPaciente);

router.put("/pacientes/:id", editarPaciente);

router.delete("/pacientes/:id", eliminarPaciente);

router.get("/pacientes/:id", obtenerPaciente);

export default router;