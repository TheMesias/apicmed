import { Router } from "express";
import { obtenerRoles, crearRol, editarRol, eliminarRol, obtenerRol } from "../controllers/rol.controllers.js";

const router = Router();

router.get("/roles", obtenerRoles);

router.post("/roles", crearRol);

router.put("/roles/:id", editarRol);

router.delete("/roles/:id", eliminarRol);

router.get("/roles/:id", obtenerRol);

export default router;