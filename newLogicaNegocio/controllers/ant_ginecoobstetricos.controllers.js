import { createAntGineco, selectAllAntGineco, selectAntGinecoById, updateAntGineco, deleteAntGineco } from '../../newAccesoDatos/ant_ginecoobstetricos.js';
import { vAnt_ginecoobstetricos } from '../validations/dataInputs/models.validations.js';

export const obtenerAntGinecos = async (req, res) => {
  try {
      const obj = await selectAllAntGineco();
      if (!obj) return res.sendStatus(404);
      return res.send(obj);
  } catch (error) {
      console.log("Error", error)
      return res.sendStatus(404)
  }
};


export const crearAntGineco = async (req, res) => {
  try {
      if(vAnt_ginecoobstetricos(req.body)){
        if(await selectAntGinecoById(req.body.cod_ant_gine)==="[]"){
          const obj = await createAntGineco(req.body);
          if (!obj) return res.sendStatus(404);
          return res.sendStatus(204);
        }else{
          res.status(400).send(`El AntGine. ingresado ya existe`);
        }
      }else{
        res.status(400).send(`Por favor ingrese los datos correctamente`);
      }
  } catch (error) {
      console.log("Error", error)
      return res.status(400).send("Algo salió mal :(");
  }
};

export const editarAntGineco = async (req, res) => {
  const { id } = req.params;
  try {
      if(vAnt_ginecoobstetricos(req.body)){
          if(await selectAntGinecoById(req.body.cod_ant_gine)!=="[]"){
              await updateAntGineco(id, req.body);
              return res.sendStatus(204);
          }else{
              res.status(400).send(`El AntGine. requerido no existe`);
          }
      }else{
          res.status(400).send(`Por favor ingrese los datos correctamente`);
      }
  } catch (error) {
      console.log("Error", error)
      return res.status(400).send("Algo salió mal :(");
  }
  
};

export const eliminarAntGineco = async (req, res) => {
  try {
      if(await selectAntGinecoById(id) !== "[]"){
        const { id } = req.params;
        const obj = await deleteAntGineco(id);
        if (!obj) return res.sendStatus(404);
        return res.sendStatus(204);
      }else{
          res.status(400).send(`El AntGine. a eliminar no existe`);
      }
  }catch (error) {
      console.log("Error", error)
      return res.sendStatus(404);
  }
  
};

export const obtenerAntGineco = async (req, res) => {
  try {
    const { id } = req.params;
    const obj = await selectAntGinecoById(id);
    if (!obj) return res.sendStatus(404).send(`El AntGine. requerido no existe`);
    return res.send(obj);
  } catch (error) {
      console.log("Error", error)
      return res.sendStatus(404)
  }

};