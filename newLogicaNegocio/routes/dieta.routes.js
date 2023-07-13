import { Router } from "express";
import { obtenerDietas, crearDieta, editarDieta, eliminarDieta, obtenerDieta } from "../controllers/dieta.controllers.js";

const router = Router();

router.get("/dietas", obtenerDietas);

router.post("/dietas", crearDieta);

router.put("/dietas/:id", editarDieta);

router.delete("/dietas/:id", eliminarDieta);

router.get("/dietas/:id", obtenerDieta);

export default router;