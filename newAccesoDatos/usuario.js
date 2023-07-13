import { usuario } from '../basedatos/models/modelsBD.js';
import { Op } from "sequelize";


//Insert 
export async function createUsuario(data) {
    try {
        const nuevoUser = await usuario.create({
            'cod_usuario': data.cod_usuario,
            'email': data.email,
            'password': data.password,
            'fecha_ultimo_acceso': data.fecha_ultimo_acceso
        }, { fields: [  'cod_usuario', 'email', 'password', 'fecha_ultimo_acceso' ] });
        console.log(`Nuevo Usuario  ${nuevoUser.cod_usuario} creado con exito`);
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}
//Select all 
export async function selectAllUsuarios() {
    const allUsers = await usuario.findAll();
    const obj = JSON.stringify(allUsers, null, 2);
    return obj;
}
//Select by id
export async function selectUsuarioById(id) {
    const Usuario = await usuario.findAll({
        where: {
            cod_usuario: {
                [Op.eq]: id
            }
        }
    });
    const obj = JSON.stringify(Usuario, null, 2);
    return obj;
}
//Update
export async function updateUsuario(id, data) {
    try {
        const updUsuario = await usuario.update({
            'email': data.email,
            'password': data.password
        }, {
            where: {
                cod_usuario: {
                    [Op.eq]: id,
                },
            },
        });
        console.log(`Usuario ${updUsuario.cod_usuario} actualizado exitosamente`);
    } catch (error) {
        console.log('Ocurrio un error', error);
    }
}
//Delete by id
export async function deleteUsuario(id) {
    try {
        await usuario.destroy({
            where: {
                cod_usuario: {
                    [Op.eq]: id
                }
            }
        });
    }
    catch (error) {
        console.log('Ocurrió un error', error);
    }
}


//Devolver usuarios con el mismo correo
export async function getCorreos() {
    try {
        const personaBuscada = await usuario.findAll({
            attributes: ['email']
        })
        const objPersona = JSON.stringify(personaBuscada, null, 2);
        return objPersona;
    } catch (error) {
        console.log(`error al buscar correos`);
    }
}

export async function updateUltAccess(id, data) {
    try {
        const updUsuario = await usuario.update({
            'fecha_ultimo_acceso': data.fecha_ultimo_acceso,
            'updateAt': data.updateAt
        }, {
            where: {
                cod_usuario: {
                    [Op.eq]: id,
                },
            },
        });
        console.log(`Usuario ${updUsuario.cod_usuario} actualizado exitosamente!`);
    } catch (error) {
        console.log('Ocurrio un error', error);
    }
}