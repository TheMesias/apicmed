import { Router } from "express";
import { obtenerRecetasMedicamentos, crearRecetaMedicamento, editarRecetaMedicamento, eliminarRecetaMedicamento, obtenerRecetaMedicamento, actualizarEstado } from "../controllers/receta_medicamento.controllers.js";

const router = Router();

router.get("/recetas-medicamentos", obtenerRecetasMedicamentos);

router.post("/recetas-medicamentos", crearRecetaMedicamento);

router.put("/recetas-medicamentos/:id", editarRecetaMedicamento);

router.delete("/recetas-medicamentos/:id", eliminarRecetaMedicamento);

router.get("/recetas-medicamentos/:id", obtenerRecetaMedicamento);

router.put("/receta-medicament-end" , actualizarEstado)

export default router;