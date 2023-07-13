import { Router } from "express";
import { obtenerPersonas, crearPersona, editarPersona, eliminarPersona, obtenerPersona, obtenerPersonaByCi, obtenerUsuariosMovil, putUsuariosMovil, obtenerMedicamentosPer, obtenerDietaPer, obtenerReceM, obtenerPorCedula} from "../controllers/persona.controllers.js";

const router = Router();

router.get("/personas", obtenerPersonas);

router.post("/personas", crearPersona);

router.put("/personas/:id", editarPersona);

router.delete("/personas/:id", eliminarPersona);

router.get("/personas/:id", obtenerPersona);

router.get("/personas/ci/:id", obtenerPersonaByCi);

router.get("/personas/usuarios/mobile", obtenerUsuariosMovil);

router.post("/personas/usuarios/mobile", putUsuariosMovil);

router.post("/persona/paciente/medicamentos", obtenerMedicamentosPer);

router.post("/persona/paciente/dietas", obtenerDietaPer);

router.post("/persona/paciente/recetaM", obtenerReceM);

router.post("/persona/cedula", obtenerPorCedula);

export default router;