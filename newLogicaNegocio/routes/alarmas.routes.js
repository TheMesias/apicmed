import { Router } from "express";
import { obtenerAlarmas, crearAlarma, editarAlarma, eliminarAlarma, obtenerAlarma, obtenerPorFecha, cambiarEstado, crearAlarmaMedi } from "../controllers/alarmas.controllers.js";

const router = Router();

router.get("/alarmas", obtenerAlarmas);

router.post("/alarmas-crear", crearAlarmaMedi);

router.put("/alarmas/:id", editarAlarma);

router.delete("/alarmas/:id", eliminarAlarma);

router.get("/alarmas/:id", obtenerAlarma);

router.post("/alarmas-date", obtenerPorFecha);

router.put("/alarmas-actualizar", cambiarEstado)


export default router;