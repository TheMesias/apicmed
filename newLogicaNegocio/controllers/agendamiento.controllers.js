import { createAgendamiento, selectAllAgendamiento, selectAgendamientoById, updateAgendamiento, deleteAgendamiento } from '../../newAccesoDatos/agendamiento.js';
import { vAgendamiento } from '../validations/dataInputs/models.validations.js';
import { existeCitaOcupada } from '../validations/existencias.js';

export const obtenerAgendamientos = async (req, res) => {
  try {
    const obj = await selectAllAgendamiento();
    if (!obj) return res.sendStatus(404);
    return res.send(obj);
  } catch (error) {
    console.log("Error", error)
    return res.sendStatus(404)
  }
};

export const crearAgendamiento = async (req, res) => {
  try {
    if(vAgendamiento(req.body)){
      if(!await existeCitaOcupada(req.body)){
        const obj = await createAgendamiento(req.body);
        if (!obj) return res.sendStatus(404);
        return res.status(204).send(`Agendamiento creado con éxito`);
      }else{
        res.status(400).send(`No se puede agendar cita con el médico en la fecha y hora ingresadas.`);
      }
    }else{
      res.status(400).send(`Por favor ingrese los datos correctamente`);
    }
  } catch (error) {
    console.log("Error", error)
    res.status(400).send("Algo salió mal :(");
  }
};

export const editarAgendamiento = async (req, res) => {
  const { id } = req.params;
  try {
    if(vAgendamiento(req.body)){
      if(await selectAgendamientoById(id) !== "[]"){
        await updateAgendamiento(id, req.body);
        return res.sendStatus(204);
      }else{
        res.status(400).send(`No existe el agendamiento que quiere editar`);
      }
    }else{
      res.status(400).send(`Por favor ingrese los datos correctamente`);
    }
    
  } catch (error) {
    console.log("Error", error)
    return res.sendStatus(404) 
  }
  
};

export const eliminarAgendamiento = async (req, res) => {
  const { id } = req.params;
  try {
    if(await selectAgendamientoById(id) !== "[]"){
      await deleteAgendamiento(id);
      return res.sendStatus(204);
    }else{
      res.status(400).send(`El agendamiento a eliminar no existe`);
    }
  } catch (error) {
    console.log("Error", error)
    return res.status(400).send("Algo salió mal :(");
  }
};

export const obtenerAgendamiento = async (req, res) => {
  const { id } = req.params;
  try {
    const obj = await selectAgendamientoById(id);
    if (!obj) return res.sendStatus(404).send(`El agendamiento requerido no existe`);
    return res.send(obj);
  } catch (error) {
    console.log("Error", error)
    return res.status(400).send("Algo salió mal :(");
  }
  
};