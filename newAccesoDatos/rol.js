import { rol } from '../basedatos/models/modelsBD.js';
import { Op } from "sequelize";

//Insert 
export async function createRol(data) {
    try {
        const nuevoRol = await rol.create({
            'nombre_rol': data.nombre_rol
        }, { fields: [ 'nombre_rol'] });
        console.log(`Nuevo Rol  ${nuevoRol.nombre_rol} creado con exito`);
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}
//Select all 
export async function selectAllRoles() {
    const allRol = await rol.findAll();
    const obj = JSON.stringify(allRol, null, 2);
    return obj;
}
//Select by id
export async function selectRolById(id) {
    const Rol = await rol.findAll({
        where: {
            cod_rol: {
                [Op.eq]: id
            }
        }
    });
    const obj = JSON.stringify(Rol, null, 2);
    return obj;
}
//Update
export async function updateRol(id, data) {
    try {
        const Rol = await rol.update({
            nombre_rol: data.nombre_rol
        }, {
            where: {
                cod_rol: {
                    [Op.eq]: id
                }
            }
        });
        console.log(`Rol actualizada exitosamente`);
    } catch (error) {
        console.log('Ocurrio un error', error);
    }
}
//Delete by id
export async function deleteRol(id) {
    try {
        await rol.destroy({
            where: {
                cod_rol: {
                    [Op.eq]: id
                }
            }
        });
    }
    catch (error) {
        console.log('Ocurrió un error', error);
    }
}


//Devolver roles con el mismo nombre
export async function getNomRoles() {
    try {
        const rolcito = await rol.findAll({
            attributes: ['nombre_rol']
        })
        const objRol = JSON.stringify(rolcito, null, 2);
        return objRol;
    } catch (error) {
        console.log(`error al buscar correos`);
    }
}