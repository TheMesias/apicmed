import { createRol, selectAllRoles, selectRolById, updateRol, deleteRol } from '../../newAccesoDatos/rol.js';
import { vDatosRol } from '../validations/dataInputs/models.validations.js';
import { existeRol } from '../validations/existencias.js';

export const obtenerRoles = async (req, res) => {
  const obj = await selectAllRoles();
  if (!obj) return res.sendStatus(404);
  return res.send(obj);
};

export const crearRol = async (req, res) => {

  try {
    if (vDatosRol(req.body)) {
      if (await existeRol(req.body)) {
        res.status(400).send(`No puede volver a ingresar el rol ${req.body.nombre_rol}`);
      } else {
        await createRol(req.body);
        res.status(201).send('Rol creado');
      }
    } else {
      res.status(400).send('Error: uno o varios datos son icorrectos');
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const editarRol = async (req, res) => {

  try {
    if (vDatosRol(req.body)) {
      const { id } = req.params;
      if (await selectRolById(id) == '[]') {
        res.status(400).send(`No puede editar el rol ${req.body.nombre_rol},\nno existe rol con id: ${id}`);
      } else {
        if (await existeRol(req.body)) {
          res.status(400).send(`No puede editar el rol ${req.body.nombre_rol},\nya existe un rol con ese nombre`);
        } else {
          await updateRol(id, req.body);
          res.status(200).send('Rol editado');
        }
      }
    } else {
      res.status(400).send('Error: uno o varios datos son icorrectos');
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const eliminarRol = async (req, res) => {

  try {
    const { id } = req.params;
    if (await selectRolById(id) == '[]') {
      res.status(400).send(`No puede eliminar el rol,\n no existe un rol con ID: ${id}`);
    } else {
      await deleteRol(id);
      res.status(201).send('Rol eliminado');
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const obtenerRol = async (req, res) => {
  
  const { id } = req.params;
  const obj = await selectRolById(id);
  
  if (obj !== "[]") {
    return res.send(obj);
  } else {
    res.send(`No se encontro rol con ID: ${id}`)
  }

};