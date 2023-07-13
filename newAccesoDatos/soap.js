import { soap } from '../basedatos/models/modelsBD.js';
import { Op } from "sequelize";

//Insert 
export async function createSoap(data) {
    try {
        const nsoap = await soap.create({
            'cod_consulta':data.cod_consulta,
            'consulta_anterior': data.consulta_anterior,
            'des_subjetiva': data.des_subjetiva,
            'des_objetiva': data.des_objetiva,
            'des_evaluacion': data.des_evaluacion,
            'des_plan': data.des_plan
        }, { fields: ['cod_consulta','consulta_anterior', 'des_subjetiva', 'des_objetiva', 'des_evaluacion', 'des_plan'] });
        console.log(`Nuevo soap ${nsoap.cod_consulta} creado con exito`);
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}
//Select all 
export async function selectAllSoaps() {
    const allSP = await soap.findAll();
    const obj = JSON.stringify(allSP, null, 2);
    return obj;
}
//Select by id
export async function selectSoapById(id) {
    const SP = await soap.findAll({
        where: {
            cod_consulta: {
                [Op.eq]: id
            }
        }
    });
    const obj = JSON.stringify(SP, null, 2);
    return obj;
}
//Update
export async function updateSoap(id, data) {
    try {
        const USP = await soap.update({
            consulta_anterior: data.consulta_anterior,
            des_subjetiva: data.des_subjetiva,
            des_objetiva: data.des_objetiva,
            des_evaluacion: data.des_evaluacion,
            des_plan: data.des_plan
        }, {
            where: {
                cod_consulta: {
                    [Op.eq]: id
                }
            }
        });
        console.log(`SOAP del paciente ${USP.cod_consulta} actualizada exitosamente`);
    } catch (error) {
        console.log('Ocurrio un error', error);
    }
}
//Delete by id
export async function deleteSoap(id) {
    try {
        await soap.destroy({
            where: {
                cod_consulta: {
                    [Op.eq]: id
                }
            }
        });
    }
    catch (error) {
        console.log('Ocurrió un error', error);
    }
}