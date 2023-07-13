import { anamnesis } from '../basedatos/models/modelsBD.js';
import { Op } from 'sequelize';

export async function createAnamnesis(data) {
  try {
    const newAnamnesis = anamnesis.create(
      {
        'cod_anamnesis': data.cod_anamnesis,
        'grupo_sanguineo': data.grupo_sanguineo,
        'antecedente_pp': data.antecedente_pp,
        'antecedente_pf': data.antecedente_pf,
        'alergias': data.alergias
      },
      {
        fields: [
          'cod_anamnesis',
          'grupo_sanguineo',
          'antecedente_pp',
          'antecedente_pf',
          'alergias'
        ],
      }
    );
    console.log(
      `Anamnesis ${newAnamnesis.cod_anamnesis} creado con éxito!`
    );
  } catch (error) {
    console.log("Ocurrió un error", error);
  }
}

export async function selectAllAnamnesis() {
  const allAnamnesis = await anamnesis.findAll();
  const obj = JSON.stringify(allAnamnesis, null, 2)
  return obj;
}

export async function selectAnamnesisById(id) {
  try {
    const specificAnamnesis = await anamnesis.findAll({
      where: {
        cod_anamnesis: {
          [Op.eq]: id
        }
      }
    });
    const obj = JSON.stringify(specificAnamnesis, null, 2)
    return obj;
  } catch (error) {
    console.log("Ocurrió un error", error);
  }
}

export async function updateAnamnesis(id, data) {
  try {
    const updAnamnesis = await anamnesis.update(
      {
        //cod_anamnesis: data.cod_anamnesis,
        grupo_sanguineo: data.grupo_sanguineo,
        antecedencete_pp: data.antecedencete_pp,
        antecedencete_pf: data.antecedencete_pf,
        alergias: data.alergias
      },
      {
        where: {
          cod_anamnesis: {
            [Op.eq]: id,
          },
        },
      }
    );
    console.log(
      `Anamnesis ${updAnamnesis.cod_anamnesis} actualizado con éxito!`
    );
  } catch (error) {
    console.log("Ocurrió un error", error);
  }
}

export async function deleteAnamnesis(id) {
  try {
    const delAnamnesis = await anamnesis.destroy({
      where: {
        cod_anamnesis: {
          [Op.eq]: id,
        },
      },
    });
    console.log(
      `Anamnesis ${delAnamnesis.cod_anamnesis} eliminado con éxito`
    );
  } catch (error) {
    console.log("Ocurrió un error", error);
  }
}

/*
//Seleccionar con codigo de paciente
export async function selectAnamnesisByCodPac(cod_paciente) {
  try {
    const specificAnamnesis = await anamnesis.findAll({
      where: {
        cod_paciente: {
          [Op.eq]: cod_paciente
        }
      }
    });
    const obj = JSON.stringify(specificAnamnesis, null, 2)
    return obj;
  } catch (error) {
    console.log("Ocurrió un error", error);
  }
}*/