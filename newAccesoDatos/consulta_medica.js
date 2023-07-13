import { consulta_medica } from '../basedatos/models/modelsBD.js';
import { Op } from "sequelize";

//Insert 
export async function createConsultaMedica(data) {
    try {
        const nConsultaMed = await consulta_medica.create({
            'cod_historia':data.cod_historia
        }, { fields: ['cod_historia'] });
        console.log(`Nueva consulta ${nConsultaMed.cod_consulta} creado con exito`);
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}
//Select all 
export async function selectAllConsultasMedicas() {
    const allCM = await consulta_medica.findAll();
    const obj = JSON.stringify(allCM, null, 2);
    return obj;
}
//Select by id
export async function selectConsultaMedicaById(id) {
    const CM = await consulta_medica.findAll({
        where: {
            cod_consulta: {
                [Op.eq]: id
            }
        }
    });
    const obj = JSON.stringify(CM, null, 2);
    return obj;
}
//Update
export async function updateConsultaMedica(id, data) {
    try {
        const UCM = await consulta_medica.update({
            cod_historia:data.cod_historia
        }, {
            where: {
                cod_consulta: {
                    [Op.eq]: id
                }
            }
        });
        console.log(`Consulta Medica del paciente actualizada exitosamente`);
    } catch (error) {
        console.log('Ocurrio un error', error);
    }
}
//Delete by id
export async function deleteConsultaMedica(id) {
    try {
        await consulta_medica.destroy({
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