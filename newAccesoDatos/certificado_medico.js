import { certificado_medico } from '../basedatos/models/modelsBD.js';
import { Op } from "sequelize";

//Insert 
export async function createCertificadoMedico(data) {
    try {
        const nCertificadoMedico = await certificado_medico.create({
            'cod_cert_medico':data.cod_cert_medico,
            'nombre_certificado': data.nombre_certificado,
            'ruta': data.ruta
        }, { fields: ['cod_cert_medico','nombre_certificado', 'ruta'] });
        console.log(`Nuevo certificado ${nCertificadoMedico.cod_cert_medico} creado con exito`);
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}
//Select all 
export async function selectAllCertificadosMedicos() {
    const allCM = await certificado_medico.findAll();
    const obj = JSON.stringify(allCM, null, 2);
    return obj;
}
//Select by id
export async function selectCertificadoMedicoById(id) {
    const CM = await certificado_medico.findAll({
        where: {
            cod_cert_medico: {
                [Op.eq]: id
            }
        }
    });
    const obj = JSON.stringify(CM, null, 2);
    return obj;
}
//Update
export async function updateCertificadoMedico(id, data) {
    try {
        const UCM = await certificado_medico.update({
            nombre_certificado: data.nombre_certificado,
            ruta: data.ruta
        }, {
            where: {
                cod_cert_medico: {
                    [Op.eq]: id
                }
            }
        });
        console.log(`Certificado medico ${UCM.nombre_certificado} del paciente actualizada exitosamente`);
    } catch (error) {
        console.log('Ocurrio un error', error);
    }
}
//Delete by id
export async function deleteCertificadoMedico(id) {
    try {
        await certificado_medico.destroy({
            where: {
                cod_cert_medico: {
                    [Op.eq]: id
                }
            }
        });
    }
    catch (error) {
        console.log('Ocurrió un error', error);
    }
}