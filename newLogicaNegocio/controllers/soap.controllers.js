import { createSoap, selectAllSoaps, selectSoapById, updateSoap, deleteSoap } from '../../newAccesoDatos/soap.js'
import { vDatosSoap, vDatosSoapEditar } from '../validations/dataInputs/models.validations.js';
import { selectConsultaMedicaById } from '../../newAccesoDatos/consulta_medica.js'

export const obtenerSoaps = async (req, res) => {

    const obj = await selectAllSoaps();
    return obj;

};

export const crearSoap = async (req, res) => {

    try {
        if (vDatosSoap(req.body)) {
            if (await selectSoapById(req.body.cod_consulta) === "[]") {
                if (await selectConsultaMedicaById(req.body.cod_consulta) !== "[]") {
                    if (await selectConsultaMedicaById(req.body.consulta_anterior) !== "[]") {
                        await createSoap(req.body);
                        res.status(201).send('SOAP creado');
                    } else {
                        res.status(400).send(`No pude crear SOAP\nno existe una consulta medica anterior con ID ${req.body.consulta_anterior}`);
                    }
                } else {
                    res.status(400).send(`No pude crear SOAP\nno existe una consulta medica con ID ${req.body.cod_consulta}`);
                }
            } else {
                res.status(400).send(`No puede volver a ingresar SOAP con ID ${req.body.cod_consulta}`);
            }
        } else {
            res.status(400).send('Error: uno o varios datos son icorrectos');
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const editarSoap = async (req, res) => {

    try {
        if (vDatosSoapEditar(req.body)) {
            const { id } = req.params;
            if (await selectSoapById(id) !== "[]") {
                if (await selectConsultaMedicaById(req.body.consulta_anterior) !== "[]") {
                    await updateSoap(id, req.body);
                    res.status(201).send('SOAP editado');
                } else {
                    res.status(400).send(`No pude crear SOAP\nno existe una consulta medica anterior con ID ${req.body.consulta_anterior}`);
                }
            } else {
                res.status(400).send(`No puede editar SOAP,\nno existe SOAP con ID: ${id}`);
            }
        } else {
            res.status(400).send('Error: uno o varios datos son icorrectos');
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const eliminarSoap = async (req, res) => {

    try {
        const { id } = req.params;
        if (await selectSoapById(id) !== "[]") {
            await deleteSoap(id);
            res.status(201).send('SOAP eliminado');
        } else {
            res.status(400).send(`No puede eliminar SOAP,\nno existe SOAP con ID: ${id}`);
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const obtenerSoap = async (req, res) => {

    const { id } = req.params;
    const obj = await selectSoapById(id);

    if (obj !== "[]") {
        return res.send(obj);
    } else {
        res.send(`No se encontro SOAP con ID: ${id}`)
    }

};