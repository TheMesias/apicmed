import { Router } from "express";
import { obtenerEnfermedadesCie10, crearEnfermedadCie10, editarEnfermedadCie10, eliminarEnfermedadCie10, obtenerEnfermedadCie10 } from "../controllers/enfermedad_cie10.controllers.js";

const router = Router();

router.get("/enfermedades-cie10", obtenerEnfermedadesCie10);

router.post("/enfermedades-cie10", crearEnfermedadCie10);

router.put("/enfermedades-cie10/:id", editarEnfermedadCie10);

router.delete("/enfermedades-cie10/:id", eliminarEnfermedadCie10);

router.get("/enfermedades-cie10/:id", obtenerEnfermedadCie10);

export default router;