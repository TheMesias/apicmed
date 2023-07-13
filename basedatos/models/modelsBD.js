import { DataTypes } from 'sequelize'
import { sequelize } from '../conection.js'
//import { rol_usuario } from './models.js';

export const rol = sequelize.define('rol', {
    cod_rol: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    nombre_rol: { type: DataTypes.STRING(100), unique:true, allowNull: false},
}, {
    freezeTableName: true
});

export const usuario = sequelize.define('usuario', {
    cod_usuario: { type: DataTypes.BIGINT, primaryKey: true, allowNull: false },
    email: {type: DataTypes.STRING(150), unique:true, allowNull:false},
    password: { type: DataTypes.STRING(20), allowNull: false },
    fecha_ultimo_acceso: { type: DataTypes.DATE, allowNull: true }
}, {
    freezeTableName: true
});

export const persona = sequelize.define('persona', {
    cod_persona: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true, allowNull: false },
    cedula: { type: DataTypes.STRING(10), unique: true, allowNull: false },
    nombres: { type: DataTypes.STRING(150), allowNull: false },
    apellidos: { type: DataTypes.STRING(150), allowNull: false },
    ocupacion: { type: DataTypes.STRING(100), allowNull: true },
    estado_civil: { type: DataTypes.CHAR(1), allowNull: false },
    pais_origen: { type: DataTypes.STRING(5), allowNull: true },
    sexo: { type: DataTypes.CHAR(1), allowNull: false },
    celular: { type: DataTypes.STRING(15), allowNull: false },
    direccion: { type: DataTypes.STRING(255), allowNull: false },
    fecha_nacimiento: { type: DataTypes.DATEONLY, allowNull: false },
    lugar_nacimiento: { type: DataTypes.STRING(100), allowNull: false },
}, {
    freezeTableName: true
});


export const medico = sequelize.define('medico', {
    cod_medico: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    firma_electronica: { type: DataTypes.STRING(100), allowNull: true }
}, {
    freezeTableName: true
});

export const especialidad = sequelize.define('especialidad', {
    cod_especialidad: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    nombre_especialidad: { type: DataTypes.STRING(100), allowNull: false }
}, {
    freezeTableName: true
});


export const paciente = sequelize.define('paciente', {
    cod_paciente: { type: DataTypes.BIGINT, allowNull: false, primaryKey: true },
}, {
    freezeTableName: true
});

export const ant_ginecoobstetricos = sequelize.define('ant_ginecoobstetricos',{
    cod_ant_gine: { type: DataTypes.BIGINT, primaryKey: true, allowNull: false },
    menarca:{type: DataTypes.DATEONLY, allowNull: true },
    ult_fecha_menstruacion:{type: DataTypes.DATEONLY, allowNull: true},
    tipo_ciclo_menstrual:{type: DataTypes.CHAR(1), allowNull: false},
    disminorrea: {type: DataTypes.BOOLEAN, allowNull:false},
    cant_embarazos:{type: DataTypes.SMALLINT, allowNull:false},
    cant_abortos:{type: DataTypes.SMALLINT, allowNull:false},
    cant_cesareas:{type: DataTypes.SMALLINT, allowNull:false},
    cant_partos_norm:{type: DataTypes.SMALLINT, allowNull:false},
    hijos_vivos:{type: DataTypes.SMALLINT, allowNull:false},
    metodo_anticonceptivo:{type: DataTypes.STRING(100), allowNull:false},
},{
    freezeTableName: true
})

export const anamnesis = sequelize.define('anamnesis', {
    cod_anamnesis: { type: DataTypes.BIGINT, allowNull: false, primaryKey: true },
    grupo_sanguineo: { type: DataTypes.STRING(10), allowNull: true },
    antecedente_pp: { type: DataTypes.STRING(500), allowNull: false },//antecedentes patologicos personales
    antecedente_pf: { type: DataTypes.STRING(500), allowNull: false },//antecedentes patologicos familiares
    alergias: { type: DataTypes.STRING(500), allowNull: false }
}, {
    freezeTableName: true
});

export const agendamiento = sequelize.define('agendamiento', {
    cod_agendamiento: { type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
    cod_medico: { type: DataTypes.INTEGER, allowNull: true },
    fecha_cita: { type: DataTypes.DATE, allowNull: false },
    estado: { type: DataTypes.CHAR(1), allowNull: false },
}, {
    freezeTableName: true
});

export const historial_medico = sequelize.define('historial_medico', {
    cod_historia: { type: DataTypes.BIGINT, allowNull: false, primaryKey: true },
    num_historia: { type: DataTypes.BIGINT, allowNull: false, unique: true }
}, {
    freezeTableName: true
});

export const consulta_medica = sequelize.define('consulta_medica', {
    cod_consulta: { type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true}
}, {
    freezeTableName: true
});

export const certificado_medico = sequelize.define('certificado_medico', {
    cod_cert_medico: { type: DataTypes.BIGINT, allowNull: false, primaryKey: true },
    nombre_certificado: { type: DataTypes.STRING(50), allowNull: false },
    ruta: { type: DataTypes.STRING(100), allowNull: true }
}, {
    freezeTableName: true
});

export const signos_vitales = sequelize.define('signos_vitales', {
    cod_signos_vitales: { type: DataTypes.BIGINT, allowNull: false, primaryKey: true},
    altura_mts: { type: DataTypes.DECIMAL(4,2), allowNull: false },
    peso_kg: { type: DataTypes.DECIMAL(4,2), allowNull: false },
    temperatura: { type: DataTypes.DECIMAL(4,2), allowNull: false },
    frecuencia_respiratoria: { type: DataTypes.SMALLINT, allowNull: false },
    presion_arterial: { type: DataTypes.STRING(7), allowNull: false },
    frecuencia_cardiaca: { type: DataTypes.SMALLINT, allowNull: false },   
}, {
    freezeTableName: true
});

export const examen_fisico = sequelize.define('examen_fisico', {
    cod_examen_fisico: { type: DataTypes.BIGINT, allowNull: false, primaryKey: true},
    visualizacion_medico: { type: DataTypes.STRING(500), allowNull: false },
    chequeo_paciente: { type: DataTypes.STRING(500), allowNull: false }, 
    diagnostico: { type: DataTypes.STRING(500), allowNull: false },
    conclusion: { type: DataTypes.STRING(500), allowNull: false }  
},{
    freezeTableName: true
});

export const soap = sequelize.define('soap', {
    cod_consulta: { type: DataTypes.BIGINT, allowNull: false, primaryKey: true },
    consulta_anterior: { type: DataTypes.BIGINT, allowNull: false },
    des_subjetiva: { type: DataTypes.STRING(500), allowNull: false }, 
    des_objetiva: { type: DataTypes.STRING(500), allowNull: false },
    des_evaluacion: { type: DataTypes.STRING(500), allowNull: false },
    des_plan: { type: DataTypes.STRING(500), allowNull: false }     
},{
    freezeTableName: true
});

export const receta_medica = sequelize.define('receta_medica', {
    cod_receta: { type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
    descripcion: { type: DataTypes.STRING(500), allowNull: false}    
},{
    freezeTableName: true
});









export const dieta = sequelize.define('dieta', {
    cod_dieta: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    tipo_dieta: { type: DataTypes.STRING(20), allowNull: false },
    detalle: { type: DataTypes.STRING(500), allowNull: true }
}, {
    freezeTableName: true
});


export const receta_medicamento = sequelize.define('receta_medicamento', {
    cod_receta_medica: { type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
    cod_medicamento: { type: DataTypes.BIGINT, allowNull: false },
    cod_receta: { type: DataTypes.BIGINT, allowNull: false },
    dias:{type: DataTypes.SMALLINT, allowNull:false},
    frecuencia:{type: DataTypes.SMALLINT, allowNull:false},
    dosis:{type: DataTypes.STRING(50), allowNull:false},
    cantidad_tomas:{type: DataTypes.SMALLINT, allowNull:false},
    estado:{type: DataTypes.BOOLEAN, allowNull:false}
}, {
    freezeTableName: true
});




export const medicamento = sequelize.define('medicamento', {
    cod_medicamento: { type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(300), allowNull: false },
    descripcion: { type: DataTypes.STRING(500), allowNull: true },
}, {
    freezeTableName: true
});


export const alarmas = sequelize.define('alarmas', {
    cod_alarma: { type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true},
    cod_receta_medicamento: {type: DataTypes.BIGINT, allowNull: false},
    estado: { type: DataTypes.BOOLEAN, allowNull: false },
    tiempo_recordatorio: { type: DataTypes.DATE, allowNull: false },
}, {
    freezeTableName: true
});

export const enfermedad_cie10 = sequelize.define('enfermedad_cie10', {
    cod_enf_cie10: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    capitulo: { type: DataTypes.SMALLINT, allowNull: false },
    nom_capitulo: { type: DataTypes.STRING(200), allowNull: false },
    cod_cie10_3: { type: DataTypes.CHAR(4), allowNull: false },
    descrip_cie10_3: { type: DataTypes.STRING(200), allowNull: false },
    cod_cie10_4: { type: DataTypes.CHAR(5), allowNull: false },
    descrip_cie10_4: { type: DataTypes.STRING(200), allowNull: false },
}, {
    freezeTableName: true
});







/**************************************
¡¡¡¡¡¡¡¡¡    REFERENCIAS   ¡¡¡¡¡¡¡¡¡¡¡¡¡
***************************************/
/*
Foo.hasOne(Bar, {
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT'
});
RESTRICT , CASCADE , NO ACTION , SET DEFAULT y SET NULL .
*/

//Foreing key rol -> persona
rol.hasMany(persona, { foreignKey: "cod_rol", sourceKey: "cod_rol" });
persona.belongsTo(rol, { foreignKey: "cod_rol", targetId: "cod_rol" });

//Foreing key persona -> usuario
persona.hasOne(usuario, { foreignKey: "cod_usuario", sourceKey: "cod_persona" });
usuario.belongsTo(persona, { foreignKey: "cod_usuario", targetId: "cod_persona" });

//Foreing key persona -> medico
persona.hasOne(medico, { foreignKey: "cod_medico", sourceKey: "cod_persona" });
medico.belongsTo(persona, { foreignKey: "cod_medico", targetId: "cod_persona" });

//Foreing key especialidad -> medico
especialidad.hasMany(medico, { foreignKey: "cod_especialidad", sourceKey: "cod_especialidad" });
medico.belongsTo(especialidad, { foreignKey: "cod_especialidad", targetId: "cod_especialidad" });

//Foreing key persona -> paciente
persona.hasOne(paciente, { foreignKey: "cod_paciente", sourceKey: "cod_persona" });
paciente.belongsTo(persona, { foreignKey: "cod_paciente", targetId: "cod_persona" });

//Foreing key paciente -> Ant_Ginecoobstetricos
paciente.hasOne(ant_ginecoobstetricos, { foreignKey: "cod_ant_gine", sourceKey: "cod_paciente" });
ant_ginecoobstetricos.belongsTo(paciente, { foreignKey: "cod_ant_gine", targetId: "cod_paciente" });

//Foreing key paciente -> anamnesis
paciente.hasOne(anamnesis, { foreignKey: "cod_anamnesis", sourceKey: "cod_paciente" });
anamnesis.belongsTo(paciente, { foreignKey: "cod_anamnesis", targetId: "cod_paciente" });

//Foreing key paciente -> historialmedico
paciente.hasOne(historial_medico, { foreignKey: "cod_historia", sourceKey: "cod_paciente" });
historial_medico.belongsTo(paciente, { foreignKey: "cod_historia", targetId: "cod_paciente" });

//Foreing key paciente -> agendamiento
paciente.hasMany(agendamiento, { foreignKey: "cod_paciente", sourceKey: "cod_paciente" });
agendamiento.belongsTo(paciente, { foreignKey: "cod_paciente", targetId: "cod_paciente" });

//Foreing key historial_medico -> consulta_medica
historial_medico.hasMany(consulta_medica, { foreignKey: "cod_historia", sourceKey: "cod_historia" });
consulta_medica.belongsTo(historial_medico, { foreignKey: "cod_historia", targetId: "cod_historia" });

//Foreing key consulta_medica -> consulta_medica
consulta_medica.hasOne(certificado_medico, { foreignKey: "cod_cert_medico", sourceKey: "cod_consulta" });
certificado_medico.belongsTo(consulta_medica, { foreignKey: "cod_cert_medico", targetId: "cod_consulta" });

//Foreing key consulta_medica -> examen_fisico
consulta_medica.hasOne(examen_fisico, { foreignKey: "cod_examen_fisico", sourceKey: "cod_consulta" });
examen_fisico.belongsTo(consulta_medica, { foreignKey: "cod_examen_fisico", targetId: "cod_consulta" });

//Foreing key examen_fisico -> signos_vitales
examen_fisico.hasOne(signos_vitales, { foreignKey: "cod_signos_vitales", sourceKey: "cod_examen_fisico" });
signos_vitales.belongsTo(examen_fisico, { foreignKey: "cod_signos_vitales", targetId: "cod_examen_fisico" });

//Foreing key consulta_medica -> soap
consulta_medica.hasOne(soap, { foreignKey: "cod_consulta", sourceKey: "cod_consulta" });
soap.belongsTo(consulta_medica, { foreignKey: "cod_consulta", targetId: "cod_consulta" });

//Foreing key consulta_medica -> receta_medica
consulta_medica.hasOne(receta_medica, { foreignKey: "cod_receta", sourceKey: "cod_consulta" });
receta_medica.belongsTo(consulta_medica, { foreignKey: "cod_receta", targetId: "cod_consulta" });

//Foreing key dieta -> receta_medica
dieta.hasMany(receta_medica, { foreignKey: "cod_dieta", sourceKey: "cod_dieta" });
receta_medica.belongsTo(dieta, { foreignKey: "cod_dieta", targetId: "cod_dieta" });

//Foreing key receta_medica -> receta_medicamento
receta_medica.hasMany(receta_medicamento, { foreignKey: "cod_receta", sourceKey: "cod_receta" });
receta_medicamento.belongsTo(receta_medica, { foreignKey: "cod_receta", targetId: "cod_receta" });

//Foreing key medicamento -> receta_medicamento
medicamento.hasMany(receta_medicamento, { foreignKey: "cod_medicamento", sourceKey: "cod_medicamento" });
receta_medicamento.belongsTo(medicamento, { foreignKey: "cod_medicamento", targetId: "cod_medicamento" });

//Foreing key receta_medicamento -> alarmas
receta_medicamento.hasMany(alarmas, { foreignKey: "cod_receta_medicamento", sourceKey: "cod_receta_medica" });
alarmas.belongsTo(receta_medicamento, { foreignKey: "cod_receta_medicamento", targetId: "cod_receta_medica" });
