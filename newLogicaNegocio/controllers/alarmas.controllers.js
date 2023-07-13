import { createAlarmas, selectAllAlarmas, selectAlarmaById, updateAlarma, deleteAlarma, selectAlarmaByFecha, updateAlarmById, createAlarmasMed } from '../../newAccesoDatos/alarmas.js';
import { selectRecetaMedicamentoById } from '../../newAccesoDatos/receta_medicamento.js';
import { vAlarmas } from '../validations/dataInputs/models.validations.js';


export const obtenerAlarmas = async (req, res) => {
  try {
    const obj = await selectAllAlarmas();
    //if (!obj) return res.sendStatus(404);
    return res.send(obj);
  } catch (error) {
    console.log("Error", error)
    return res.sendStatus(404)
  }
};

export const crearAlarma = async (req, res) => {
  try {
    if(vAlarmas(req.body)){
      if(await selectAlarmaById(req.body.cod_alarma)==="[]"){
        const obj = await createAlarmas(req.body);
        if (!obj) return res.sendStatus(404);
        return res.sendStatus(204);
      }else{
        res.status(400).send(`La alarma ingresada ya existe`);
      }
    }else{
      res.status(400).send(`Por favor ingrese los datos correctamente`);
    }
  } catch (error) {
    console.log("Error", error)
    return res.status(400).send("Algo salió mal :(");
  }
};


export const editarAlarma = async (req, res) => {
  const { id } = req.params;
  try {
    if(vAlarmas(req.body)){
      if(await selectAlarmaById(req.body.cod_alarma)!=="[]"){
        await updateAlarma(id, req.body);
        return res.sendStatus(204);
      }else{
        res.status(400).send(`La alarma requerida no existe`);
      }
    }else{
      res.status(400).send(`Por favor ingrese los datos correctamente`);
    }
  } catch (error) {
    console.log("Error", error)
    return res.status(400).send("Algo salió mal :(");
  }
};

export const eliminarAlarma = async (req, res) => {
  const { id } = req.params;
  try {
    if(await selectAgendamientoById(id) !== "[]"){
      await deleteAlarma(id);
      return res.sendStatus(204);
    }else{
      res.status(400).send(`El agendamiento a eliminar no existe`);
    }
  } catch (error) {
    console.log("Error", error)
    return res.sendStatus(404);
  }

  
};

export const obtenerAlarma = async (req, res) => {
  try {
    const { id } = req.params;
    const obj = await selectAlarmaById(id);
    if (!obj) return res.sendStatus(404).send(`El agendamiento requerido no existe`);
    return res.send(obj);
  } catch (error) {
    console.log("Error", error)
    return res.sendStatus(404)
  }
    
};

export const actualizarEstado = async (req,res) => {
  try{
   const { codrecetamedicamento } = req.body;
   const obj = await buscarFecha(codrecetamedicamento,req.body);
  } catch(error){
    console.log("Error", error)
    return res.sendStatus(404)
  }
};  

export const obtenerPorFecha = async (req,res) => {
  try {
    const { date, cod_receta_medica } = req.body;
    if(await selectRecetaMedicamentoById(cod_receta_medica) == "[]"){
      res.status(400).send(`No puede encontrar codigo receta medica`);
    } else {
      const obj = await selectAlarmaByFecha(date, req.body);
      res.status(200).send(obj);
    }
  } catch (error) {
    console.log("Error", error)
    return res.sendStatus(500)
  }
}

export const cambiarEstado = async (req,res) => {
  try {
    const { cod_alarma } = req.body;
    const obj = await updateAlarmById(cod_alarma, req.body);
    console.log("Exito al cambiar estado" + obj.cod_alarma);
    return res.sendStatus(201)
  } catch (error) {
    console.log("Error", error)
    return res.sendStatus(201)
  }
}

export const crearAlarmaMedi = async (req, res) => {
  try {
    if(vAlarmas(req.body)){
      if(await selectAlarmaById(req.body.cod_alarma)=="[]"){
        const obj = await createAlarmasMed(req.body);
        if (!obj) return res.sendStatus(200);
        return res.sendStatus(404);
      }else{
        res.status(400).send(`La alarma ingresada ya existe`);
      }
    }else{
      res.status(400).send(`Por favor ingrese los datos correctamente`);
    }
  } catch (error) {
    console.log("Error", error)
    return res.status(400).send("Algo salió mal" + error);
  }
};