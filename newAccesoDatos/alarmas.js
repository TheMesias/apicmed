import { alarmas, medicamento, receta_medicamento } from '../basedatos/models/modelsBD.js';
import { Op } from "sequelize";
import sequelize from 'sequelize';

//insert
export async function createAlarmas(data) {
    try {
        const nuevaAlarma = await alarmas.create({
            'cod_alarma': data.cod_alarma,
            'descripcion': data.descripcion,
            'tiempo': data.tiempo,
            'tiempo_recordatorio': data.tiempo_recordatorio
        }, { fields: ['cod_alarma','descripcion', 'tiempo', 'tiempo_recordatorio'] });
        console.log(`Alarmas ${nuevaAlarma.cod_alarma} creada con exito!`);
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}
//select all
export async function selectAllAlarmas() {
    const allAlarma = await alarmas.findAll();
    const obj = JSON.stringify(allAlarma, null, 2);
    return obj;
}
//select by id
export async function selectAlarmaById(id) {
    const alarm = await alarmas.findAll({
        where: {
            cod_alarma: {
                [Op.eq]: id
            }
        }
    });

    const obj = JSON.stringify(alarm, null, 2);
    return obj;
}

//update
export async function updateAlarma(id, data) {

    try {
        const alarm = await alarmas.update({
            cod_alarma: data.cod_alarma,
            descripcion: data.descripcion,
            tiempo: data.tiempo,
            tiempo_recordatorio: data.tiempo_recordatorio
        }, {
            where: {
                cod_alarma: {
                    [Op.eq]: id
                }
            }
        });
        console.log(`Alarma ${alarm.cod_alarma} actualizada con exito!`);
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}

//delete by id
export async function deleteAlarma(id) {
    try {
        await alarmas.destroy({
            where: {
                cod_alarma: {
                    [Op.eq]: id
                }
            }
        });
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}

export async function selectAlarmaByFecha(date, body){
    const alldata = await medicamento.findAll({
        include:[{
            model: receta_medicamento,
            where:{
                cod_receta_medica: body.cod_receta_medica
            },
            include:[{
                model: alarmas,
                where: sequelize.where(sequelize.fn('date', sequelize.col('tiempo_recordatorio')), '=', date),
            }]
        }],
        order: [
            [
                {model: receta_medicamento},
                {model: alarmas},
                'cod_alarma',
                'ASC'
            ]
        ]
    })
    const obj = JSON.stringify(alldata[0], null, 2);
    return obj;
}

export async function updateAlarmById(id, data){
    try {
        const alarm = await alarmas.update({
           estado: data.estado,
        }, {
            where: {
                cod_alarma: {
                    [Op.eq]: id
                }
            }
        });
        console.log(`Alarma ${alarm.cod_alarma} actualizada con exito!`);
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}
/*
//buscar Alarma Medicametos por cedula
export async function selectAlarmaByCi(id) {
    try {
        const alarmaBuscada = await alarmas.findAll({
            where: {
                cod_alarma: {
                    [Op.eq]: id
                }
            }
        })
        const objAlarma = JSON.stringify(alarmaBuscada, null, 2);
        return objAlarma;
    } catch (error) {
        console.log(`error al buscar Alar,a: ${cod_alarma}`);
    }
}*/

//insert
export async function createAlarmasMed(data) {
    try {
        const nuevaAlarma = await alarmas.create({
            'cod_alarma': data.cod_alarma,
            'cod_receta_medicamento': data.cod_receta_medicamento,
            'estado': data.estado,
            'tiempo_recordatorio': data.tiempo_recordatorio
        }, { fields: ['cod_alarma','cod_receta_medicamento', 'estado', 'tiempo_recordatorio'] });
        console.log(`Alarmas ${nuevaAlarma.cod_alarma} creada con exito!`);
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}