import { historial_medico } from '../basedatos/models/modelsBD.js';
import { Op } from "sequelize";

//Insert 
export async function createHistorialMedico(data) {
    try {
        const nHistMedico = await historial_medico.create({
            'cod_historia':data.cod_historia,
            'num_historia':data.num_historia
            //aqui va una UNIQUE supongo que es autoincremental no la ponga pilas NIX
            
        }, { fields: ['cod_historia','num_historia'] });
        console.log(`Nuevo historial Medico creado con exito`);
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}
//Select all 
export async function selectAllHistorialesMedicos() {
    const allHM = await historial_medico.findAll();
    const obj = JSON.stringify(allHM, null, 2);
    return obj;
}
//Select by id
export async function selectHistorialMedicoById(id) {
    const HM = await historial_medico.findAll({
        where: {
            cod_historia: {
                [Op.eq]: id
            }
        }
    });
    const obj = JSON.stringify(HM, null, 2);
    return obj;
}
//Update
export async function updateHistorialMedico(id, data) {
    try {
        const UHM = await historial_medico.update({
            num_historia:data.num_historia
        }, {
            where: {
                cod_historia: {
                    [Op.eq]: id
                }
            }
        });
        console.log(`Historial medico del paciente actualizada exitosamente`);
    } catch (error) {
        console.log('Ocurrio un error', error);
    }
}
//Delete by id
export async function deleteHistorialMedico(id) {
    try {
        await historial_medico.destroy({
            where: {
                cod_historia: {
                    [Op.eq]: id
                }
            }
        });
    }
    catch (error) {
        console.log('Ocurrió un error', error);
    }
}

//Devolver todos los numeros de historia medica
export async function getNumHistoria() {
    try {
        const hm = await historial_medico.findAll({
            attributes: ['num_historia']
        })
        const objHistorias = JSON.stringify(hm, null, 2);
        return objHistorias;
    } catch (error) {
        console.log(`error al buscar historia`);
    }
}