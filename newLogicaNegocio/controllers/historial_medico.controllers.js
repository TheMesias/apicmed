import { createHistorialMedico, selectAllHistorialesMedicos, selectHistorialMedicoById, updateHistorialMedico, deleteHistorialMedico } from '../../newAccesoDatos/historial_medico.js';
import { vHistorial_medico } from '../validations/dataInputs/models.validations.js';

export const obtenerHistorialesMedicos = async (req, res) => {
  try {
    const obj = await selectAllHistorialesMedicos();
    if (!obj) return res.sendStatus(404);
    return res.send(obj);
  } catch (error) {
      console.log("Error", error)
      return res.sendStatus(404)
  }
  
};

export const crearHistorialMedico = async (req, res) => {
  try {
      if(vHistorial_medico(req.body)){
        if(await selectHistorialMedicoById(req.body.cod_historia)==="[]"){
          const obj = await createHistorialMedico(req.body);
          if (!obj) return res.sendStatus(200);
          return res.sendStatus(204);
        }else{
          res.status(400).send(`El historial ingresado ya existe`);
        }
      }else{
        res.status(400).send(`Por favor ingrese los datos correctamente`);
      }
  } catch (error) {
      console.log("Error", error)
      return res.status(400).send("Algo salió mal :(");
  }
  
};

export const editarHistorialMedico = async (req, res) => {
  const { id } = req.params;
  try {
      if(vHistorial_medico(req.body)){
          if(await selectHistorialMedicoById(req.body.cod_historia)!=="[]"){
            await updateHistorialMedico(id, req.body);
            return res.sendStatus(204);
          }else{
              res.status(400).send(`El historial requerido no existe`);
          }
      }else{
          res.status(400).send(`Por favor ingrese los datos correctamente`);
      }
  } catch (error) {
      console.log("Error", error)
      return res.status(400).send("Algo salió mal :(");
  }
};

export const eliminarHistorialMedico = async (req, res) => {
  try {
      if(await selectHistorialMedicoById(id) !== "[]"){
        const { id } = req.params;
        const obj = await deleteHistorialMedico(id);
        if (!obj) return res.sendStatus(404);
        return res.sendStatus(204);
      }else{
          res.status(400).send(`El historial a eliminar no existe`);
      }
  }catch (error) {
      console.log("Error", error)
      return res.sendStatus(404);
  }
};

export const obtenerHistorialMedico = async (req, res) => {
  try {
    const { id } = req.params;
    const obj = await selectHistorialMedicoById(id);
    if (!obj) return res.sendStatus(404).send(`El historial requerido no existe`);
    return res.send(obj);
  } catch (error) {
      console.log("Error", error)
      return res.sendStatus(404)
  }
  
};