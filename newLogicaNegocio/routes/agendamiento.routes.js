import { Router } from "express";
import { obtenerAgendamientos, crearAgendamiento, editarAgendamiento, eliminarAgendamiento, obtenerAgendamiento } from "../controllers/agendamiento.controllers.js";

const router = Router();

router.get("/agendamientos", obtenerAgendamientos);

router.post("/agendamientos", crearAgendamiento);

router.put("/agendamientos/:id", editarAgendamiento);

router.delete("/agendamientos/:id", eliminarAgendamiento);

router.get("/agendamientos/:id", obtenerAgendamiento);

export default router;