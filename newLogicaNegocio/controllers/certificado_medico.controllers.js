import { createCertificadoMedico, selectAllCertificadosMedicos, selectCertificadoMedicoById, updateCertificadoMedico, deleteCertificadoMedico } from '../../newAccesoDatos/certificado_medico.js';
import { vCertificadoMedico } from '../validations/dataInputs/models.validations.js';

export const obtenerCertificadosMedicos = async (req, res) => {
  try {
      const obj = await selectAllCertificadosMedicos();
      if (!obj) return res.sendStatus(404);
      return res.send(obj);
  } catch (error) {
      console.log("Error", error)
      return res.sendStatus(404)
  }
  
};

export const crearCertificadoMedico = async (req, res) => {
  try {
      if(vCertificadoMedico(req.body)){
        if(await selectCertificadoMedicoById(req.body.cod_cert_medico)==="[]"){
          const obj = await createCertificadoMedico(req.body);
          if (!obj) return res.sendStatus(404);
          return res.sendStatus(204);
        }else{
          res.status(400).send(`El certificado ingresado ya existe`);
        }
      }else{
        res.status(400).send(`Por favor ingrese los datos correctamente`);
      }
  } catch (error) {
      console.log("Error", error)
      return res.status(400).send("Algo salió mal :(");
  }
};

export const editarCertificadoMedico = async (req, res) => {
  const { id } = req.params;
    try {
        if(vCertificadoMedico(req.body)){
            if(await selectCertificadoMedicoById(req.body.cod_cert_medico)!=="[]"){
              await updateCertificadoMedico(id, req.body);
              return res.sendStatus(204);
            }else{
                res.status(400).send(`El certificado ingresado no existe`);
            }
        }else{
            res.status(400).send(`Por favor ingrese los datos correctamente`);
        }
    } catch (error) {
        console.log("Error", error)
        return res.status(400).send("Algo salió mal :(");
    }
  try {
      
  } catch (error) {
      console.log("Error", error)
      return res.sendStatus(404) 
  }
};

export const eliminarCertificadoMedico = async (req, res) => {
  const { id } = req.params;
  try {
    if(await selectCertificadoMedicoById(id) !== "[]"){
      const obj = await deleteCertificadoMedico(id);
      if (!obj) return res.sendStatus(404);
      return res.sendStatus(204);
    }else{
        res.status(400).send(`El certificado a eliminar no existe`);
    }
  }catch (error) {
    console.log("Error", error)
    return res.sendStatus(404);
  }
};

export const obtenerCertificadoMedico = async (req, res) => {

  try {
    const { id } = req.params;
    const obj = await selectCertificadoMedicoById(id);
    if (!obj) return res.sendStatus(404).send(`La anamnesis requerido no existe`);
    return res.send(obj);
  } catch (error) {
      console.log("Error", error)
      return res.sendStatus(404)
  }
};