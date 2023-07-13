import { createAnamnesis, selectAllAnamnesis, selectAnamnesisById, updateAnamnesis, deleteAnamnesis } from '../../newAccesoDatos/anamnesis.js';
import { vAnamnesis } from '../validations/dataInputs/models.validations.js';

export const obtenerTAnamnesis = async (req, res) => {
    try {
        const obj = await selectAllAnamnesis();
        if (!obj) return res.sendStatus(404);
        return res.send(obj);
    } catch (error) {
        console.log("Error", error)
        return res.sendStatus(404)
    }
    
};

export const crearAnamnesis = async (req, res) => {
    try {
        if(vAnamnesis(req.body)){
          if(await selectAnamnesisById(req.body.cod_anamnesis)==="[]"){
            const obj = await createAnamnesis(req.body);
            if (!obj) return res.sendStatus(404);
            return res.sendStatus(204);
          }else{
            res.status(400).send(`La anamnesis ingresada ya existe`);
          }
        }else{
          res.status(400).send(`Por favor ingrese los datos correctamente`);
        }
    } catch (error) {
        console.log("Error", error)
        return res.status(400).send("Algo salió mal :(");
    }
    
};

export const editarAnamnesis = async (req, res) => {
    const { id } = req.params;
    try {
        if(vAnamnesis(req.body)){
            if(await selectAnamnesisById(req.body.cod_anamnesis)!=="[]"){
                await updateAnamnesis(id, req.body);
                return res.sendStatus(204);
            }else{
                res.status(400).send(`La anamnesis requerida no existe`);
            }
        }else{
            res.status(400).send(`Por favor ingrese los datos correctamente`);
        }
    } catch (error) {
        console.log("Error", error)
        return res.status(400).send("Algo salió mal :(");
    }
};

export const eliminarAnamnesis = async (req, res) => {
    const { id } = req.params;
    try {
        if(await selectAnamnesisById(id) !== "[]"){
            const obj = await deleteAnamnesis(id);
            if (!obj) return res.sendStatus(404);
            return res.sendStatus(204);
        }else{
            res.status(400).send(`La anamnesis a eliminar no existe`);
        }
    }catch (error) {
        console.log("Error", error)
        return res.sendStatus(404);
    }
    
};

export const obtenerAnamnesis = async (req, res) => {
    try {
        const { id } = req.params;
        const obj = await selectAnamnesisById(id);
        if (!obj) return res.sendStatus(404).send(`La anamnesis requerido no existe`);
        return res.send(obj);
    } catch (error) {
        console.log("Error", error)
        return res.sendStatus(404)
    }
   
};