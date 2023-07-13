import { Router } from "express";
import { obtenerUsuarios, crearUsuario, editarUsuario, eliminarUsuario, obtenerUsuario, actualizarUltAcess } from "../controllers/usuario.controllers.js";

const router = Router();

router.get("/usuarios", obtenerUsuarios);

router.post("/usuarios", crearUsuario);

router.put("/usuarios/:id", editarUsuario);

router.delete("/usuarios/:id", eliminarUsuario);

router.get("/usuarios/:id", obtenerUsuario);

router.put("/usuario/actualizarultacceso", actualizarUltAcess);

export default router;