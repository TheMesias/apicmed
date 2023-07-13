import { Router } from "express";
import { obtenerConsultasMedicas, crearConsultaMedica, editarConsultaMedica, eliminarConsultaMedica, obtenerConsultaMedica } from "../controllers/consulta_medica.controllers.js";

const router = Router();

router.get("/consultas-medicas", obtenerConsultasMedicas);

router.post("/consultas-medicas", crearConsultaMedica);

router.put("/consultas-medicas/:id", editarConsultaMedica);

router.delete("/consultas-medicas/:id", eliminarConsultaMedica);

router.get("/consultas-medicas/:id", obtenerConsultaMedica);

export default router;