import { Router } from "express";
import { obtenerCertificadosMedicos, crearCertificadoMedico, editarCertificadoMedico, eliminarCertificadoMedico, obtenerCertificadoMedico } from "../controllers/certificado_medico.controllers.js";

const router = Router();

router.get("/certificados-medicos", obtenerCertificadosMedicos);

router.post("/certificados-medicos", crearCertificadoMedico);

router.put("/certificados-medicos/:id", editarCertificadoMedico);

router.delete("/certificados-medicos/:id", eliminarCertificadoMedico);

router.get("/certificados-medicos/:id", obtenerCertificadoMedico);

export default router;