import { medicamento } from '../basedatos/models/modelsBD.js';
import { Op } from "sequelize";

//Insert 
export async function createMedicamento(data) {
    try {
        const nMedicamento = await medicamento.create({
            'nombre': data.nombre,
            'descripcion': data.descripcion
        }, { fields: ['nombre','descripcion'] });
        console.log(`Nuevo medicamento ${nMedicamento.cod_medicamento} creado con exito`);
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}

//Select all 
export async function selectAllMedicamentos() {
    const allMedicamento = await medicamento.findAll();
    const obj = JSON.stringify(allMedicamento, null, 2);
    return obj;
}

//Select by id
export async function selectMedicamentoById(id) {
    const EF = await medicamento.findAll({
        where: {
            cod_medicamento: {
                [Op.eq]: id
            }
        }
    });
    const obj = JSON.stringify(EF, null, 2);
    return obj;
}

//Update
export async function updateMedicamento(id, data) {
    try {
        const medic = await medicamento.update({
            nombre: data.nombre,
            descripcion: data.descripcion
        }, {
            where: {
                cod_medicamento: {
                    [Op.eq]: id
                }
            }
        });
        console.log(`Medicamento ${medic.cod_medicamento} actualizada exitosamente`);
    } catch (error) {
        console.log('Ocurrio un error', error);
    }
}

//Delete by id
export async function deleteMedicamento(id) {
    try {
        await medicamento.destroy({
            where: {
                cod_medicamento: {
                    [Op.eq]: id
                }
            }
        });
    }
    catch (error) {
        console.log('Ocurrió un error', error);
    }
}

//Devolver medicamentos con el mismo nombre
export async function getNomMedicamento() {
    try {
        const medicamen = await medicamento.findAll({
            attributes: ['nombre']
        })
        const objMedica = JSON.stringify(medicamen, null, 2);
        return objMedica;
    } catch (error) {
        console.log(`error al buscar especialidad`);
    }
}

