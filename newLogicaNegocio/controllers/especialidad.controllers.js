import { createEspecialidad, selectAllEspecialidades, selectEspecialidadById, updateEspecialidad, deleteEspecialidad } from '../../newAccesoDatos/especialidad.js';
import { vEspecialidad } from '../validations/dataInputs/models.validations.js';

export const obtenerEspecialidades = async (req, res) => {
  try {
    const obj = await selectAllEspecialidades();
    if (!obj) return res.sendStatus(404);
    return res.send(obj);
  } catch (error) {
      console.log("Error", error)
      return res.sendStatus(404)
  }
  
};

export const crearEspecialidad = async (req, res) => {
  try {
      if(vEspecialidad(req.body)){
        const obj = await createEspecialidad(req.body);
        if (!obj) return res.sendStatus(404);
        return res.sendStatus(204);
      }else{
        res.status(400).send(`Por favor ingrese los datos correctamente`);
      }
  } catch (error) {
      console.log("Error", error)
      return res.status(400).send("Algo salió mal :(");
  }
  
};

export const editarEspecialidad = async (req, res) => {
  const { id } = req.params;
  try {
      if(vDieta(req.body)){
          if(await selectEspecialidadById(req.body.cod_dieta)!=="[]"){
            await updateEspecialidad(id, req.body);
            return res.sendStatus(204);
          }else{
              res.status(400).send(`La especialidad requerida no existe`);
          }
      }else{
          res.status(400).send(`Por favor ingrese los datos correctamente`);
      }
  } catch (error) {
      console.log("Error", error)
      return res.status(400).send("Algo salió mal :(");
  }
};

export const eliminarEspecialidad = async (req, res) => {
  const { id } = req.params;
  try {
      if(await selectEspecialidadById(id) !== "[]"){
        const obj = await deleteEspecialidad(id);
        if (!obj) return res.sendStatus(404);
        return res.sendStatus(204);
      }else{
          res.status(400).send(`La especialidad a eliminar no existe`);
      }
  }catch (error) {
      console.log("Error", error)
      return res.sendStatus(404);
  }
  
};

export const obtenerEspecialidad = async (req, res) => {
  try {
    const { id } = req.params;
    const obj = await selectEspecialidadById(id);
    if (!obj) return res.sendStatus(404).send(`La dieta requerido no existe`);
    return res.send(obj);
  } catch (error) {
    console.log("Error", error)
    return res.sendStatus(404)
  }
  
};