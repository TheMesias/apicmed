import { createConsultaMedica, selectAllConsultasMedicas, selectConsultaMedicaById, updateConsultaMedica, deleteConsultaMedica } from '../../newAccesoDatos/consulta_medica.js';
import { vConsultaMedica } from '../validations/dataInputs/models.validations.js';

export const obtenerConsultasMedicas = async (req, res) => {
  try {
    const obj = await selectAllConsultasMedicas();
    if (!obj) return res.sendStatus(404);
    return res.send(obj);
  } catch (error) {
    console.log("Error", error)
    return res.sendStatus(404)
  }
  
};

export const crearConsultaMedica = async (req, res) => {
  try {
      if(vConsultaMedica(req.body)){
        const obj = await createConsultaMedica(req.body);
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

export const editarConsultaMedica = async (req, res) => {
  const { id } = req.params;
  try {
      if(vConsultaMedica(req.body)){
          if(await selectConsultaMedicaById(req.body.cod_consulta)!=="[]"){
            await updateConsultaMedica(id, req.body);
            return res.sendStatus(204);
          }else{
              res.status(400).send(`La consulta medica requerida no existe`);
          }
      }else{
          res.status(400).send(`Por favor ingrese los datos correctamente`);
      }
  } catch (error) {
      console.log("Error", error)
      return res.status(400).send("Algo salió mal :(");
  }
};

export const eliminarConsultaMedica = async (req, res) => {
  try {
      if(await selectConsultaMedicaById(id) !== "[]"){
        const { id } = req.params;
        const obj = await deleteConsultaMedica(id);
        if (!obj) return res.sendStatus(404);
        return res.sendStatus(204);
      }else{
          res.status(400).send(`La consulta medica a eliminar no existe`);
      }
  }catch (error) {
      console.log("Error", error)
      return res.sendStatus(404);
  }
};

export const obtenerConsultaMedica = async (req, res) => {
  try {
    const { id } = req.params;
    const obj = await selectConsultaMedicaById(id);
    if (!obj) return res.sendStatus(404).send(`La consulta medica requerido no existe`);
    return res.send(obj);
  } catch (error) {
      console.log("Error", error)
      return res.sendStatus(404)
  }
};