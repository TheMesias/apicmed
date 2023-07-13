import { ant_ginecoobstetricos } from '../basedatos/models/modelsBD.js';
import { Op } from "sequelize";

// desde aqui nix

//insert
export async function createAntGineco(data){
    try{
        const nuevoAnt_ginecoobstetricos = await ant_ginecoobstetricos.create({
            'cod_ant_gine': data.cod_ant_gine,
            'menarca': data.menarca,
            'ult_fecha_menstruacion': data.ult_fecha_menstruacion,
            'tipo_ciclo_menstrual': data.tipo_ciclo_menstrual,
            //'duracion_ciclo_menstrual': data.duracion_ciclo_menstrual,    Falta este
            'disminorrea': data.disminorrea,
            'cant_embarazos': data.cant_embarazos,
            'cant_abortos': data.cant_abortos,
            'cant_cesareas': data.cant_cesareas,
            'cant_partos_norm': data.cant_partos_norm,
            'hijos_vivos': data.hijos_vivos,
            'metodo_anticonceptivo': data.metodo_anticonceptivo
        }, { fields: ['cod_ant_gine','menarca', 'ult_fecha_menstruacion', 'tipo_ciclo_menstrual', 'disminorrea', 'cant_embarazos', 'cant_abortos', 'cant_cesareas', 'cant_partos_norm', 'hijos_vivos', 'metodo_anticonceptivo'] });
        console.log(`AntGineco ${nuevoAnt_ginecoobstetricos.cod_ant_gine} creado con exito!`);
    }catch(error){
        console.log('Ocurrió un error', error);
    }
}
//select all
export async function selectAllAntGineco(){
    const allAntGineco = await ant_ginecoobstetricos.findAll();
    const obj = JSON.stringify(allAntGineco, null, 2);
    return obj;
}
//select by id
export async function selectAntGinecoById(id){
    const ant= await ant_ginecoobstetricos.findAll({
        where: {
            cod_ant_gine: {
                [Op.eq]: id
            }
        }
      });

    const obj = JSON.stringify(ant, null, 2);
    return obj;
}

//update
export async function updateAntGineco(id, data){

    try{
        const ant = await ant_ginecoobstetricos.update({
            //cod_ant_gine: data.cod_ant_gine,
            menarca: data.menarca,
            ult_fecha_menstruacion: data.ult_fecha_menstruacion,
            tipo_ciclo_menstrual:data.tipo_ciclo_menstrual,
            disminorrea: data.disminorrea,
            cant_embarazos: data.cant_embarazos,
            cant_abortos: data.cant_abortos,
            cant_cesareas: data.cant_cesareas,
            cant_partos_norm: data.cant_partos_norm,
            hijos_vivos: data.hijos_vivos,
            metodo_anticonceptivo: data.metodo_anticonceptivo
        },{
            where: {
                cod_ant_gine: {
                    [Op.eq]: id
                }
            }
        });
        console.log(`AntGineco ${ant.cod_ant_gine} actualizado con exito!`);
    }catch(error){
        console.log('Ocurrió un error', error);
    }
}

//delete by id
export async function deleteAntGineco(id){
    try{
        await ant_ginecoobstetricos.destroy({
            where: {
                cod_ant_gine: {
                    [Op.eq]: id
                }
            }
        });
    }catch(error){
        console.log('Ocurrió un error', error);
    }
}
