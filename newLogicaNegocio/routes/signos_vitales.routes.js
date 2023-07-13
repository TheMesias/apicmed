import { Router } from "express";
import { obtenerTSignosVitales, crearSignosVitales, editarSignosVitales, eliminarSignosVitales, obtenerSignosVitales } from "../controllers/signos_vitales.controllers.js";

const router = Router();

router.get("/signos-vitales", obtenerTSignosVitales);

router.post("/signos-vitales", crearSignosVitales);

router.put("/signos-vitales/:id", editarSignosVitales);

router.delete("/signos-vitales/:id", eliminarSignosVitales);

router.get("/signos-vitales/:id", obtenerSignosVitales);

export default router;