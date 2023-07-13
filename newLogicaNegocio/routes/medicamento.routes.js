import { Router } from "express";
import { obtenerMedicamentos, crearMedicamento, editarMedicamento, eliminarMedicamento, obtenerMedicamento } from "../controllers/medicamento.controllers.js";

const router = Router();

router.get("/medicamentos", obtenerMedicamentos);

router.post("/medicamentos", crearMedicamento);

router.put("/medicamentos/:id", editarMedicamento);

router.delete("/medicamentos/:id", eliminarMedicamento);

router.get("/medicamentos/:id", obtenerMedicamento);

export default router;