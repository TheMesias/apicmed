import { Router } from "express";
import { obtenerSoaps, crearSoap, editarSoap, eliminarSoap, obtenerSoap } from "../controllers/soap.controllers.js";

const router = Router();

router.get("/soap", obtenerSoaps);

router.post("/soap", crearSoap);

router.put("/soap/:id", editarSoap);

router.delete("/soap/:id", eliminarSoap);

router.get("/soap/:id", obtenerSoap);

export default router;