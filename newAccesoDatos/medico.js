import { medico } from '../basedatos/models/modelsBD.js';
import { Op } from "sequelize";

// desde aqui nix

//insert
export async function createMedico(data){
    try{
        const nuevoMedico = await medico.create({
            'cod_medico': data.cod_medico,
            'cod_especialidad': data.cod_especialidad,
            'firma_electronica': data.firma_electronica
        }, { fields: ['cod_medico','cod_especialidad', 'firma_electronica'] });
        console.log(`Medico ${nuevoMedico.cod_medico} creado con exito!`);
    }catch(error){
        console.log('Ocurrió un error', error);
    }
}
//select all
export async function selectAllMedicos(){
    const allMedico = await medico.findAll();
    const obj = JSON.stringify(allMedico, null, 2);
    return obj;
}
//select by id
export async function selectMedicoById(id){
    const med= await medico.findAll({
        where: {
            cod_medico: {
                [Op.eq]: id
            }
        }
      });

    const obj = JSON.stringify(med, null, 2);
    return obj;
}

//update
export async function updateMedico(id, data){

    try{
        const med= await medico.update({
            cod_medico: data.cod_medico,
            cod_especialidad: data.cod_especialidad,
            firma_electronica: data.firma_electronica
        },{
            where: {
                cod_medico: {
                    [Op.eq]: id
                }
            }
        });
        console.log(`Medico ${med.cod_medico} actualizado con exito!`);
    }catch(error){
        console.log('Ocurrió un error', error);
    }
}

//delete by id
export async function deleteMedico(id){
    try{
        await medico.destroy({
            where: {
                cod_medico: {
                    [Op.eq]: id
                }
            }
        });
    }catch(error){
        console.log('Ocurrió un error', error);
    }
}

