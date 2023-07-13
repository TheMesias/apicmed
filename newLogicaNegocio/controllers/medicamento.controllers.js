import { createMedicamento, selectAllMedicamentos, selectMedicamentoById, updateMedicamento, deleteMedicamento } from '../../newAccesoDatos/medicamento.js';
import { vDatosMedicamento } from '../validations/dataInputs/models.validations.js';
import { existeMedicamento } from '../validations/existencias.js';

export const obtenerMedicamentos = async (req, res) => {

  const obj = await selectAllMedicamentos();
  return res.send(obj);

};

export const crearMedicamento = async (req, res) => {

  try {
    if (vDatosMedicamento(req.body)) {
      if (await existeMedicamento(req.body)) {
        res.status(400).send(`No puede volver a ingresar el medicamento ${req.body.nombre}`);
      } else {
        await createMedicamento(req.body);
        res.status(201).send('Medicamento creado');
      }
    } else {
      res.status(400).send('Error: uno o varios datos son icorrectos');
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const editarMedicamento = async (req, res) => {

  try {
    if (vDatosMedicamento(req.body)) {
      const { id } = req.params;
      if (await selectMedicamentoById(id) !== '[]') {
        if (await existeMedicamento(req.body) === false) {
          await updateMedicamento(id, req.body);
          res.status(200).send('Medicamento editado');
        } else {
          res.status(400).send(`No puede editar el medicamento ${req.body.nombre},\nya existe un medicamento con ese nombre`);
        }
      } else {
        res.status(400).send(`No puede editar el medicamento ${req.body.nombre},\nno existe medicamento con id: ${id}`);
      }
    } else {
      res.status(400).send('Error: uno o varios datos son icorrectos');
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const eliminarMedicamento = async (req, res) => {

  try {
    const { id } = req.params;
    if (await selectMedicamentoById(id) !== '[]') {
      await deleteMedicamento(id);
      res.status(201).send('Medicamento eliminado');
    } else {
      res.status(400).send(`No puede eliminar el medicamento,\n no existe un medicamento con ID: ${id}`);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const obtenerMedicamento = async (req, res) => {

  const { id } = req.params;
  const obj = await selectMedicamentoById(id);
  
  if (obj !== "[]") {
    return res.send(obj);
  } else {
    res.send(`No se encontro medicamento con ID: ${id}`)
  }

};