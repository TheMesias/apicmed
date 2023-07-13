import { createMedico, selectAllMedicos, selectMedicoById, updateMedico, deleteMedico } from '../../newAccesoDatos/medico.js';
import { vDatosMedico, vDatosMedicoEditar } from '../validations/dataInputs/models.validations.js';
import { selectPersonaById } from '../../newAccesoDatos/persona.js'
import { selectEspecialidadById } from '../../newAccesoDatos/especialidad.js';

export const obtenerMedicos = async (req, res) => {

  const obj = await selectAllMedicos();
  return res.send(obj);

};

export const crearMedico = async (req, res) => {

  try {
    if (vDatosMedico(req.body)) {
      if (await selectPersonaById(req.body.cod_medico) !== "[]") {
        if (await selectMedicoById(req.body.cod_medico) === "[]") {
          if (await selectEspecialidadById(req.body.cod_especialidad) !== "[]") {
            await createMedico(req.body);
            res.status(201).send('Medico creado');
          } else {
            res.status(400).send(`No pude ingresar el medico\nno existe una especialidad con ID ${req.body.cod_especialidad}`);
          }
        } else {
          res.status(400).send(`No puede volver a ingresar el medico con ID ${req.body.cod_medico}`);
        }
      } else {
        res.status(400).send(`No pude ingresar el medico\nno existe una persona con ID ${req.body.cod_medico}`);
      }
    } else {
      res.status(400).send('Error: uno o varios datos son icorrectos');
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const editarMedico = async (req, res) => {

  try {
    if (vDatosMedicoEditar(req.body)) {
      const { id } = req.params;
      if (await selectMedicoById(id) !== "[]") {
        if (await selectEspecialidadById(req.body.cod_especialidad) !== "[]") {
          await updateMedico(req.params.id, req.body);
          res.status(201).send('Medico editado');
        } else {
          res.status(400).send(`No se puede editar el medico,\nya existe una especialidad con ID ${req.body.cod_especialidad}`);
        }
      } else {
        res.status(400).send(`No puede editar el medico,\nno existe un medico con ID: ${id}`);
      }
    } else {
      res.status(400).send('Error: uno o varios datos son icorrectos');
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const eliminarMedico = async (req, res) => {

  try {
    const { id } = req.params;
    if (await selectMedicoById(id) !== "[]") {
      await deleteMedico(id);
      res.status(201).send('Medico eliminado');
    } else {
      res.status(400).send(`No puede eliminar el medico,\nno existe medico con ID: ${id}`);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const obtenerMedico = async (req, res) => {

  const { id } = req.params;
  const obj = await selectMedicoById(id);
    
  if (obj !== "[]") {
    return res.send(obj);
  } else {
    res.send(`No se encontro medico con ID: ${id}`)
  }

};




export const ObtenerPerMedEsp = async (req, res) => {
  const { id } = req.params; 
  const objper = await selectPersonaById(id);
  const objperjson = JSON.parse(objper)[0];
  const objmed = await selectMedicoById(id);
  const objmedjson = JSON.parse(objmed)[0];
  const objesp = await selectEspecialidadById(objmedjson.cod_especialidad);
  const objespjson = JSON.parse(objesp)[0];
  objperjson['cod_medico'] = objmedjson.cod_medico
  objperjson['firma_electronica'] = objmedjson.firma_electronica
  objperjson['firma_electronica'] = objmedjson.firma_electronica
  objperjson['cod_especialidad'] = objespjson.cod_especialidad
  objperjson['nombre_especialidad'] = objespjson.nombre_especialidad

  res.send(objperjson)
}