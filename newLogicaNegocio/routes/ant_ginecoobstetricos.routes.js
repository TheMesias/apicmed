import { Router } from "express";
import { obtenerAntGinecos, crearAntGineco, editarAntGineco, eliminarAntGineco, obtenerAntGineco } from "../controllers/ant_ginecoobstetricos.controllers.js";

const router = Router();

router.get("/antecendentes-ginecoobstetricos", obtenerAntGinecos);

router.post("/antecendentes-ginecoobstetricos", crearAntGineco);

router.put("/antecendentes-ginecoobstetricos/:id", editarAntGineco);

router.delete("/antecendentes-ginecoobstetricos/:id", eliminarAntGineco);

router.get("/antecendentes-ginecoobstetricos/:id", obtenerAntGineco);

export default router;