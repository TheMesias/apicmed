import { createExamenFisico, selectAllExamenesFisicos, updateExamenFisico, deleteExamenFisico, selectExamenFisicoById } from '../../newAccesoDatos/examen_fisico.js';
import { vExamenFisico } from '../validations/dataInputs/models.validations.js';

export const obtenerExamenesFisicos = async (req, res) => {
  try {
    const obj = await selectAllExamenesFisicos();
    if (!obj) return res.sendStatus(404);
    return res.send(obj);
  } catch (error) {
      console.log("Error", error)
      return res.sendStatus(404)
  }

};

export const crearExamenFisico = async (req, res) => {
  if(vExamenFisico(req.body)){
    if(await selectExamenFisicoById(req.body.cod_examen_fisico)==="[]"){
      const obj = await createExamenFisico(req.body);
      if (!obj) return res.sendStatus(404);
      return res.sendStatus(204);
    }else{
      res.status(400).send(`El examen fisico ingresado ya existe`);
    }
  }else{
    res.status(400).send(`Por favor ingrese los datos correctamente`);
  }
  
};

export const editarExamenFisico = async (req, res) => {
  const { id } = req.params;
    try {
        if(vExamenFisico(req.body)){
            if(await selectExamenFisicoById(req.body.cod_examen_fisico)!=="[]"){
              await updateExamenFisico(id, req.body);
              return res.sendStatus(204);
            }else{
                res.status(400).send(`El examen fisico requerido no existe`);
            }
        }else{
            res.status(400).send(`Por favor ingrese los datos correctamente`);
        }
    } catch (error) {
        console.log("Error", error)
        return res.status(400).send("Algo salió mal :(");
    }
};

export const eliminarExamenFisico = async (req, res) => {
  const { id } = req.params;
  try {
      if(await selectExamenFisicoById(id) !== "[]"){
        const obj = await deleteExamenFisico(id);
        if (!obj) return res.sendStatus(404);
        return res.sendStatus(204);
      }else{
          res.status(400).send(`El examen fisico a eliminar no existe`);
      }
  }catch (error) {
      console.log("Error", error)
      return res.sendStatus(404);
  }
};

export const obtenerExamenFisico = async (req, res) => {
  try {
    const { id } = req.params;
    const obj = await selectExamenFisicoById(id);
    if (!obj) return res.sendStatus(404).send(`El examen fisico requerido no existe`);
    return res.send(obj);
  } catch (error) {
      console.log("Error", error)
      return res.sendStatus(404)
  }
};