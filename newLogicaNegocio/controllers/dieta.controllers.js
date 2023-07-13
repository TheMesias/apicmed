import { createDieta, selectAllDietas, selectDietaById, updateDieta, deleteDieta } from '../../newAccesoDatos/dieta.js';
import { vDieta } from '../validations/dataInputs/models.validations.js';

export const obtenerDietas = async (req, res) => {
  try {
    const obj = await selectAllDietas();
    if (!obj) return res.sendStatus(404);
    return res.send(obj);
  } catch (error) {
      console.log("Error", error)
      return res.sendStatus(404)
  }
  
};

export const crearDieta = async (req, res) => {
  try {
      if(vDieta(req.body)){
        const obj = await createDieta(req.body);
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

export const editarDieta = async (req, res) => {
  const { id } = req.params;
  try {
      if(vDieta(req.body)){
          if(await selectDietaById(req.body.cod_dieta)!=="[]"){
            await updateDieta(id, req.body);
            return res.sendStatus(204);
          }else{
              res.status(400).send(`La dieta requerida no existe`);
          }
      }else{
          res.status(400).send(`Por favor ingrese los datos correctamente`);
      }
  } catch (error) {
      console.log("Error", error)
      return res.status(400).send("Algo salió mal :(");
  }
};

export const eliminarDieta = async (req, res) => {
  const { id } = req.params;
  try {
      if(await selectDietaById(id) !== "[]"){
        const obj = await deleteDieta(id);
        if (!obj) return res.sendStatus(404);
        return res.sendStatus(204);
      }else{
          res.status(400).send(`La dieta a eliminar no existe`);
      }
  }catch (error) {
      console.log("Error", error)
      return res.sendStatus(404);
  }
  
};

export const obtenerDieta = async (req, res) => {
  try {
    const { id } = req.params;
    const obj = await selectDietaById(id);
    if (!obj) return res.sendStatus(404).send(`La dieta requerido no existe`);
    return res.send(obj);
  } catch (error) {
    console.log("Error", error)
    return res.sendStatus(404)
  }
  
};