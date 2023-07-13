import { agendamiento } from '../basedatos/models/modelsBD.js';
import { Op } from "sequelize";

//insert 
export async function createAgendamiento(data){
    try{
        const nuevoAgendamiento = await agendamiento.create({
            'cod_paciente':data.cod_paciente,
            'cod_medico':data.cod_medico,
            'fecha_cita':data.fecha_cita,
            'estado':data.estado
        }, { fields: ['cod_paciente', 'cod_medico','fecha_cita','estado'] });
        console.log(`Agendamiento ${nuevoAgendamiento.codigo_medico} creado con exito!`);
    }catch(error){
        console.log('Ocurrió un error', error);
    }
}

//select all
export async function selectAllAgendamiento(){
    const allAgendamiento = await agendamiento.findAll();
    const obj = JSON.stringify(allAgendamiento, null, 2);
    return obj;
}

//select by id
export async function selectAgendamientoById(id){
    const agen= await agendamiento.findAll({
        where: {
            cod_agendamiento: {
                [Op.eq]: id
            }
        }
      });

    const obj = JSON.stringify(agen, null, 2);
    return obj;
}

//update
export async function updateAgendamiento(id, data){

    try{
        const agen= await agendamiento.update({
            cod_paciente:data.cod_paciente,
            cod_medico:data.cod_medico,
            fecha_cita:data.fecha_cita,
            estado:data.estado
        },{
            where: {
                cod_agendamiento: {
                    [Op.eq]: id
                }
            }
        });
        console.log(`Medico ${agen.cod_agendamiento} actualizado con exito!`);
    }catch(error){
        console.log('Ocurrió un error', error);
    }
}
//delete by id
export async function deleteAgendamiento(id){
    try{
        await agendamiento.destroy({
            where: {
                cod_agendamiento: {
                    [Op.eq]: id
                }
            }
        });
    }catch(error){
        console.log('Ocurrió un error', error);
    }
}


// ADICIONALES

//Buscar si existe mas de una registro del mismo médico en el mismo horario
export async function getMediFecha() {
    try {
        const agen = await agendamiento.findAll({
            attributes: ['cod_medico','fecha_cita']
        })
        const objAgen = JSON.stringify(agen, null, 2);
        return objAgen;
    } catch (error) {
        console.log(`error al buscar agendammiento`);
    }
}
/*
//Buscar si existe un agendamiento igual por el mismo usuario
export async function selectByCodPacCodMedCodHor(cod_pac, cod_med, cod_hor){
    const agen= await agendamiento.findAll({
        where: {
            [Op.and]: [
                { codigo_paciente: cod_pac },
                { codigo_medico: cod_med },
                { codigo_horario: cod_hor }
            ]
        }
      });
    const obj = JSON.stringify(agen, null, 2);
    return obj;
}


//Devolver el estado del agendamiento
export async function selectByEstadoAgendamiento(id){
    const agen= await agendamiento.findAll({
        attributes: ['estado_reserva'],
        where: {
            codigo_agendamiento: {
                [Op.eq]: id
            }
        }
      });

    const obj = JSON.stringify(agen, null, 2);
    return obj;
}*/