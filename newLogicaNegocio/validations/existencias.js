import { selectPersonaByCi, getNombresApellidosPersona } from '../../newAccesoDatos/persona.js';
import { getCorreos } from '../../newAccesoDatos/usuario.js';
import { getNomRoles } from '../../newAccesoDatos/rol.js';
import {getNomEspecialidad} from '../../newAccesoDatos/especialidad.js';
import {getNomMedicamento} from '../../newAccesoDatos/medicamento.js';
import {getMediFecha} from '../../newAccesoDatos/agendamiento.js';
import {getNumHistoria} from '../../newAccesoDatos/historial_medico.js';

//existencia de una persona con el mismo numero de cedula
export  async function buscarPersonaByCi(data){
    let cedula = data.cedula
    const persona = await selectPersonaByCi(cedula)
    if (persona == "[]"){
        return false
    }
    return true
}

//existencia de una persona con el mismo nombre y apellido
export  async function buscarPersonaNomApe(data){
    let nombres = data.nombres
    let apellidos = data.apellidos
    const similares = await getNombresApellidosPersona();
    let existe = false;
    similares.forEach( persona => {
            if(persona.nombres.toUpperCase()==nombres.toUpperCase().trim() && persona.apellidos.toUpperCase()==apellidos.toUpperCase().trim()){
                existe = true
            }
        }
    );
    return existe;
}

//existencia de usuario con el mismo correo
export  async function existeCorreo(data){
    let correo = data.email
    const correos = JSON.parse(await getCorreos())
    let existe = false;
    correos.forEach( c => {
            if(c.email.toLowerCase()==correo.toLowerCase().trim()){
                console.log("> ", c.email);
                existe = true
            }
        }
    );
    
    return existe;

}

//existencia de rol con el mismo nombre
export  async function existeRol(data){
    let nombre = data.nombre_rol
    const roles = JSON.parse(await getNomRoles())
    let existe = false;
    roles.forEach( r => {
            if(r.nombre_rol.toLowerCase()==nombre.toLowerCase().trim()){
                existe = true
            }
        }
    );
    return existe;
}

//existencia de especialidad con el mismo nombre
export  async function existeEspecialidad(data){
    let nombre = data.nombre_especialidad
    const especialidades = await getNomEspecialidad()
    let existe = false;
    especialidades.forEach( es => {
            if(es.nombre_rol.toLowerCase()==nombre.toLowerCase().trim()){
                existe = true
            }
        }
    );
    return existe;
}

//existencia de medicamento con el mismo nombre
export  async function existeMedicamento(data){
    let nombre = data.nombre
    const medicamentos = JSON.parse(await getNomMedicamento())
    let existe = false;
    medicamentos.forEach( medica => {
            if(medica.nombre.toLowerCase()==nombre.toLowerCase().trim()){
                existe = true
            }
        }
    );
    return existe;
}

//agendamiento con el mismo doctor en el mismo horario
export  async function existeCitaOcupada(data){
    try {
        let medico = data.cod_medico.trim()
        let fecha = data.fecha_cita.trim()
        //llega -> 2022-07-14T10:08
        //en bd -> 2022-06-30 16:08:01.676-05
        let fechaYHora=''
        if(fecha.includes("T")){
            let d = new Date(fecha)
            d.set
            fechaYHora = fecha.split('T')
        }else{
            fechaYHora = fecha.split(' ')
        }

        let similares = [];
        similares = JSON.parse(await getMediFecha());
        let existe = false;
        let comprobacion = 0;
        if(similares){
            similares.forEach( cita => {
                    let fechaYHoraBD=''
                    if(cita.fecha_cita.includes("T")){
                        fechaYHoraBD = cita.fecha_cita.split('T')
                    }else{
                        fechaYHoraBD = cita.fecha_cita.split(' ')
                    }
                    //cambiarle la zona horaria a la bd para usar esto
                    if(fechaYHora[0]==fechaYHoraBD[0] && fechaYHora[1].substring(0,5)==fechaYHoraBD[1].substring(0,5) && cita.cod_medico == medico) 
                        comprobacion++
                    //if(fechaYHora[0]==fechaYHoraBD[0] && cita.cod_medico == medico) 
                    if(comprobacion>=1) 
                        existe = true
                }
            );
        }
        
        return existe;
    } catch (error) {
        console.log("Error", error)
    }

    
}

//mismo numero de historia clinica
export  async function existeHistoriaClinica(data){
    let nh = data.num_historia
    const numHistorias = await getNumHistoria()
    let existe = false;
    numHistorias.forEach( numHistoria => {
            if(numHistoria.num_historia.toLowerCase()==nh.toLowerCase().trim()){
                existe = true
            }
        }
    );
    return existe;
}

