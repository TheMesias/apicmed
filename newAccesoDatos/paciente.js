import { paciente } from '../basedatos/models/modelsBD.js';
import { Op } from "sequelize";


//insert
export async function createPaciente(data) {
    try {
        const nuevaPaciente = await paciente.create({
            'cod_paciente': data.cod_paciente
        }, { fields: ['cod_paciente'] });
        console.log(`Paciente ${nuevaPaciente.cod_paciente} creado con exito!`);
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}
//select all
export async function selectAllPacientes() {
    const allPaciente = await paciente.findAll();
    const obj = JSON.stringify(allPaciente, null, 2);
    return obj;
}
//select by id
export async function selectPacienteById(id) {
    const paci = await paciente.findAll({
        where: {
            cod_paciente: {
                [Op.eq]: id
            }
        }
    });

    const obj = JSON.stringify(paci, null, 2);
    return obj;
}

//update
export async function updatePaciente(id, data) {

    try {
        const paci = await paciente.update({
            cod_paciente: data.cod_paciente
        }, {
            where: {
                cod_paciente: {
                    [Op.eq]: id
                }
            }
        });
        console.log(`Paciente ${paci.cod_paciente} actualizada con exito!`);
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}

//delete by id
export async function deletePaciente(id) {
    try {
        await paciente.destroy({
            where: {
                cod_paciente: {
                    [Op.eq]: id
                }
            }
        });
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}

/*

export async function selectPacienteByPersonaId(id) {
    try {
        const pacienteBuscado = await paciente.findAll({
            where: {
                cod_persona: {
                    [Op.eq]: id
                }
            }
        });
        return JSON.stringify(pacienteBuscado, null, 2);
    } catch (error) {
        console.log(`error al buscar paciente con id de persona: ${id}`);
    }
}*/