import { examen_fisico } from '../basedatos/models/modelsBD.js';
import { Op } from "sequelize";

//Insert 
export async function createExamenFisico(data) {
    try {
        const nExamenFisico = await examen_fisico.create({
            'cod_examen_fisico':data.cod_examen_fisico,
            'visualizacion_medico': data.visualizacion_medico,
            'chequeo_paciente': data.chequeo_paciente,
            'diagnostico': data.diagnostico,
            'conclusion': data.conclusion
        }, { fields: ['cod_examen_fisico','visualizacion_medico', 'chequeo_paciente', 'diagnostico', 'conclusion'] });
        console.log(`Nuevo examen fisico ${nExamenFisico.cod_examen_fisico} creado con exito`);
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}
//Select all 
export async function selectAllExamenesFisicos() {
    const allEM = await examen_fisico.findAll();
    const obj = JSON.stringify(allEM, null, 2);
    return obj;
}
//Select by id
export async function selectExamenFisicoById(id) {
    const EF = await examen_fisico.findAll({
        where: {
            cod_examen_fisico: {
                [Op.eq]: id
            }
        }
    });
    const obj = JSON.stringify(EF, null, 2);
    return obj;
}
//Update
export async function updateExamenFisico(id, data) {
    try {
        const ExF = await examen_fisico.update({
            'visualizacion_medico': data.visualizacion_medico,
            'chequeo_paciente': data.chequeo_paciente,
            'diagnostico': data.diagnostico,
            'conclusion': data.conclusion
        }, {
            where: {
                cod_examen_fisico: {
                    [Op.eq]: id
                }
            }
        });
        console.log(`Examen fisico del paciente ${ExF.cod_examen_fisico} actualizada exitosamente`);
    } catch (error) {
        console.log('Ocurrio un error', error);
    }
}

//Delete by id
export async function deleteExamenFisico(id) {
    try {
        await examen_fisico.destroy({
            where: {
                cod_examen_fisico: {
                    [Op.eq]: id
                }
            }
        });
    }
    catch (error) {
        console.log('Ocurrió un error', error);
    }
}