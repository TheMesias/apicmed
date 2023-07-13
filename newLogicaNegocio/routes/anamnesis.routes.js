import { Router } from "express";
import { obtenerTAnamnesis, crearAnamnesis, editarAnamnesis, eliminarAnamnesis, obtenerAnamnesis } from "../controllers/anamnesis.controllers.js";

const router = Router();

router.get("/anamnesis", obtenerTAnamnesis);

router.post("/anamnesis", crearAnamnesis);

router.put("/anamnesis/:id", editarAnamnesis);

router.delete("/anamnesis/:id", eliminarAnamnesis);

router.get("/anamnesis/:id", obtenerAnamnesis);

export default router;