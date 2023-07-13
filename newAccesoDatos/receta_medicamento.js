import { receta_medicamento } from '../basedatos/models/modelsBD.js';
import { Op } from "sequelize";

//insert
export async function createRecetaMedicamento(data) {
    try {
        const nuevaRecetaMedicamentos = await receta_medicamento.create({
            'cod_medicamento': data.cod_medicamento,
            'cod_receta': data.cod_receta,
            'dias': data.dias,
            'frecuencia': data.frecuencia,
            'dosis': data.dosis,
            'cantidad_tomas': data.cantidad_tomas,
            'estado': data.estado
        }, { fields: ['cod_medicamento', 'cod_receta', 'dias', 'frecuencia', 'dosis', 'cantidad_tomas', 'estado'] });
        console.log(`Receta Medicamentos ${nuevaRecetaMedicamentos.cod_receta_medica} creada con exito!`);
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}
//select all
export async function selectAllRecetaMedicamentos() {
    const allRecetaMedicamentos = await receta_medicamento.findAll();
    const obj = JSON.stringify(allRecetaMedicamentos, null, 2);
    return obj;
}
//select by id
export async function selectRecetaMedicamentoById(id) {
    const recet_med = await receta_medicamento.findAll({
        where: {
            cod_receta_medica: {
                [Op.eq]: id
            }
        }
    });

    const obj = JSON.stringify(recet_med, null, 2);
    return obj;
}

//update
export async function updateRecetaMedicamento(id, data) {

    try {
        const recet_med = await receta_medicamento.update({
            cod_medicamento: data.cod_medicamento,
            cod_receta: data.cod_receta,
            dias: data.dias,
            frecuencia: data.frecuencia,
            dosis: data.dosis,
            cantidad_tomas: data.cantidad_tomas,
            estado: data.estado
        }, {
            where: {
                cod_receta_medica: {
                    [Op.eq]: id
                }
            }
        });
        console.log(`Receta ${recet_med.cod_receta_medica} actualizada con exito!`);
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}

//delete by id
export async function deleteRecetaMedicamento(id) {
    try {
        await receta_medicamento.destroy({
            where: {
                cod_receta_medica: {
                    [Op.eq]: id
                }
            }
        });
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}

export async function updateEstadoReceta(id) {
    try {
        const recet_med = await receta_medicamento.update({
            estado: false
        }, {
            where: {
                cod_receta_medica: {
                    [Op.eq]: id
                }
            }
        });
        console.log(`Estado de Receta ${recet_med.cod_receta_medica} actualizada con exito!`);
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}
/*
//buscar Receta Medicametos por cedula
export async function selectRecetaMedicamentosByCi(id) {
    try {
        const recetamedicaBuscada = await receta_medicamento.findAll({
            where: {
                cod_receta: {
                    [Op.eq]: id
                }
            }
        })
        const objRecetaMedi = JSON.stringify(recetamedicaBuscada, null, 2);
        return objRecetaMedi;
    } catch (error) {
        console.log(`error al buscar Receta Medicametos: ${cod_receta_medica}`);
    }
}*/