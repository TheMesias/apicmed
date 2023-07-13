import { receta_medica } from '../basedatos/models/modelsBD.js';
import { Op } from "sequelize";

//insert
export async function createRecetaMedica(data) {
    try {
        const nuevaRecetaMedica = await receta_medica.create({
            'cod_receta': data.cod_receta,
            'cod_dieta': data.cod_dieta,
            'descripcion': data.descripcion
        }, { fields: ['cod_receta', 'cod_dieta', 'descripcion'] });
        console.log(`Receta ${nuevaRecetaMedica.cod_receta} creada con exito!`);
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}
//select all
export async function selectAllRecetasMedicas() {
    const allRecetaMedica = await receta_medica.findAll();
    const obj = JSON.stringify(allRecetaMedica, null, 2);
    return obj;
}
//select by id
export async function selectRecetaMedicaById(id) {
    const recet = await receta_medica.findAll({
        where: {
            cod_receta: {
                [Op.eq]: id
            }
        }
    });
    const obj = JSON.stringify(recet, null, 2);
    return obj;
}

//update
export async function updateRecetaMedica(id, data) {

    try {
        const recet = await receta_medica.update({
            cod_receta: data.cod_receta,
            cod_dieta: data.cod_dieta,
            descripcion: data.descripcion
        }, {
            where: {
                cod_receta: {
                    [Op.eq]: id
                }
            }
        });
        console.log(`Receta ${recet.cod_receta} actualizada con exito!`);
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}

//delete by id
export async function deleteRecetaMedica(id) {
    try {
        await receta_medica.destroy({
            where: {
                cod_receta: {
                    [Op.eq]: id
                }
            }
        });
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}


/*
//buscar receta por cedula
export async function selectRecetaMedicaByCi(id) {
    try {
        const recetaBuscada = await receta_medica.findAll({
            where: {
                cod_receta: {
                    [Op.eq]: id
                }
            }
        })
        const objReceta = JSON.stringify(recetaBuscada, null, 2);
        return objReceta;
    } catch (error) {
        console.log(`error al buscar receta: ${cod_receta}`);
    }
}*/