import { createRecetaMedica, selectAllRecetasMedicas, selectRecetaMedicaById, updateRecetaMedica, deleteRecetaMedica } from '../../newAccesoDatos/receta_medica.js';
import { vDatosRecetaMedica, vDatosRecetaMedicaEditar } from '../validations/dataInputs/models.validations.js';
import { selectDietaById } from '../../newAccesoDatos/dieta.js';
import { selectConsultaMedicaById } from '../../newAccesoDatos/consulta_medica.js';

export const obtenerRecetaMedicas = async (req, res) => {

  const obj = await selectAllRecetasMedicas();
  return res.send(obj);

};

export const crearRecetaMedica = async (req, res) => {

  try {
    if (vDatosRecetaMedica(req.body)) {
      if (await selectRecetaMedicaById(req.body.cod_receta) === "[]") {
        if (await selectConsultaMedicaById(req.body.cod_receta) !== "[]") {
          if (await selectDietaById(req.body.cod_dieta) !== "[]") {
            await createRecetaMedica(req.body);
            res.status(201).send('Receta medica creada');
          } else {
            res.status(400).send(`No pude ingresar la receta medica\nno existe una dieta con ID ${req.body.cod_dieta}`);
          }
        } else {
          res.status(400).send(`No pude ingresar la receta medica\nno existe una consulta medica con ID ${req.body.cod_receta}`);
        }
      } else {
        res.status(400).send(`No puede volver a ingresar la receta medica con ID ${req.body.cod_receta}`);
      }
    } else {
      res.status(400).send('Error: uno o varios datos son icorrectos');
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const editarRecetaMedica = async (req, res) => {

  try {
    if (vDatosRecetaMedicaEditar(req.body)) {
      const { id } = req.params;
      if (await selectRecetaMedicaById(id) !== "[]") {
        if (await selectDietaById(req.body.cod_dieta) !== "[]") {
          await updateRecetaMedica(id, req.body);
          res.status(201).send('Receta medica editada');
        } else {
          res.status(400).send(`No pude editar la receta medica\nno existe una dieta con ID ${req.body.cod_dieta}`);
        }
      } else {
        res.status(400).send(`No puede editar el la receta medica,\nno existe un receta medica con ID: ${id}`);
      }
    } else {
      res.status(400).send('Error: uno o varios datos son icorrectos');
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const eliminarRecetaMedica = async (req, res) => {

  try {
    const { id } = req.params;
    if (await selectRecetaMedicaById(id) !== "[]") {
      await deleteRecetaMedica(id);
      res.status(201).send('Receta medica eliminada');
    } else {
      res.status(400).send(`No puede eliminar la receta medica,\nno existe receta medica con ID: ${id}`);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const obtenerRecetaMedica = async (req, res) => {

  const { id } = req.params;
  const obj = await selectRecetaMedicaById(id);

  if (obj !== "[]") {
    return res.send(obj);
  } else {
    res.send(`No se encontro receta medica con ID: ${id}`)
  }

};