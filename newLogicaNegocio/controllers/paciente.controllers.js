import { createPaciente, selectAllPacientes, selectPacienteById, updatePaciente, deletePaciente } from '../../newAccesoDatos/paciente.js';
import { vDatosPaciente } from '../validations/dataInputs/models.validations.js';
import {  selectPersonaById } from '../../newAccesoDatos/persona.js';


export const obtenerPacientes = async (req, res) => {

  const obj = await selectAllPacientes();
  return res.send(obj);

};

export const crearPaciente = async (req, res) => {

  try {
    if (vDatosPaciente(req.body)) {
      if (await selectPersonaById(req.body.cod_paciente) !== "[]") {
        if (await selectPacienteById(req.body.cod_paciente) === "[]") {
          await createPaciente(req.body);
          res.status(201).send('Paciente creado');
        } else {
          res.status(400).send(`No puede volver a ingresar al paciente con ID ${req.body.cod_paciente}`);
        }
      } else {
        res.status(400).send(`No pude ingresar el paciente\nno existe una persona con ID ${req.body.cod_paciente}`);
      }
    } else {
      res.status(400).send('Error: uno o varios datos son icorrectos');
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const editarPaciente = async (req, res) => {

  try {
    if (vDatosPaciente(req.body)) {
      const { id } = req.params;
      if (await selectPacienteById(id) !== "[]") {
        await updatePaciente(id, req.body);
        res.status(201).send('Paciente editado');
      } else {
        res.status(400).send(`No puede editar el paciente,\nno existe paciente con ID: ${id}`);
      }
    } else {
      res.status(400).send('Error: uno o varios datos son icorrectos');
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const eliminarPaciente = async (req, res) => {

  try {
    const { id } = req.params;
    if (await selectPacienteById(id) !== "[]") {
      await deletePaciente(id);
      res.status(201).send('Paciente eliminado');
    } else {
      res.status(400).send(`No puede eliminar el paciente,\nno existe paciente con ID: ${id}`);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const obtenerPaciente = async (req, res) => {

  const { id } = req.params;
  const obj = await selectPacienteById(id);
    
  if (obj !== "[]") {
    return res.send(obj);
  } else {
    res.send(`No se encontro paciente con ID: ${id}`)
  }
  
};