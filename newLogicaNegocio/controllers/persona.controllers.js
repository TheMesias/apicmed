import { createPersona, selectAllPersonas, selectPersonaById, updatePersona, deletePersona, selectPersonaByCi, getUserMobile, getUserMobileLogin, obtMedicamentPer, obtDietaPer, obtRecetaMed, obtPersonaCed } from '../../newAccesoDatos/persona.js';
import { vDatosPersona } from '../validations/dataInputs/models.validations.js';
import { buscarPersonaByCi } from '../validations/existencias.js';
import { selectRolById } from '../../newAccesoDatos/rol.js';


export const obtenerPersonas = async (req, res) => {

  const obj = await selectAllPersonas();
  return res.send(obj);

};

export const crearPersona = async (req, res) => {

  try {
    if (vDatosPersona(req.body)) {
      if (await buscarPersonaByCi(req.body) === false) {
        console.log(req.body.cod_rol)
        if (await selectRolById(req.body.cod_rol) !== "[]") {
          await createPersona(req.body);
          res.status(201).send('Persona creada');
        } else {
          res.status(400).send(`No existe el rol ${req.body.cod_rol}`);
        }
      } else {
        res.status(400).send(`No puede volver a ingresar un persona con CI ${req.body.cedula}`);
      }
    } else {
      res.status(400).send('Error: uno o varios datos son icorrectos');
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const editarPersona = async (req, res) => {

  try {
    if (vDatosPersona(req.body)) {
      const { id } = req.params;
      if (await selectPersonaById(id) !== "[]") {
        if (await selectRolById(req.body.cod_rol) !== "[]") {
          await updatePersona(id, req.body);
          res.status(200).send('Persona editada');
        } else {
          res.status(400).send(`No existe el rol ${req.body.cod_rol}`);
        }
      } else {
        res.status(400).send(`No puede editar la persona,\nno existe persona con ID: ${id}`);
      }
    } else {
      res.status(400).send('Error: uno o varios datos son icorrectos');
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const eliminarPersona = async (req, res) => {

  try {
    const { id } = req.params;
    if (await selectPersonaById(id) == '[]') {
      res.status(400).send(`No puede eliminar la persona,\n no existe una persona con ID: ${id}`);
    } else {
      await deletePersona(id);
      res.status(201).send('Persona eliminada');
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const obtenerPersona = async (req, res) => {

  const { id } = req.params;
  const obj = await selectPersonaById(id);

  if (obj !== "[]") {
    return res.send(obj);
  } else {
    res.send(`No se encontro persona con ID: ${id}`)
  }

};

export const obtenerPersonaByCi = async (req, res) => {

  const { id } = req.params;
  const obj = await selectPersonaByCi(id);

  if (obj !== "[]") {
    return res.send(obj);
  } else {
    res.send(`No se encontro persona con CI: ${id}`)
  }

};

export const obtenerUsuariosMovil = async (req, res) => {

    const obj = await getUserMobile();
    return res.send(obj);

};

export const putUsuariosMovil = async (req, res) => {
  try {
    const{ cedula , password } = req.body;

    if(await selectPersonaByCi(cedula) == '[]') {
      res.status(400).send(`No puede encontrar cedula`);
    } else {
      const obj = await getUserMobileLogin(cedula, password);
      res.status(200).send(obj);
    }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }

};

export const obtenerMedicamentosPer = async (req, res) => {
  try {
    const{ cod_persona } = req.body;
    if(await selectPersonaById(cod_persona) == '[]') {
      res.status(400).send(`No puede encontrar codigo persona`);
    } else {
      const obj = await obtMedicamentPer(cod_persona);
      res.status(200).send(obj);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const obtenerDietaPer = async (req, res) => {
  try {
    const{ cod_persona } = req.body;
    if(await selectPersonaById(cod_persona) == '[]') {
      res.status(400).send(`No puede encontrar codigo persona`);
    } else {
      const obj = await obtDietaPer(cod_persona);
      res.status(200).send(obj);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const obtenerReceM = async (req, res) => {
  try {
    const{ cod_persona } = req.body;
    if(await selectPersonaById(cod_persona) == '[]') {
      res.status(400).send(`No puede encontrar codigo persona`);
    } else {
      const obj = await obtRecetaMed(cod_persona);
      res.status(200).send(obj);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const obtenerPorCedula = async (req, res) =>{
  try {
    const{ cedula_persona } = req.body;
    if(await selectPersonaByCi(cedula_persona) == '[]') {
      res.status(400).send(`No puede encontrar cedula persona`);
    } else {
      const obj = await obtPersonaCed(cedula_persona);
      res.status(200).send(obj);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

}
