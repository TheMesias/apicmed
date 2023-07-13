import { selectAllRecetaMedicamentos, selectRecetaMedicamentoById, createRecetaMedicamento, updateRecetaMedicamento, deleteRecetaMedicamento, updateEstadoReceta } from '../../newAccesoDatos/receta_medicamento.js';
import { vDatosBody, vDatosRecetaMedicamento, vDatosRecetaMedicamentoEditar } from '../validations/dataInputs/models.validations.js';
import { selectRecetaMedicaById } from '../../newAccesoDatos/receta_medica.js';
import { selectMedicamentoById } from '../../newAccesoDatos/medicamento.js';

export const obtenerRecetasMedicamentos = async (req, res) => {

  const obj = await selectAllRecetaMedicamentos();
  return res.send(obj);

};

export const crearRecetaMedicamento = async (req, res) => {

  try {
    if (vDatosRecetaMedicamento(req.body)) {
      if (await selectRecetaMedicaById(req.body.cod_receta) !== "[]") {
        if (await selectMedicamentoById(req.body.cod_medicamento) !== "[]") {
          await createRecetaMedicamento(req.body);
          res.status(201).send('Receta medicamento creada');
        } else {
          res.status(400).send(`No pude ingresar la receta medicamento\nno existe un medicamento con ID ${req.body.cod_medicamento}`);
        }
      } else {
        res.status(400).send(`No puede ingresar la receta medicamento,\nno existe una receta medica con ID ${req.body.cod_receta}`);
      }
    } else {
      res.status(400).send('Error: uno o varios datos son icorrectos');
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const editarRecetaMedicamento = async (req, res) => {

  try {
    if (vDatosRecetaMedicamentoEditar(req.body)) {
      const { id } = req.params;
      if (await selectRecetaMedicamentoById(id) !== "[]") {
        if (await selectMedicamentoById(req.body.cod_medicamento) !== "[]") {
          await updateRecetaMedicamento(id, req.body);
          res.status(201).send('Receta medicamento editada');
        } else {
          res.status(400).send(`No pude editar la receta medicamento\nno existe un medicamento con ID ${req.body.cod_medicamento}`);
        }
      } else {
        res.status(400).send(`No puede editar el la receta medicamento,\nno existe una receta medicamento con ID: ${id}`);
      }
    } else {
      res.status(400).send('Error: uno o varios datos son icorrectos');
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }

};

export const eliminarRecetaMedicamento = async (req, res) => {

  try {
    const { id } = req.params;
    if (await selectRecetaMedicamentoById(id) !== "[]") {
      await deleteRecetaMedicamento(id);
      res.status(201).send('Receta medicamento eliminada');
    } else {
      res.status(400).send(`No puede eliminar la receta medicamento,\nno existe receta medicamento con ID: ${id}`);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const obtenerRecetaMedicamento = async (req, res) => {

  const { id } = req.params;
  const obj = await selectRecetaMedicamentoById(id);

  if (obj !== "[]") {
    return res.send(obj);
  } else {
    res.send(`No se encontro receta medicamento con ID: ${id}`)
  }

};

export const actualizarEstado = async (req, res) => {
  try {
    if (vDatosBody(req.body)) {
      const { id } = req.body;
      if (await selectRecetaMedicamentoById(id) !== "[]") {
        if (await selectMedicamentoById(req.body.id) !== "[]") {
          await updateEstadoReceta(id);
          res.status(201).send('Receta medicamento editada');
        } else {
          res.status(400).send(`No pude editar la receta medicamento\nno existe un medicamento con ID ${req.body.cod_medicamento}`);
        }
      } else {
        res.status(400).send(`No puede editar el la receta medicamento,\nno existe una receta medicamento con ID: ${id}`);
      }
    } else {
      res.status(400).send('Error: uno o varios datos son icorrectos');
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}