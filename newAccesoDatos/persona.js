import { consulta_medica, dieta, examen_fisico, historial_medico, medicamento, paciente, persona, receta_medica, receta_medicamento, signos_vitales, usuario } from '../basedatos/models/modelsBD.js';
import { and, Op, where } from "sequelize";

//insert
export async function createPersona(data) {
    try {
        const nuevaPersona = await persona.create({
            'cedula': data.cedula,
            'cod_rol': data.cod_rol,
            'nombres': data.nombres,
            'apellidos': data.apellidos,
            'ocupacion': data.ocupacion,
            'estado_civil': data.estado_civil,
            'pais_origen':data.pais_origen,
            'sexo': data.sexo,
            'celular': data.celular,
            'direccion': data.direccion,
            'fecha_nacimiento': data.fecha_nacimiento,
            'lugar_nacimiento': data.lugar_nacimiento
        }, { fields: ['cedula','cod_rol', 'nombres', 'apellidos', 'ocupacion', 'estado_civil', 'pais_origen', 'sexo', 'celular', 'direccion', 'fecha_nacimiento', 'lugar_nacimiento'] });
        console.log(`Persona ${nuevaPersona.nombres} creada con exito!`);
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}
//select all
export async function selectAllPersonas() {
    const allPersona = await persona.findAll();
    const obj = JSON.stringify(allPersona, null, 2);
    return obj;
}
//select by id
export async function selectPersonaById(id) {
    const pers = await persona.findAll({
        where: {
            cod_persona: {
                [Op.eq]: id
            }
        }
    });

    const obj = JSON.stringify(pers, null, 2);
    return obj;
}


//update
export async function updatePersona(id, data) {

    try {
        const pers = await persona.update({
            cedula: data.cedula,
            cod_rol: data.cod_rol,
            nombres: data.nombres,
            apellidos: data.apellidos,
            ocupacion: data.ocupacion,
            estado_civil: data.estado_civil,
            pais_origen:data.pais_origen,
            sexo: data.sexo,
            celular: data.celular,
            direccion: data.direccion,
            fecha_nacimiento: data.fecha_nacimiento,
            lugar_nacimiento: data.lugar_nacimiento
        }, {
            where: {
                cod_persona: {
                    [Op.eq]: id
                }
            }
        });
        console.log(`Persona ${pers.nombres} actualizada con exito!`);
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}

//delete by id
export async function deletePersona(id) {
    try {
        await persona.destroy({
            where: {
                cod_persona: {
                    [Op.eq]: id
                }
            }
        });
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
}


//ADICIONALES
//buscar persona por cedula
export async function selectPersonaByCi(cedula) {
    try {
        const personaBuscada = await persona.findAll({
            where: {
                cedula: {
                    [Op.eq]: cedula
                }
            }
        })
        const objPersona = JSON.stringify(personaBuscada, null, 2);
        return objPersona;
    } catch (error) {
        console.log(`error al buscar persona: ${cedula}`);
    }
}

//Devolver nombres y apellidos de las personas
export async function getNombresApellidosPersona() {
    try {
        const personaBuscada = await persona.findAll({
            attributes: ['nombres', 'apellidos']
        })
        const objPersona = JSON.stringify(personaBuscada, null, 2);
        return objPersona;
    } catch (error) {
        console.log(`error al buscar persona`);
    }
}

export async function getUserMobile() {
    const allMobileUsers = await persona.findAll({
        include: [{model: usuario, required: true}]
    });
    const obj = JSON.stringify(allMobileUsers, null, 2);
    return obj;
}

export async function getUserMobileLogin(cedula, password) {
    const allMobileUsers = await persona.findAll({
        attributes:["cod_persona","cedula", "nombres", "sexo"],
        where: {
            cedula: cedula,
        },
        include: [{
            model: usuario, 
            required: true,
            attributes:["email","fecha_ultimo_acceso"],
            where: {
                password: password,
            }
        }]
    });
    const obj = JSON.stringify(allMobileUsers[0], null, 2);
    return obj;
}

export async function obtMedicamentPer(cod_persona){

    let cod_historia = cod_persona;

    const medicacion =await consulta_medica.findAll({
        where:{
            cod_historia: cod_historia,
            //cod_consulta: "3"
        },
        attributes:["cod_consulta"],
        include:{
            model: receta_medica,
            attributes:["cod_receta"],
            include:{
                model: receta_medicamento,
                where:{
                    estado: true
                },
                include:{
                    model: medicamento,
                    attributes:["nombre"]
                }
            }
        }
    });


    const obj = JSON.stringify(medicacion[0], null, 2);
    return obj;
}

export async function obtDietaPer(cod_persona){

    let cod_historia = cod_persona;

    const dietas =await consulta_medica.findAll({
        where:{
            cod_historia: cod_historia,
            //cod_consulta: "3"
        },
        attributes:["cod_consulta"],
        include:{
            model: receta_medica,
            attributes:["cod_receta"],
            include:{
                model: dieta
            }
        }
    });


    const obj = JSON.stringify(dietas[0], null, 2);
    return obj;
}

export async function obtRecetaMed(cod_persona){
    let cod_historia = cod_persona;

    const recetaM = await consulta_medica.findAll({
        where:{
            cod_historia: cod_historia,
            //cod_consulta: "3"
        },
        attributes:["cod_consulta"],
        include:{
            model: receta_medica,
        }
    });


    const obj = JSON.stringify(recetaM[0], null, 2);
    return obj;
}

export async function obtPersonaCed(cedula_persona){
    const personaCedu = await persona.findAll({
        where:{
            cedula: cedula_persona,
        }
    });

    const obj = JSON.stringify(personaCedu[0], null, 2);
    return obj;
}