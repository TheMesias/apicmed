import { signos_vitales } from '../basedatos/models/modelsBD.js';
import { Op } from "sequelize";

//Insert 
export async function createSignosVitales(data){
    try{
       const nSignoVital = await signos_vitales.create({
        'cod_signos_vitales':data.cod_signos_vitales,
        'altura_mts':data.altura_mts,
        'peso_kg':data.peso_kg,
        'temperatura':data.temperatura,
        'frecuencia_respiratoria':data.frecuencia_respiratoria,
        'presion_arterial':data.presion_arterial,
        'frecuencia_cardiaca':data.frecuencia_cardiaca
       }, { fields: ['cod_signos_vitales','altura_mts','peso_kg','temperatura','frecuencia_respiratoria','presion_arterial','frecuencia_cardiaca']});
       console.log(`Nuevos Signos vitales ${nSignoVital.cod_signos_vitales} del paciente creado con exito`);
    }catch(error){
        console.log('Ocurrió un error', error);
    }
}
//Select all 
export async function selectAllSignosVitales(){
    const allSG = await signos_vitales.findAll();
    const obj = JSON.stringify(allSG, null, 2);
    return obj;
}
//Select by id
export async function selectSignosVitalesById(id){
    const SG = await signos_vitales.findAll({
        where: {
            cod_signos_vitales: {
                [Op.eq]:id
            }
        }
    });
    const obj = JSON.stringify(SG, null, 2);
    return obj;
}
//Update
export async function updateSignosVitales(id, data){
    try{
        const SigV = await signos_vitales.update({
            altura_mts:data.altura_mts,
            peso_kg:data.peso_kg,
            temperatura:data.temperatura,
            frecuencia_respiratoria:data.frecuencia_respiratoria,
            presion_arterial:data.presion_arterial,
            frecuencia_cardiaca:data.frecuencia_cardiaca
        },{
            where: {
                cod_signos_vitales: {
                    [Op.eq]: id
                }
            }
        });
        console.log(`SIGNOS VITALES del paciente ${SigV.cod_signos_vitales} actualizada exitosamente`);
    }catch(error){
        console.log('Ocurrio un error', error);
    }
}
//Delete by id
export async function deleteSignosVitales(id){
    try{
        await signos_vitales.destroy({
            where: {
                cod_signos_vitales: {
                    [Op.eq]: id
                }
            }
        });
    }
    catch(error){
        console.log('Ocurrió un error', error);
    }
}