import { Router } from "express";
import { obtenerRecetaMedicas, crearRecetaMedica, editarRecetaMedica, eliminarRecetaMedica, obtenerRecetaMedica } from "../controllers/receta_medica.controllers.js";

const router = Router();

router.get("/recetas-medicas", obtenerRecetaMedicas);

router.post("/recetas-medicas", crearRecetaMedica);

router.put("/recetas-medicas/:id", editarRecetaMedica);

router.delete("/recetas-medicas/:id", eliminarRecetaMedica);

router.get("/recetas-medicas/:id", obtenerRecetaMedica);

export default router;