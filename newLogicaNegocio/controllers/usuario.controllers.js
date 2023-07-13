import { createUsuario, selectAllUsuarios, selectUsuarioById, updateUsuario, deleteUsuario, updateUltAccess } from '../../newAccesoDatos/usuario.js';
import { vDatosUsuario, vDatosUsuarioEditar } from '../validations/dataInputs/models.validations.js';
import { existeCorreo } from '../validations/existencias.js'
import { selectPersonaById } from '../../newAccesoDatos/persona.js';


export const obtenerUsuarios = async (req, res) => {

  const obj = await selectAllUsuarios();
  return res.send(obj);

};

export const crearUsuario = async (req, res) => {

  try {
    if (vDatosUsuario(req.body)) {
      if (await selectPersonaById(req.body.cod_usuario) !== "[]") {
        if (await selectUsuarioById(req.body.cod_usuario) === "[]") {
          if (await existeCorreo(req.body) === false) {
            await createUsuario(req.body);
            res.status(201).send('Usuario creado');
          } else {
            res.status(400).send(`No se puede ingresar el usuario,\nya existe un usuario con el e-mail ${req.body.email}`);
          }
        } else {
          res.status(400).send(`No puede volver a ingresar el usuario con ID ${req.body.cod_usuario}`);
        }
      } else {
        res.status(400).send(`No pude crear el usuario\nno existe una persona con ID ${req.body.cod_usuario}`);
      }
    } else {
      res.status(400).send('Error: uno o varios datos son icorrectos');
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const editarUsuario = async (req, res) => {

  try {
    if (vDatosUsuarioEditar(req.body)) {
      const { id } = req.params;
      if (await selectUsuarioById(id) !== "[]") {
        //if (await existeCorreo(req.body) === false) {
        await updateUsuario(id, req.body);
        res.status(201).send('Usuario editado');
        //} else {
        //  res.status(400).send(`No se puede editar el usuario,\nya existe un usuario con el e-mail ${req.body.email}`);
        //}
      } else {
        res.status(400).send(`No puede editar el usuario,\nno existe usuario con ID: ${id}`);
      }
    } else {
      res.status(400).send('Error: uno o varios datos son icorrectos');
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const eliminarUsuario = async (req, res) => {

  try {
    const { id } = req.params;
    if (await selectUsuarioById(id) !== "[]") {
      await deleteUsuario(id);
      res.status(201).send('Usuario eliminado');
    } else {
      res.status(400).send(`No puede eliminar el usuario,\nno existe usuario con ID: ${id}`);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

export const obtenerUsuario = async (req, res) => {

  const { id } = req.params;
  const obj = await selectUsuarioById(id);
    
  if (obj !== "[]") {
    return res.send(obj);
  } else {
    res.send(`No se encontro usuario con ID: ${id}`)
  }

};

export const actualizarUltAcess = async (req,res) => {
  //const { cod_usuario } = req.body;
  //await updateUltAccess(cod_usuario, req.body);

  //res.status(201).send('Fecha de ultimo acceso editada');
  try{
    const { cod_usuario } = req.body;
    if(await selectUsuarioById(cod_usuario) !== "[]") {
      await updateUltAccess(cod_usuario, req.body);
        res.status(201).send('Fecha de ultimo acceso editada');
    }
    else{
      res.status(400).send(`No puede editar el usuario,\nno existe usuario con ID: ${cod_usuario}`);
    }
  }
  catch(error){
    return res.status(500).json({ message: error.message });
  }

  /*try {
    if (vDatosUsuarioEditar(req.body)) {
      const { cod_usuario } = req.body;
      if (await selectUsuarioById(id) !== "[]") {
        await updateUltAccess(cod_usuario, req.body);
        res.status(201).send('Fecha de ultimo acceso editada');
      } else {
        res.status(400).send(`No puede editar el usuario,\nno existe usuario con ID: ${id}`);
      }
    } else {
      res.status(400).send('Error: uno o varios datos son icorrectos');
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }*/

}