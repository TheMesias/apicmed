import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js"


const tbl_rol = sequelize.define('tbl_rol', {
    codigo_rol: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    nombre: { type: DataTypes.STRING(100), allowNull: false },
}, {
    freezeTableName: true
});
console.log(tbl_rol === sequelize.models.tbl_rol);

const tbl_rol_usuario = sequelize.define('tbl_rol_usuario', {
    codigo_usuario_rol: { type: DataTypes.INTEGER(11), primaryKey: true, autoIncrement: true, allowNull: false },
    codigo_rol: { type: DataTypes.INTEGER, allowNull: false },
    codigo_usuario: { type: DataTypes.INTEGER, allowNull: false }
}, {
    freezeTableName: true
});

console.log(tbl_rol_usuario === sequelize.models.tbl_rol_usuario);


const tbl_usuario = sequelize.define('tbl_usuario', {
    codigo_usuario: { type: DataTypes.INTEGER(11), primaryKey: true, autoIncrement: true, allowNull: false },
    codigo_persona: { type: DataTypes.INTEGER(11), allowNull: false },
    password: { type: DataTypes.STRING(255), allowNull: false },
    email_valido: { type: DataTypes.SMALLINT(1), allowNull: false }
}, {
    freezeTableName: true
});

console.log(tbl_usuario === sequelize.models.tbl_usuario);


const tbl_persona = sequelize.define('tbl_persona', {
    codigo_persona: { type: DataTypes.INTEGER(11), primaryKey: true, autoIncrement: true, allowNull: false },
    cedula: { type: DataTypes.STRING(10), unique: true, allowNull: false },
    nombres: { type: DataTypes.STRING(100), allowNull: false },
    fecha_nacimiento: { type: DataTypes.DATEONLY, allowNull: false },
    tipo_sangre: { type: DataTypes.STRING(5), allowNull: false },
    sexo: { type: DataTypes.CHAR(1), allowNull: false },
    domiciliio: { type: DataTypes.STRING(255), allowNull: false },
    email: { type: DataTypes.STRING(150) },
    celular: { type: DataTypes.STRING(10) },
    telefono: { type: DataTypes.STRING(10) }
}, {
    freezeTableName: true
});

console.log(tbl_persona === sequelize.models.tbl_persona);

const tbl_medico = sequelize.define('tbl_medico', {
    codigo_medico: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    codigo_persona: { type: DataTypes.INTEGER, allowNull: false },
    codigo_especialidad: { type: DataTypes.INTEGER, allowNull: false }
}, {
    freezeTableName: true
});

console.log(tbl_medico === sequelize.models.tbl_medico);

const tbl_especialidad = sequelize.define('tbl_especialidad', {
    codigo_especialidad: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    nombre: { type: DataTypes.STRING(50), allowNull: false }
}, {
    freezeTableName: true
});

console.log(tbl_especialidad === sequelize.models.tbl_especialidad);


//Constraints

//Foreing key tbl_rol_usuario -> tbl_rol

tbl_rol.hasMany(tbl_rol_usuario, {
    foreignKey: "codigo_rol",
    sourceKey: "codigo_rol"
})

tbl_rol_usuario.belongsTo(tbl_rol, {
    foreignKey: "codigo_rol",
    targetId: "codigo_rol"
})

//Foreing key tbl_rol_usuario -> tbl_usuario

tbl_usuario.hasMany(tbl_rol_usuario, {
    foreignKey: "codigo_usuario",
    sourceKey: "codigo_usuario"
})

tbl_rol_usuario.belongsTo(tbl_usuario, {
    foreignKey: "codigo_usuario",
    targetId: "codigo_usuario"
})

//Foreing key tbl_usuario -> tbl_persona

tbl_persona.hasMany(tbl_usuario, {
    foreignKey: "codigo_persona",
    sourceKey: "codigo_persona"
})

tbl_usuario.belongsTo(tbl_persona, {
    foreignKey: "codigo_persona",
    targetId: "codigo_persona"
})

//Foreing key tbl_medico -> tbl_persona

tbl_persona.hasMany(tbl_medico, {
    foreignKey: "codigo_persona",
    sourceKey: "codigo_persona"
})

tbl_medico.belongsTo(tbl_persona, {
    foreignKey: "codigo_persona",
    targetId: "codigo_persona"
})

//Foreing key tbl_medico -> codigo_especialidad

tbl_especialidad.hasMany(tbl_medico, {
    foreignKey: "codigo_especialidad",
    sourceKey: "codigo_especialidad"
})

tbl_medico.belongsTo(tbl_especialidad, {
    foreignKey: "codigo_especialidad",
    targetId: "codigo_especialidad"
})