import { especialidad } from '../basedatos/models/modelsBD.js';
import { Op } from 'sequelize';

// desde aqui nix

//insert
export async function createEspecialidad(data){
    try{
        const nuevaEspecialidad = await especialidad.create({
            'nombre_especialidad': data.nombre_especialidad
        }, { fields: ['nombre_especialidad'] });
        console.log(`Especialidad ${nuevaEspecialidad.nombre_especialidad} creada con exito!`);
    }catch(error){
        console.log('Ocurrió un error', error);
    }
}
//select all
export async function selectAllEspecialidades(){
    const allEspecialidad = await especialidad.findAll();
    const obj = JSON.stringify(allEspecialidad, null, 2);
    return obj;
}
//select by id
export async function selectEspecialidadById(id){
    const espe = await especialidad.findAll({
        where: {
            cod_especialidad: {
                [Op.eq]: id
            }
        }
      });

    const obj = JSON.stringify(espe, null, 2);
    return obj;
}

//update
export async function updateEspecialidad(id, data){

    try{
        const espe = await especialidad.update({
            nombre_especialidad: data.nombre_especialidad
        },{
            where: {
                cod_especialidad: {
                    [Op.eq]: id
                }
            }
        });
        console.log(`Especialidad ${espe.nombre_especialidad} actualizada con exito!`);
    }catch(error){
        console.log('Ocurrió un error', error);
    }
}

//delete by id
export async function deleteEspecialidad(id){
    try{
        await especialidad.destroy({
            where: {
                cod_especialidad: {
                    [Op.eq]: id
                }
            }
        });
    }catch(error){
        console.log('Ocurrió un error', error);
    }
}


//Devolver especialidad con el mismo nombre
export async function getNomEspecialidad() {
    try {
        const espe = await especialidad.findAll({
            attributes: ['nombre_especialidad']
        })
        const objEspe = JSON.stringify(espe, null, 2);
        return objEspe;
    } catch (error) {
        console.log(`error al buscar especialidad`);
    }
}