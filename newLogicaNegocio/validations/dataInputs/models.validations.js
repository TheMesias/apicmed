import { vNumEnteros,vFechaTS, vSoloHorayMin, vLongitudesString, vQuitarEspacios, vSoloLetrasEspacio, vNumEnterosDecimales, vNumLetras1Espacio, vContrasena, vEmail, vSoloFecha, vCedula, vSexo, vEstadoCivil } from '../entradas.js';

export  function vAgendamiento( data ) {
    const cod_paciente= vNumEnteros(data.cod_paciente)
    const cod_medico= vNumEnteros(data.cod_medico)
    const fecha_cita= vFechaTS(data.fecha_cita)
    const estado= vLongitudesString(data.estado,1)
    const eljson = {
        "1":cod_paciente,
        "2":cod_medico,
        "3":fecha_cita,
        "4":estado,
    } 
    console.log( eljson )
    if(cod_paciente && cod_medico && fecha_cita && estado){
        return true
    }
    return false
}

export  function vAlarmas( data ){
    const cod_alarma = vNumEnteros(data.cod_alarma)
    const cod_receta_medicamento = vNumEnteros(data.cod_receta_medicamento)
    //const tiempo_recordatorio =  vSoloHorayMin(data.tiempo_recordatorio)
    if(cod_alarma && cod_receta_medicamento){
        return true
    }
    return false    
}

export  function vAnamnesis( data ){
    const cod_anamnesis= vNumEnteros(data.cod_anamnesis)
    const grupo_sanguineo= vLongitudesString(data.grupo_sanguineo,10)
    const antecedente_pp= vLongitudesString(data.antecedente_pp,500)
    const antecedente_pf= vLongitudesString(data.antecedente_pf,500)
    const alergias= vLongitudesString(data.alergias)
    
    if(cod_anamnesis && grupo_sanguineo && antecedente_pp && antecedente_pf && alergias){
        return true
    }
    return false
}

export  function vAnt_ginecoobstetricos( data ){
    const cod_ant_gine= vNumEnteros(data.cod_ant_gine)
    const menarca= vSoloFecha(data.menarca)
    const ult_fecha_menstruacion=  vSoloFecha(data.ult_fecha_menstruacion)
    const tipo_ciclo_menstrual= vLongitudesString(data.tipo_ciclo_menstrual,1)
    const disminorrea= (typeof data.disminorrea == "boolean")? true: false;
    const cant_embarazos= vNumEnteros(data.cant_embarazos)
    const cant_abortos= vNumEnteros(data.cant_abortos)
    const cant_cesareas= vNumEnteros(data.cant_cesareas)
    const cant_partos_norm= vNumEnteros(data.cant_partos_norm)
    const hijos_vivos= vNumEnteros(data.hijos_vivos)
    const metodo_anticonceptivo = vLongitudesString(data.metodo_anticonceptivo,100)
    if (
        cod_ant_gine && menarca && ult_fecha_menstruacion && tipo_ciclo_menstrual && disminorrea &&
        cant_embarazos && cant_abortos && cant_cesareas && cant_partos_norm && hijos_vivos && metodo_anticonceptivo
    ){
        return true
    }
    return false
}

export  function vCertificadoMedico( data ){
    const cod_cert_medico = vNumEnteros(data.cod_cert_medico)
    const nombre_certificado = vLongitudesString(data.nombre_certificado,50)
    const textoNombre= vSoloLetrasEspacio(data.nombre_certificado)
    const ruta= vLongitudesString(data.ruta,255)
    if(cod_cert_medico && nombre_certificado && ruta && textoNombre){
        return true
    }
    return false
}

export  function vConsultaMedica( data ){
    const cod_historia= vNumEnteros(data.cod_historia)
    if(cod_historia){
        return true
    }
    return false
}

export  function vDieta( data ){
    const tipo_dieta= vLongitudesString(data.tipo_dieta,20)
    const textoNombre= vSoloLetrasEspacio(data.tipo_dieta)
    const detalle= vLongitudesString(data.detalle,500)
    if(tipo_dieta && detalle && textoNombre){
        return true
    }
    return false
}

//CIE 10 PENSARLA

export  function vEspecialidad( data ){
    const nombre_especialidad= vLongitudesString(data.nombre_especialidad,100)
    const textoNombre= vSoloLetrasEspacio(data.nombre_especialidad)
    if(nombre_especialidad && textoNombre){
        return true
    }
    return false
}


export  function vExamenFisico( data ){
    const cod_examen_fisico= vNumEnteros(data.cod_examen_fisico)
    const visualizacion_medico= vLongitudesString(data.visualizacion_medico,500)
    const chequeo_paciente= vLongitudesString(data.chequeo_paciente,500)
    const diagnostico= vLongitudesString(data.diagnostico,500)
    const conclusion= vLongitudesString(data.conclusion,500)
    if(cod_examen_fisico && visualizacion_medico && chequeo_paciente
        && diagnostico && conclusion){
        return true
    }
    return false
}

export  function vHistorial_medico( data ){
    const cod_historia= vNumEnteros(data.cod_historia)
    const num_historia= vNumEnteros(data.num_historia)
    if(cod_historia && num_historia){
        return true
    }
    return false
}

export  function vDatosMedicamento( data ){
    const nombre= vLongitudesString(data.nombre,300)
    const descripcion= vLongitudesString(data.descripcion,350)
    const textoNombre= vSoloLetrasEspacio(data.nombre)
    if(nombre && descripcion && textoNombre){
        return true
    }
    return false
}

export  function vDatosMedico( data ){
    const cod_medico= vNumEnteros(data.cod_medico)
    const cod_especialidad= vNumEnteros(data.cod_especialidad)
    const firma_electronica= vLongitudesString(data.firma_electronica,100)
    if(cod_medico && cod_especialidad && firma_electronica){
        return true
    }
    return false
}

export  function vDatosMedicoEditar( data ){
    const cod_especialidad= vNumEnteros(data.cod_especialidad)
    const firma_electronica= vLongitudesString(data.firma_electronica,100)
    if(cod_especialidad && firma_electronica){
        return true
    }
    return false
}

export  function vDatosPaciente( data ){
    const cod_paciente= vNumEnteros(data.cod_paciente)
    if(cod_paciente){
        return true
    }
    return false
}

export  function vDatosPersona ( data ) {
    
    let isValid = 0;

    /*if(vCedula(data.cedula)) {
        isValid++;
    }

    if(vNumEnteros(data.cod_rol)) {
        isValid++;
    }

    if (vSoloLetrasEspacio(data.nombres) && vLongitudesString(data.nombres, 150)){
        isValid++;
    }
    
    if (vSoloLetrasEspacio(data.apellidos) && vLongitudesString(data.apellidos, 150)){
        isValid++;
    }

    if (vSoloLetrasEspacio(data.ocupacion) && vLongitudesString(data.ocupacion, 100)){
        isValid++;
    }

    if (vEstadoCivil(data.estado_civil)){
        isValid++;
    }

    if (vLongitudesString(data.pais_origen, 5)){
        isValid++;
    }

    if (vSexo(data.sexo)){
        isValid++;
    }

    if (vLongitudesString(data.celular, 15)){
        isValid++;
    }

    if (vLongitudesString(data.direccion, 255)){
        isValid++;
    }

    if (vSoloFecha(data.fecha_nacimiento) && vLongitudesString(data.fecha_nacimiento, 255)){
        isValid++;
    }

    if (vLongitudesString(data.lugar_nacimiento, 100)) {
        isValid++;
    }
    
    return(isValid == 12) ? true: false
    
    */

    return true
}

export  function vDatosRecetaMedica ( data ) {

    let isValid = 0;

    if(vNumEnteros(data.cod_receta)) {
        isValid++;
    }
    
    if(vNumEnteros(data.cod_dieta)) {
        isValid++;
    }

    if (vLongitudesString(data.descripcion, 500)) {
        isValid++;
    }   

    return(isValid == 3) ? true: false

}

export  function vDatosRecetaMedicaEditar ( data ) {

    let isValid = 0;
    
    if(vNumEnteros(data.cod_dieta)) {
        isValid++;
    }

    if (vLongitudesString(data.descripcion, 500)) {
        isValid++;
    }   

    return(isValid == 2) ? true: false

}

export  function vDatosRecetaMedicamento (data) {
    
    let isValid = 0;

    if(vNumEnteros(data.cod_receta)) {
        isValid++;
    }
    
    if(vNumEnteros(data.cod_medicamento)) {
        isValid++;
    }

    if(vNumEnteros(data.dias)) {
        isValid++;
    }
    
    if(vNumEnteros(data.frecuencia)) {
        isValid++;
    }
    
    if (vLongitudesString(data.dosis, 50)) {
        isValid++;
    }

    if (vNumEnteros(data.cantidad_tomas)) {
        isValid++;
    }

    if (typeof data.estado == "boolean") {
        isValid++;
    }

    return(isValid == 7) ? true: false

}

export  function vDatosRecetaMedicamentoEditar (data) {
    
    let isValid = 0;
   
    if(vNumEnteros(data.dias)) {
        isValid++;
    }
    
    if(vNumEnteros(data.frecuencia)) {
        isValid++;
    }
    
    if (vLongitudesString(data.dosis, 50)) {
        isValid++;
    }

    if (vNumEnteros(data.cantidad_tomas)) {
        isValid++;
    }

    if (typeof data.estado == "boolean") {
        isValid++;
    }

    return(isValid == 5) ? true: false

}

export function vDatosBody(data) {
    if(vNumEnteros(data.id) ==  true){
        return true
    }else{
        return false
    }
}

export  function vDatosRol (data) {
    
    if (vSoloLetrasEspacio(data.nombre_rol) && vLongitudesString(data.nombre_rol, 100)) {
        return true;
    } else {
        return false;
    }
    
}

export  function vDatosRolEditar (data) {
    
    if (vSoloLetrasEspacio(data.nombre_rol) && vLongitudesString(data.nombre_rol, 100)) {
        return true;
    } else {
        return false;
    }
    
}

export  function vDatosSignosVitales( data ) {

    let isValid = 0;

    if (vNumEnteros(data.cod_signos_vitales)) {
        isValid++;
    }
    
    if(vNumEnterosDecimales(data.altura_mts)) {
        isValid++;
    }

    if(vNumEnterosDecimales(data.peso_kg)) {
        isValid++;
    }

    if(vNumEnterosDecimales(data.temperatura)) {
        isValid++;
    }

    if(vNumEnteros(data.frecuencia_respiratoria)) {
        isValid++;
    }
    
    if (vLongitudesString(data.presion_arterial, 7)) {
        isValid++;
    }
    
    if(vNumEnteros(data.frecuencia_cardiaca)) {
        isValid++;
    }

    return(isValid == 7) ? true: false

}

export  function vDatosSignosVitalesEditar( data ) {

    let isValid = 0;
    
    if(vNumEnterosDecimales(data.altura_mts)) {
        isValid++;
    }

    if(vNumEnterosDecimales(data.peso_kg)) {
        isValid++;
    }

    if(vNumEnterosDecimales(data.temperatura)) {
        isValid++;
    }

    if(vNumEnteros(data.frecuencia_respiratoria)) {
        isValid++;
    }
    
    if (vLongitudesString(data.presion_arterial, 7)) {
        isValid++;
    }
    
    if(vNumEnteros(data.frecuencia_cardiaca)) {
        isValid++;
    }

    return(isValid == 6) ? true: false

}

export  function vDatosSoap( data ) {

    let isValid = 0;

    if (vNumEnteros(data.cod_consulta)) {
        isValid++;
    }
    
    if (vNumEnteros(data.consulta_anterior)) {
        isValid++;
    }
    
    if (vLongitudesString(data.des_subjetiva, 500)) {
        isValid++;
    }

    if (vLongitudesString(data.des_objetiva, 500)) {
        isValid++;
    }

    if (vLongitudesString(data.des_evaluacion, 500)) {
        isValid++;
    }

    if (vLongitudesString(data.des_plan, 500)) {
        isValid++;
    }

    return(isValid == 6) ? true: false

}

export  function vDatosSoapEditar( data ) {

    let isValid = 0;
    
    if (vNumEnteros(data.consulta_anterior)) {
        isValid++;
    }
    
    if (vLongitudesString(data.des_subjetiva, 500)) {
        isValid++;
    }

    if (vLongitudesString(data.des_objetiva, 500)) {
        isValid++;
    }

    if (vLongitudesString(data.des_evaluacion, 500)) {
        isValid++;
    }

    if (vLongitudesString(data.des_plan, 500)) {
        isValid++;
    }

    return(isValid == 5) ? true: false

}

export function vDatosUsuario( data ) {

    let isValid = 0;

    if (vNumEnteros(data.cod_usuario)) {
        console.log("v#")
        isValid++;
    }

    if (vEmail(data.email) && vLongitudesString(data.email, 150)) {
        console.log("ve")
        isValid++;
    }

    if (vContrasena(data.password) && vLongitudesString(data.password, 20)) {
        console.log("vc")
        isValid++;
    }

    if (vSoloFecha(data.fecha_ultimo_acceso) && vLongitudesString(data.fecha_ultimo_acceso, 16)) {
        console.log("vf")
        isValid++;
    }    

    return(isValid == 4) ? true: false

}

export function vDatosUsuarioEditar( data ) {

    let isValid = 0;

    if (vEmail(data.email) && vLongitudesString(data.email, 150)) {
        isValid++;
    }

    if (vContrasena(data.password) && vLongitudesString(data.password, 20)) {
        isValid++;
    }

    if (vSoloFecha(data.fecha_ultimo_acceso) && vLongitudesString(data.fecha_ultimo_acceso, 16)) {
        isValid++;
    }    

    return(isValid == 3) ? true: false

}