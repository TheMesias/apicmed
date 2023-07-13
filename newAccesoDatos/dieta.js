import { dieta } from '../basedatos/models/modelsBD.js';
import { Op } from "sequelize";

//Insert 
export async function createDieta(data) {
    try {
        const nDieta = await dieta.create({
            'tipo_dieta': data.tipo_dieta,
            'detalle': data.detalle
        }, { fields: ['tipo_dieta','detalle'] });
        console.log(`Nueva dieta creado con exito`);
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}
//Select all 
export async function selectAllDietas() {
    const allD = await dieta.findAll();
    const obj = JSON.stringify(allD, null, 2);
    return obj;
}

//Select by id
export async function selectDietaById(id) {
    const SD = await dieta.findAll({
        where: {
            cod_dieta: {
                [Op.eq]: id
            }
        }
    });
    const obj = JSON.stringify(SD, null, 2);
    return obj;
}
//Update
export async function updateDieta(id, data) {
    try {
        const UD = await dieta.update({
            tipo_dieta: data.dieta,
            detalle: data.detalle
        }, {
            where: {
                cod_dieta: {
                    [Op.eq]: id
                }
            }
        });
        console.log(`DIETA del paciente actualizada exitosamente`);
    } catch (error) {
        console.log('Ocurrio un error', error);
    }
}
//Delete by id
export async function deleteDieta(id) {
    try {
        await dieta.destroy({
            where: {
                cod_dieta: {
                    [Op.eq]: id
                }
            }
        });
    }
    catch (error) {
        console.log('Ocurrió un error', error);
    }
}