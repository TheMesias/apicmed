
import { createAnamnesis, selectAllAnamnesis, selectAnamnesisById, updateAnamnesis } from "./accesodatos/anamnesis.js";
import { createCertificado, deleteCertificado, selectAllCertificado, selectCertificadoById, updateCertificado } from "./accesodatos/certificado.js";
import { createCie10, selectAllCie10, selectCie10ById, updateCie10 } from "./accesodatos/cie10.js";
import { createConsulta_medica, deleteConsulta_medica, selectAllConsulta_medica, selectConsulta_medicaById, updateConsulta_medica } from "./accesodatos/consulta_medica.js";
import { createEnfermedad, deleteEnfermedad, selectAllEnfermedad, selectEnfermedadById, updateEnfermedad } from "./accesodatos/enfermedad.js";
import { createEspecialidad, deleteEspecialidad, selectAllEspecialidad, selectEspecialidadById, updateEspecialidad } from "./accesodatos/especialidad.js";
import { createHorario_medico, deleteHorario_medico, selectAllHorario_medico, selectHorario_medicoById, updateHorario_medico } from "./accesodatos/horario_medico.js";



export default async function Pruebas(){
    //-------------anamnesis
    //crear
    try{
        const data ={
            'codigo_paciente': '1',
            'alergias': 'Alergia al polvo',
            'antecedentes_morbidos': 'Se le murió el perrito',
            'antecedentes_famliares': 'El papá tenía alergia al polvo',
        }
        await createAnamnesis(data);
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //select all
    try{
        await selectAllAnamnesis();
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //selectbyid
    try{
        let id=1;
        await selectAnamnesisById(id)
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //update
    try{
        let id=1;
        const data ={
            'codigo_paciente': '1',
            'alergias': 'Alergia al polvo y flores',
            'antecedentes_morbidos': 'Se le murió el perrito y el gatito',
            'antecedentes_famliares': 'El papá tenía alergia al polvo',
        }
        await updateAnamnesis(id, data)
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //delete
    try {
        let id = 1;
        await updateAnamnesis(id);    
    } catch (e) {
        console.log("No te valió jajaj", e);
    }


    //----------------certificado
    //crear
    try{
        const data ={
            'codigo_consulta_medica': '1',
            'nombre_certificado_medico': 'Certificado para el señor X',
            'ruta': 'D:/certificados',
        }
        await createCertificado(data);
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //select all
    try{
        const algo = await selectAllCertificado();
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //selectbyid
    try{
        let id=1;
        await selectCertificadoById(id)
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //update
    try{
        let id=1;
        const data ={
            'codigo_consulta_medica': '1',
            'nombre_certificado_medico': 'Certificado para el señor X actualizado',
            'ruta': 'D:/certificados',
        }
        await updateCertificado(id, data)
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //delete
    try {
        let id=1;
        await deleteCertificado(id);    
    } catch (e) {
        console.log("No te valió jajaj", e);
    }

    //----------cie10
    //crear
    try{
        const data ={
            'nombre': 'Nombre de enfermedad del cie10',
            'codigo_enfermedad_cie10': 'NECIE10'
        }
        await createCie10(data);
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //select all
    try{
        await selectAllCie10();
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //selectbyid
    try{
        let id=1;
        await selectCie10ById(id)
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //update
    try{
        let id=1;
        const data ={
            'nombre': 'Enfermedad del cie10 Actualizada',
            'codigo_enfermedad_cie10': 'ECIE10Act'
        }
        await updateCie10(id, data)
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //delete
    try {
        let id=1;
        await deleteCie10(id);    
    } catch (e) {
        console.log("No te valió jajaj", e);
    }
    
    //---------------consulta_medica
    //crear
    try{
        const data ={
            'codigo_paciente': '1',
            'motivo_consulta': 'Le duele la barriga',
            'sintomas': 'No quiere comer',
            'codigo_enfermedad': '1',
            'tratamiento': 'Purgante 7 pepas',
            'dias_reposo': '1',
        }
        await createConsulta_medica(data);
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //select all
    try{
        await selectAllConsulta_medica();
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //selectbyid
    try{
        let id=1;
        await selectConsulta_medicaById(id)
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //update
    try{
        let id=1;
        const data ={
            'codigo_paciente': '1',
            'motivo_consulta': 'Le duele el ombligo',
            'sintomas': 'No quiere comer x2',
            'codigo_enfermedad': '1',
            'tratamiento': 'Purgante 5 pepas',
            'dias_reposo': '2',
        }
        await updateConsulta_medica(id, data)
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //delete
    try {
        let id=1;
        await deleteConsulta_medica(id);
    } catch (e) {
        console.log("No te valió jajaj", e);
    }





    //------------enfermedad
    try{
        const data ={
            'codigo_cie10': '1',
            'nombre_enfermedad': 'Cefalea',
        }
        await createEnfermedad(data);
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //select all
    try{
        await selectAllEnfermedad();
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //selectbyid
    try{
        let id=1;
        await selectEnfermedadById(id)
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //update
    try{
        let id=1;
        const data ={
            'codigo_cie10': '1',
            'nombre_enfermedad': 'Cefalitis',
        }
        await updateEnfermedad(id, data)
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //delete
    try {
        let id=1;
        await deleteEnfermedad(id);
    } catch (e) {
        console.log("No te valió jajaj", e);
    }





    //--------especialidad
    try{
        const data ={
            'nombre':'Medicina General'
        }
        await createEspecialidad(data);
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //select all
    try{
        await selectAllEspecialidad();
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //selectbyid
    try{
        let id=1;
        await selectEspecialidadById(id)
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //update
    try{
        let id=1;
        const data ={
            'codigo_cie10': '1',
            'nombre_enfermedad': 'Cefalitis',
        }
        await updateEspecialidad(id, data)
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //delete
    try {
        let id=1;
        await deleteEspecialidad(id);
    } catch (e) {
        console.log("No te valió jajaj", e);
    }






    //--------------horario_medico
    //crear
    try{
        const data ={
            'codigo_medico':'1',
            'fecha':'',
            'hora_inicio':'',
            'tiempo':'',
            'estado_reserva':'Es espera',
            'estado_disponibilidad':'Disponible'
        }
        await createHorario_medico(data);
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //select all
    try{
        await selectAllHorario_medico();
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //selectbyid
    try{
        let id=1;
        await selectHorario_medicoById(id)
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //update
    try{
        let id=1;
        const data ={
            'codigo_medico':'1',
            'fecha':'',
            'hora_inicio':'',
            'tiempo':'',
            'estado_reserva':'En proceso',
            'estado_disponibilidad':'Ocupado'
        }
        await updateHorario_medico(id, data)
    }catch(e){
        console.log("No te valió jajaj", e);
    }
    //delete
    try {
        let id=1;
        await deleteHorario_medico(id);    
    } catch (e) {
        console.log("No te valió jajaj", e);
    }


}