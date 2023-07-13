import { enfermedad_cie10 } from '../basedatos/models/modelsBD.js';
import { Op } from "sequelize";

//Insert 
export async function createEnfermedadCie10(data) {
    try {
        const nEnferCie = await enfermedad_cie10.create({
            'capitulo':data.capitulo,
            'nom_capitulo': data.nom_capitulo,
            'cod_cie10_3': data.cod_cie10_3,
            'descrip_cie10_3': data.descrip_cie10_3,
            'cod_cie10_4': data.cod_cie10_4,
            'descrip_cie10_4': data.descrip_cie10_4
        }, { fields: ['capitulo','nom_capitulo', 'cod_cie10_3', 'descrip_cie10_3', 'cod_cie10_4','descrip_cie10_4'] });
        console.log(`Nuevo cie10 ${nEnferCie.cod_enf_cie10} creado con exito`);
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}
//Select all 
export async function selectAllEnfermedadesCie10() {
    const allEC = await enfermedad_cie10.findAll();
    const obj = JSON.stringify(allEC, null, 2);
    return obj;
}
//Select by id
export async function selectEnfermedadCie10ById(id) {
    const EC = await enfermedad_cie10.findAll({
        where: {
            cod_enf_cie10: {
                [Op.eq]: id
            }
        }
    });
    const obj = JSON.stringify(EC, null, 2);
    return obj;
}
//Update
export async function updateEnfermedadCie10(id, data) {
    try {
        const UEC = await enfermedad_cie10.update({
            capitulo:data.capitulo,
            nom_capitulo: data.nom_capitulo,
            cod_cie10_3: data.cod_cie10_3,
            descrip_cie10_3: data.descrip_cie10_3,
            cod_cie10_4: data.cod_cie10_4,
            descrip_cie10_4: data.descrip_cie10_4
        }, {
            where: {
                cod_enf_cie10: {
                    [Op.eq]: id
                }
            }
        });
        console.log(`CIE10 ${UEC.cod_enf_cie10} actualizada exitosamente`);
    } catch (error) {
        console.log('Ocurrio un error', error);
    }
}
//Delete by id
export async function deleteEnfermedadCie10(id) {
    try {
        await enfermedad_cie10.destroy({
            where: {
                cod_enf_cie10: {
                    [Op.eq]: id
                }
            }
        });
    }
    catch (error) {
        console.log('Ocurrió un error', error);
    }
}