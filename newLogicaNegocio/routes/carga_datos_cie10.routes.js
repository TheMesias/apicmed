import { Router } from "express";
import { cargarDatosCie10 } from '../controllers/carga_datos_cie10.controlles.js'

const router = Router();

router.post("/enfermedades-cie10/carga-datos-cie10", cargarDatosCie10);

export default router