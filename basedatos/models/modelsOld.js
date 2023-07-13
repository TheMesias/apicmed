// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('postgres::memory:');
/*
import { DataTypes } from 'sequelize'
import { sequelize } from '../conection.js'

export const rol = sequelize.define('rol', {
    codigo_rol: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    nombre: { type: DataTypes.STRING(100), allowNull: false },
}, {
    freezeTableName: true
});

export const rol_usuario = sequelize.define('rol_usuario', {
    codigo_usuario_rol: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    codigo_rol: { type: DataTypes.INTEGER, allowNull: false },
    codigo_usuario: {
        type: DataTypes.INTEGER, allowNull: false
    }
}, {
    freezeTableName: true
});

export const usuario = sequelize.define('usuario', {
    codigo_usuario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    codigo_persona: { type: DataTypes.INTEGER, allowNull: false },
    password: { type: DataTypes.STRING(255), allowNull: false },
    email_valido: { type: DataTypes.SMALLINT, allowNull: false }
}, {
    freezeTableName: true
});

export const persona = sequelize.define('persona', {
    codigo_persona: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    cedula: { type: DataTypes.STRING(10), unique: true, allowNull: false },
    nombres: { type: DataTypes.STRING(100), allowNull: false },
    apellidos: { type: DataTypes.STRING(100), allowNull: false },//añado apellidos NR
    fecha_nacimiento: { type: DataTypes.DATEONLY, allowNull: false },
    tipo_sangre: { type: DataTypes.STRING(5), allowNull: false },
    sexo: { type: DataTypes.CHAR(1), allowNull: false },
    domicilio: { type: DataTypes.STRING(255), allowNull: false },
    email: { type: DataTypes.STRING(150) },
    celular: { type: DataTypes.STRING(10) },
    telefono: { type: DataTypes.STRING(10) }
}, {
    freezeTableName: true
});

export const paciente = sequelize.define('paciente', {
    codigo_paciente: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    codigo_persona: { type: DataTypes.INTEGER, allowNull: false }
}, {
    freezeTableName: true
});

export const signos_vitales = sequelize.define('signos_vitales', {
    codigo_signos_vitales: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, },
    codigo_paciente: { type: DataTypes.INTEGER, allowNull: true },
    altura_mts: { type: DataTypes.DECIMAL(4, 2), allowNull: false },
    peso_kg: { type: DataTypes.DECIMAL(4, 2), allowNull: false },
    frecuencia_respiratoria: { type: DataTypes.SMALLINT, allowNull: false },
    presion_arterial: { type: DataTypes.STRING(7), allowNull: false },
    frecuencia_cardiaca: { type: DataTypes.SMALLINT, allowNull: false }
}, {
    freezeTableName: true
});

export const anamnesis = sequelize.define('anamnesis', {
    codigo_anamnesis: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    codigo_paciente: { type: DataTypes.INTEGER, allowNull: false },
    alergias: { type: DataTypes.STRING(255), allowNull: false },
    antecedentes_morbidos: { type: DataTypes.STRING(255), allowNull: false },
    antecedentes_famliares: { type: DataTypes.STRING(7), allowNull: false },
}, {
    freezeTableName: true
});

export const consulta_medica = sequelize.define('consulta_medica', {
    codigo_consulta_medica: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true , autoIncrement: true},
    //codigo_agendamiento: { type: DataTypes.INTEGER, allowNull:false},
    codigo_paciente: { type: DataTypes.INTEGER, allowNull: false },
    motivo_consulta: { type: DataTypes.STRING(150), allowNull: false },
    sintomas: { type: DataTypes.STRING(500), allowNull: false },
    codigo_enfermedad: { type: DataTypes.INTEGER, allowNull: false },
    tratamiento: { type: DataTypes.STRING(500), allowNull: false },
    dias_reposo: { type: DataTypes.SMALLINT, allowNull: false }
}, {
    freezeTableName: true
});

export const certificado = sequelize.define('certificado', {
    codigo_certificado: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    codigo_consulta_medica: { type: DataTypes.INTEGER, allowNull: false },
    nombre_certificado_medico: { type: DataTypes.STRING(255), allowNull: false },
    ruta: { type: DataTypes.STRING(300), allowNull: false }
}, {
    freezeTableName: true
});

export const enfermedad = sequelize.define('enfermedad', {
    codigo_enfermedad: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    codigo_cie10: { type: DataTypes.INTEGER, allowNull: false },
    nombre_enfermedad: { type: DataTypes.STRING(150), allowNull: false }
}, {
    freezeTableName: true
});

export const cie10 = sequelize.define('cie10', {
    codigo_cie10: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(255), allowNull: false },
    codigo_enfermedad_cie10: { type: DataTypes.STRING(5), allowNull: false }
}, {
    freezeTableName: true
});

export const medico = sequelize.define('medico', {
    codigo_medico: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    codigo_persona: { type: DataTypes.INTEGER, allowNull: false },
    codigo_especialidad: { type: DataTypes.INTEGER, allowNull: false }
}, {
    freezeTableName: true
});

export const especialidad = sequelize.define('especialidad', {
    codigo_especialidad: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    nombre: { type: DataTypes.STRING(50), allowNull: false }
}, {
    freezeTableName: true
});


export const horario_medico = sequelize.define('horario_medico', {
    codigo_horario_medico: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    codigo_medico: { type: DataTypes.INTEGER, allowNull: false },
    fecha: { type: DataTypes.DATEONLY },
    hora_inicio: { type: DataTypes.STRING(8) },
    tiempo: { type: DataTypes.SMALLINT },
    estado_reserva: { type: DataTypes.SMALLINT },
    estado_disponibilidad: { type: DataTypes.SMALLINT },
}, {
    freezeTableName: true
});

export const agendamiento = sequelize.define('agendamiento', {
    codigo_agendamiento: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true, allowNull:false},
    codigo_paciente: {type:DataTypes.INTEGER,allowNull:false},
    codigo_medico: {type:DataTypes.INTEGER,allowNull:false},
    codigo_especialidad: {type:DataTypes.INTEGER,allowNull:false},
    codigo_horario: {type:DataTypes.INTEGER,allowNull:false},
    estado_reserva: {type:DataTypes.SMALLINT,allowNull:false},
}, {
    freezeTableName: true
});

//




//export Constraints
//Foreing key rol_usuario -> rol
rol.hasMany(rol_usuario, { foreignKey: "codigo_rol", sourceKey: "codigo_rol" });
rol_usuario.belongsTo(rol, { foreignKey: "codigo_rol", targetId: "codigo_rol" });

//Foreing key rol_usuario -> usuario
usuario.hasMany(rol_usuario, { foreignKey: "codigo_usuario", sourceKey: "codigo_usuario" });
rol_usuario.belongsTo(usuario, { foreignKey: "codigo_usuario", targetId: "codigo_usuario" });

//Foreing key usuario -> persona
persona.hasMany(usuario, { foreignKey: "codigo_persona", sourceKey: "codigo_persona" });
usuario.belongsTo(persona, { foreignKey: "codigo_persona", targetId: "codigo_persona" });

//Foreing key paciente -> persona
persona.hasMany(paciente, { foreignKey: "codigo_persona", sourceKey: "codigo_persona" });
paciente.belongsTo(persona, { foreignKey: "codigo_persona", targetId: "codigo_persona" });

//Foreing key signos_vitales -> paciente
paciente.hasMany(signos_vitales, { foreignKey: "codigo_paciente", sourceKey: "codigo_paciente" });
signos_vitales.belongsTo(paciente, { foreignKey: "codigo_paciente", targetId: "codigo_paciente" });

//Foreing key anamnesis -> paciente
paciente.hasMany(anamnesis, { foreignKey: "codigo_paciente", sourceKey: "codigo_paciente" });
anamnesis.belongsTo(paciente, { foreignKey: "codigo_paciente", targetId: "codigo_paciente" });

//Foreing key consulta_medica -> paciente
paciente.hasMany(consulta_medica, { foreignKey: "codigo_paciente", sourceKey: "codigo_paciente" });
consulta_medica.belongsTo(paciente, { foreignKey: "codigo_paciente", targetId: "codigo_paciente" });

//Foreing key certificado -> consultta_medica
consulta_medica.hasOne(certificado, { foreignKey: "codigo_consulta_medica", sourceKey: "codigo_consulta_medica" });
certificado.belongsTo(consulta_medica, { foreingKey: "codigo_consulta_medica", targetId: "codigo_consulta_medica" });

//Foreing key consulta_medica -> enfermedad
enfermedad.hasMany(consulta_medica, { foreignKey: "codigo_enfermedad", sourceKey: "codigo_enfermedad" });
consulta_medica.belongsTo(enfermedad, { foreignKey: "codigo_enfermedad", targetId: "codigo_enfermedad" });

//Foreign key agendamiento -> consulta_medica
//agendamiento.hasMany(consulta_medica, { foreignKey: "codigo_agendamiento", sourceKey: "codigo_agendamiento"});
//consulta_medica.belongsTo(agendamiento, { foreignKey: "codigo_agendamiento", sourceKey: "codigo_agendamiento"});


//Foreing key cei10 -> enfrmedad
cie10.hasOne(enfermedad, { foreignKey: "codigo_cie10", targetId: "codigo_cie10" });
enfermedad.belongsTo(cie10, { foreignKey: "codigo_cie10", sourceKey: "codigo_cie10" });

//Foreing key medico -> persona
persona.hasMany(medico, { foreignKey: "codigo_persona", sourceKey: "codigo_persona" });
medico.belongsTo(persona, { foreignKey: "codigo_persona", targetId: "codigo_persona" });

//Foreing key medico -> especialidad
especialidad.hasMany(medico, { foreignKey: "codigo_especialidad", sourceKey: "codigo_especialidad" });
medico.belongsTo(especialidad, { foreignKey: "codigo_especialidad", targetId: "codigo_especialidad" });

//Foreign key medico -> horario_medico
medico.hasMany(horario_medico, { foreignKey: "codigo_medico", sourceKey: "codigo_medico" });
horario_medico.belongsTo(medico, { foreignKey: "codigo_medico", targetId: "codigo_medico" });



/*

 default {
    rol,
    rol_usuario,
    usuario,
    persona,
    paciente,
    signos_vitales,
    anamnesis,
    consulta_medica,
    certificado,
    enfermedad,
    cie10,
    medico,
    especialidad
}*/