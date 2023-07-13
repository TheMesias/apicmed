import { createSignosVitales, selectAllSignosVitales, selectSignosVitalesById, updateSignosVitales, deleteSignosVitales } from '../../newAccesoDatos/signos_vitales.js';
import { vDatosSignosVitales, vDatosSignosVitalesEditar } from '../validations/dataInputs/models.validations.js';
import { selectExamenFisicoById } from '../../newAccesoDatos/examen_fisico.js'


export const obtenerTSignosVitales = async (req, res) => {

  const obj = await selectAllSignosVitales();
  return res.send(obj);

};

export const crearSignosVitales = async (req, res) => {

  try {
    if (vDatosSignosVitales(req.body)) {
      if (await selectSignosVitalesById(req.body.cod_signos_vitales) === "[]") {
        if (await selectExamenFisicoById(req.body.cod_signos_vitales) !== "[]") {
          await createSignosVitales(req.body);
          res.status(201).send('signos vitales creados');
        } else {
          res.status(400).send(`No pude crear signos vitales\nno existe examen fisico con ID ${req.body.cod_signos_vitales}`);
        }
      } else {
        res.status(400).send(`No puede volver a ingresar signos vitales con ID ${req.body.cod_signos_vitales}`);
      }
    } else {
      res.status(400).send('Error: uno o varios datos son icorrectos');
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const editarSignosVitales = async (req, res) => {

  try {
    if (vDatosSignosVitalesEditar(req.body)) {
      const { id } = req.params;
      if ((await selectSignosVitalesById(id)) !== "[]") {
        await updateSignosVitales(id, req.body);
        res.status(201).send("signos vitales editados");
      } else {
        res
          .status(400)
          .send(`No puede editar signos vitales,\nno existen signos vitales con ID: ${id}`);
      }
    } else {
      res.status(400).send('Error: uno o varios datos son icorrectos');
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const eliminarSignosVitales = async (req, res) => {

  try {
    const { id } = req.params;
    if (await selectSignosVitalesById(id) !== "[]") {
      await deleteSignosVitales(id);
      res.status(201).send('signos vitales eliminado');
    } else {
      res.status(400).send(`No puede eliminar signos vitales,\nno existen signos vitales con ID: ${id}`);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const obtenerSignosVitales = async (req, res) => {

  const { id } = req.params;
  const obj = await selectSignosVitalesById(id);

  if (obj !== "[]") {
      return res.send(obj);
  } else {
      res.send(`No se encontro signos vitales con ID: ${id}`)
  }

};