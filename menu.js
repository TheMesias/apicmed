/*

import { createAnamnesis, deleteAnamnesis, selectAllAnamnesis, selectAnamnesisById, updateAnamnesis } from "./accesodatos/anamnesis.js";
import { createCertificado, deleteCertificado, selectAllCertificado, selectCertificadoById, updateCertificado } from "./accesodatos/certificado.js";
import { createCie10, deleteCie10, selectAllCie10, selectCie10ById, updateCie10 } from "./accesodatos/cie10.js";
import { createConsulta_medica, deleteConsulta_medica, selectAllConsulta_medica, selectConsulta_medicaById, updateConsulta_medica } from "./accesodatos/consulta_medica.js";
import { createEnfermedad, deleteEnfermedad, selectAllEnfermedad, selectEnfermedadById, updateEnfermedad } from "./accesodatos/enfermedad.js";
import { createEspecialidad, deleteEspecialidad, selectAllEspecialidad, selectEspecialidadById, updateEspecialidad } from "./accesodatos/especialidad.js";
import { createHorario_medico, deleteHorario_medico, selectAllHorario_medico, selectHorario_medicoById, updateHorario_medico } from "./accesodatos/horario_medico.js";

import { createMedico, deleteMedico, selectAllMedico, selectMedicoById, updateMedico } from "./accesodatos/medico.js";
import { createPaciente, deletePaciente, selectAllPaciente, selectPacienteById, updatePaciente } from "./accesodatos/paciente.js";
import { createPersona, deletePersona, selectAllPersona, selectPersonaById, updatePersona } from "./accesodatos/persona.js";
import { createUserRol, deleteUserRol, selectAllUserRol, selectUserRol, updateUserRol } from "./accesodatos/rol_usuario.js";
import { createRol, deleteRol, selectAllRol, selectRol, updateRol } from "./accesodatos/rol.js";
import { createSignosVitales, deleteSignosVitales, selectAllSigVitales, selectSignosVitales, updateSignosVitales } from "./accesodatos/signos_vitales.js";
import { createUser, deleteUser, selectAllUsers, selectUser, updateUsuario } from "./accesodatos/usuario.js";
import { createAgendamiento, deleteAgendamiento, selectAllAgendamiento, selectAgendamientoById, updateAgendamiento } from "./accesodatos/agendamiento.js"

export default function Menu() {
    console.log("***Testeo de capa de acceso de datos de la aplicacion***")
    console.log("Seleccione una opcion:")
    console.log("1) Crear")
    console.log("2) Ver todos")
    console.log("3) Ver por Id")
    console.log("4) Actualizar")
    console.log("5) Eliminar")
    let opcion = process.openStdin();
    opcion.addListener("data", function (d) {
        console.log("En qué tabla ingresará?")
        console.log("1) Cie10")
        console.log("2) Agendamiento")
        console.log("3) Anamnesis")
        console.log("4) Certificado")
        console.log("5) Consulta Medica")
        console.log("6) Enfermedad")
        console.log("7) Especialidad")
        console.log("8) Horario Medico")
        console.log("9) Medico")
        console.log("10) Paciente")
        console.log("11) Persona")
        console.log("12) Rol Usuario")
        console.log("13) Rol")
        console.log("14) Signos Vitales")
        console.log("15) Usuario")

        if (d.toString().trim() == '1') {
            let op = process.openStdin();
            op.addListener("data", function (d) {
                if (d.toString().trim() == '1') {
                    try {
                        const data = {
                            'nombre': 'ci10 2',
                            'codigo_enfermedad_cie10': '02'
                        }
                        createCie10(data);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '2') {
                    try {
                        const data = {
                            'codigo_paciente': '1',
                            'codigo_medico': '1',
                            'codigo_especialidad': '2',
                            'codigo_horario': '1',
                            'estado_reserva': '1'
                        }
                        createAgendamiento(data);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '3') {
                    try {
                        const data = {
                            'codigo_paciente': '2',
                            'alergias': 'Alergia 2',
                            'antecedentes_morbidos': 'ND',
                            'antecedentes_famliares': 'ND',
                        }
                        createAnamnesis(data);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '4') {
                    try {
                        const data = {
                            'codigo_consulta_medica': '2',
                            'nombre_certificado_medico': 'Certificado 1 ',
                            'ruta': 'D:/certificados',
                        }
                        createCertificado(data);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '5') {
                    try {
                        const data = {
                            'codigo_paciente': '2',
                            'motivo_consulta': 'motivo 2',
                            'sintomas': 'sintoma 2',
                            'codigo_enfermedad': '2',
                            'tratamiento': 'tratamiento 2',
                            'dias_reposo': '2',
                        }
                        createConsulta_medica(data);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '6') {
                    try {
                        const data = {
                            'codigo_cie10': '2',
                            'nombre_enfermedad': 'enfermedad 3',
                        }
                        createEnfermedad(data);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '7') {
                    try {
                        const data = {
                            'nombre': 'Cardiólogo'
                        }
                        createEspecialidad(data);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '8') {
                    try {
                        const data = {
                            'codigo_medico': '2',
                            'fecha': '2022-06-20',
                            'hora_inicio': '07:00',
                            'tiempo': '8',
                            'estado_reserva': '0',
                            'estado_disponibilidad': '0'
                        }
                        createHorario_medico(data);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '9') {
                    try {
                        const data = {
                            'codigo_persona': '3',
                            'codigo_especialidad': '1'
                        }
                        createMedico(data);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '10') {
                    try {
                        const data = {
                            'codigo_persona': '5'
                        }
                        createPaciente(data);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '11') {
                    try {
                        const data = {
                            'cedula': '1234567890',
                            'nombres': 'Marianela Antonella',
                            'apellidos': 'Fernández Rodriguez',
                            'fecha_nacimiento': '2001-06-25',
                            'tipo_sangre': 'ORH+',
                            'sexo': 'F',
                            'domicilio': 'Quito',
                            'email': 'Marianela@hotmail.com',
                            'celular': '0996871234',
                            'telefono': '20459862'
                        }
                        createPersona(data);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '12') {
                    try {
                        const data = {
                            'codigo_usuario': '5',
                            'codigo_rol': '3'

                        }
                        createUserRol(data);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '13') {
                    try {
                        const data = {
                            'nombre': 'Paciente'
                        }
                        createRol(data);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }
                if (d.toString().trim() == '14') {
                    try {
                        const data = {
                            'codigo_paciente': '2',
                            'altura_mts': '1.50',
                            'peso_kg': '52',
                            'temperatura': '37.5',
                            'frecuencia_respiratoria': '44',
                            'presion_arterial': '110',
                            'frecuencia_cardiaca': '100'
                        }
                        createSignosVitales(data);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }
                if (d.toString().trim() == '15') {
                    try {
                        const data = {
                            'codigo_persona': '5',
                            'password': '12345',
                            'email_valido': '1'
                        }
                        createUser(data);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }
            });
        }

        if (d.toString().trim() == '2') {
            let op = process.openStdin();
            op.addListener("data", function (d) {
                if (d.toString().trim() == '1') {
                    try {
                        const obj = selectAllCie10();
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '2') {
                    try {
                        const obj = selectAllAgendamiento();
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '3') {
                    try {
                        const obj = selectAllAnamnesis();
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '4') {
                    try {
                        const obj = selectAllCertificado();
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '5') {
                    try {
                        const obj = selectAllConsulta_medica();
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '6') {
                    try {
                        const obj = selectAllEnfermedad();
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '7') {
                    try {
                        const obj = selectAllEspecialidad();
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '8') {
                    try {
                        const obj = selectAllHorario_medico();
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '9') {
                    try {
                        const obj = selectAllMedico();
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '10') {
                    try {
                        const obj = selectAllPaciente();
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '11') {
                    try {
                        const obj = selectAllPersona();
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '12') {
                    try {
                        const obj = selectAllUserRol();
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '13') {
                    try {
                        const obj = selectAllRol();
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '14') {
                    try {
                        const obj = selectAllSigVitales();
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '15') {
                    try {
                        const obj = selectAllUsers();
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }
            });
        }

        if (d.toString().trim() == '3') {
            let op = process.openStdin();
            op.addListener("data", function (d) {
                if (d.toString().trim() == '1') {
                    try {
                        let id = 1;
                        //async () => await 
                        const obj = selectCie10ById(id)
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);

                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '2') {
                    try {
                        let id = 1;
                        const obj = selectAgendamientoById(id)
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '3') {
                    try {
                        let id = 1;
                        const obj = selectAnamnesisById(id)
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '4') {
                    try {
                        let id = 1;
                        const obj = selectCertificadoById(id)
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '5') {
                    try {
                        let id = 1;
                        const obj = selectConsulta_medicaById(id)
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '6') {
                    try {
                        let id = 1;
                        const obj = selectEnfermedadById(id)
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '7') {
                    try {
                        let id = 1;
                        const obj = selectEspecialidadById(id)
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '8') {
                    try {
                        let id = 1;
                        const obj = selectHorario_medicoById(id)
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '9') {
                    try {
                        let id = 1;
                        const obj = selectMedicoById(id)
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '10') {
                    try {
                        let id = 1;
                        const obj = selectPacienteById(id)
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '11') {
                    try {
                        let id = 1;
                        const obj = selectPersonaById(id)
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '12') {
                    try {
                        let id = 1;
                        const obj = selectUserRol(id)
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '13') {
                    try {
                        let id = 1;
                        const obj = selectRol(id)
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '14') {
                    try {
                        let id = 1;
                        const obj = selectSignosVitales(id);
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '15') {
                    try {
                        let id = 1;
                        const obj = selectUser(id);
                        setTimeout(function () {
                            console.log("Aqui esta el objeto", obj)
                        }, 1000);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

            });
        }

        if (d.toString().trim() == '4') {
            let op = process.openStdin();
            op.addListener("data", function (d) {
                if (d.toString().trim() == '1') {
                    try {
                        let id = 1;
                        const data = {
                            'nombre': 'Enfermedad id 1 Actualizada',
                            'codigo_enfermedad_cie10': '00'
                        }
                        updateCie10(id, data)
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '2') {
                    try {
                        let id = 1;
                        const data = {
                            'codigo_paciente': '1',
                            'codigo_medico': '1',
                            'codigo_especialidad': '2',
                            'codigo_horario': '2',
                            'estado_reserva': '1'
                        }
                        updateAgendamiento(id, data);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '3') {
                    try {
                        let id = 1;
                        const data = {
                            'codigo_paciente': '1',
                            'alergias': 'Alergia Actualizada',
                            'antecedentes_morbidos': 'Antecedentes M Actulizados',
                            'antecedentes_famliares': 'ND'
                        }
                        updateAnamnesis(id, data)
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '4') {
                    try {
                        let id = 1;
                        const data = {
                            'codigo_consulta_medica': '1',
                            'nombre_certificado_medico': 'Certificado actualizado',
                            'ruta': 'D:/certificados',
                        }
                        updateCertificado(id, data)
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '5') {
                    try {
                        let id = 1;
                        const data = {
                            'codigo_paciente': '1',
                            'motivo_consulta': 'Motivo actualiazado',
                            'sintomas': 'Sintoma Actualizado',
                            'codigo_enfermedad': '1',
                            'tratamiento': 'Tratamiento Actualizado',
                            'dias_reposo': '20',
                        }
                        updateConsulta_medica(id, data)
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '6') {
                    try {
                        let id = 1;
                        const data = {
                            'codigo_cie10': '1',
                            'nombre_enfermedad': 'Enfermedad Actualizada',
                        }
                        updateEnfermedad(id, data)
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '7') {
                    try {
                        let id = 1;
                        const data = {
                            'nombre': 'Especialidad Actualizada',
                        }
                        updateEspecialidad(id, data)
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '8') {
                    try {
                        let id = 1;
                        const data = {
                            'codigo_medico': '1',
                            'fecha': '2022-06-30',
                            'hora_inicio': '10:00',
                            'tiempo': '6',
                            'estado_reserva': '1',
                            'estado_disponibilidad': '1'
                        }
                        updateHorario_medico(id, data)
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '9') {
                    try {
                        let id = 1;
                        const data = {
                            'codigo_especialidad': '2'
                        }
                        updateMedico(id, data)
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '10') {
                    try {
                        let id = 1;
                        const data = {
                            'codigo_persona': '4'
                        }
                        updatePaciente(id, data)
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '11') {
                    try {
                        let id = 1;
                        const data = {
                            'cedula': '1454878787',
                            'nombres': 'Nombres Acrualizados',
                            'apellidos': 'Apellidos Actualizados',
                            'fecha_nacimiento': '2000-10-15',
                            'tipos_sangre': 'ORH-',
                            'sexo': 'M',
                            'domicilio': 'Domiciolio Actualizado',
                            'email': 'useruser@gmail.com',
                            'celular': '0994761704',
                            'telefono': '09648038'
                        }
                        updatePersona(id, data)
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '12') {
                    try {
                        let id = 3;
                        const data = {
                            'codigo_usuario': '1',
                            'codigo_rol': '1'
                        }
                        updateUserRol(id, data)
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '13') {
                    try {
                        let id = 1;
                        const data = {
                            'nombre': 'Rol Actualizado'
                        }
                        updateRol(id, data)
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '14') {
                    try {
                        let id = 2;
                        const data = {
                            'codigo_paciente': '1',
                            'altura_mts': '1.50',
                            'peso_kg': '50.00',
                            'temperatura': '00',
                            'presion_arterial': '25',
                            'frecuencia_respiratoria': '05',
                            'frecuencia_cardiaca': '05',
                        }
                        updateSignosVitales(id, data)
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '15') {
                    try {
                        let id = 1;
                        const data = {
                            'codigo_persona': '1',
                            'password': 'Password actualizado',
                            'email_valido': '0'
                        }
                        updateUsuario(id, data);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

            });
        }

        if (d.toString().trim() == '5') {
            let op = process.openStdin();
            op.addListener("data", function (d) {
                if (d.toString().trim() == '1') {
                    try {
                        let id=5;
                        deleteCie10(id);    
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '2') {
                    try {
                        let id = 1;
                        deleteAgendamiento(id);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '3') {
                    try {
                        let id = 1;
                        deleteAnamnesis(id);    
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '4') {
                    try {
                        let id = 1;
                        deleteCertificado(id);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '5') {
                    try {
                        let id = 1;
                        deleteConsulta_medica(id);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '6') {
                    try {
                        let id = 1;
                        deleteEnfermedad(id);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '7') {
                    try {
                        let id = 1;
                        deleteEspecialidad(id);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '8') {
                    try {
                        let id = 1;
                        deleteHorario_medico(id);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '9') {
                    try {
                        let id = 1;
                        deleteMedico(id);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '10') {
                    try {
                        let id = 1;
                        deletePaciente(id);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '11') {
                    try {
                        let id = 1;
                        deletePersona(id);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '12') {
                    try {
                        let id = 1;
                        deleteUserRol(id);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '13') {
                    try {
                        let id = 1;
                        deleteRol(id);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '14') {
                    try {
                        let id = 1;
                        deleteSignosVitales(id);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

                if (d.toString().trim() == '15') {
                    try {
                        let id = 1;
                        deleteUser(id);
                    } catch (e) {
                        console.log("No te valió jajaj", e);
                    }
                }

            });
        }
        //console.log();
        //console.log("Tu nombre es: ");
    });

}*/