import { createEnfermedadCie10, selectAllEnfermedadesCie10, selectEnfermedadCie10ById, updateEnfermedadCie10, deleteEnfermedadCie10 } from '../../newAccesoDatos/enfermedad_cie10.js';

export const obtenerEnfermedadesCie10 = async (req, res) => {
  const obj = await selectAllEnfermedadesCie10();
  if (!obj) return res.sendStatus(404);
  return res.send(obj);
};

export const crearEnfermedadCie10 = async (req, res) => {
  const obj = await createEnfermedadCie10(req.body);
  if (!obj) return res.sendStatus(404);
  return res.sendStatus(204);
};

export const editarEnfermedadCie10 = async (req, res) => {
  const { id } = req.params;
  try {
      await updateEnfermedadCie10(id, req.body);
      return res.sendStatus(204);
  } catch (error) {
      console.log("Error", error)
      return res.sendStatus(404) 
  }
};

export const eliminarEnfermedadCie10 = async (req, res) => {
  const { id } = req.params;
  const obj = await deleteEnfermedadCie10(id);
  if (!obj) return res.sendStatus(404);
  return res.sendStatus(204);
};

export const obtenerEnfermedadCie10 = async (req, res) => {
  const { id } = req.params;
  const obj = await selectEnfermedadCie10ById(id);
  if (!obj) return res.sendStatus(404);
  return res.send(obj);
};