import { createEnfermedadCie10 } from '../../newAccesoDatos/enfermedad_cie10.js';
import { readFileSync } from 'fs';

export const cargarDatosCie10 = async (req, res) => {
    const { cargar } = req.body;
    if (cargar === true) {
        let datos, enfermedades, registros = 0;
        try {
            datos = readFileSync('./newLogicaNegocio/webscraping/cie10_datos.json', { encoding: 'utf-8' });
            enfermedades = JSON.parse(datos);
            try {
                await enfermedades.forEach(element => {
                    createEnfermedadCie10(element);
                    registros++;
                });
                res.status(200).send(`Datos de enfermedades cie10 cargados con éxito, total = ${registros}`);
            } catch (error) {
                console.log('Error al cargar archivo .json de enfermedades', error);
            }
        } catch {
            res.status(500).send('No se puede cargar datos de las enfermedades, datos inexistentes');
        }
    } else {
        res.status(200).send('No se realizó la carga de datos de las enfermedades cie10');
    }
}