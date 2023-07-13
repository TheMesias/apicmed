import express from 'express';
const app = express();
import agendamientoRoutes from './newLogicaNegocio/routes/agendamiento.routes.js';
import alarmaRoutes from './newLogicaNegocio/routes/alarmas.routes.js';
import anamnesisRoutes from './newLogicaNegocio/routes/anamnesis.routes.js';
import antGinecoRoutes from './newLogicaNegocio/routes/ant_ginecoobstetricos.routes.js';
import certificadoMedicoRoutes from './newLogicaNegocio/routes/certificado_medico.routes.js';
import consultaMedicaRoutes from './newLogicaNegocio/routes/consulta_medica.routes.js';
import dietaRoutes from './newLogicaNegocio/routes/dieta.routes.js';
import enfermedadCie10Routes from './newLogicaNegocio/routes/enfermedad_cie10.routes.js';
import especialidadRoutes from './newLogicaNegocio/routes/especialidad.routes.js';
import exameFisicoRoutes from './newLogicaNegocio/routes/examen_fisico.routes.js';
import historialMedicoRoutes from './newLogicaNegocio/routes/historial_medico.routes.js';
import medicamentoRoutes from './newLogicaNegocio/routes/medicamento.routes.js';
import medicoRoutes from './newLogicaNegocio/routes/medico.routes.js';
import pacienteRoutes from './newLogicaNegocio/routes/paciente.routes.js';
import personaRoutes from './newLogicaNegocio/routes/persona.routes.js';
import recetaMedicaRoutes from './newLogicaNegocio/routes/receta_medica.routes.js';
import recetaMedicamentoRoutes from './newLogicaNegocio/routes/receta_medicamento.routes.js';
import rolRoutes from './newLogicaNegocio/routes/rol.routes.js';
import signosVitalesRoutes from './newLogicaNegocio/routes/signos_vitales.routes.js';
import soapRoutes from './newLogicaNegocio/routes/soap.routes.js';
import usuarioRoutes from './newLogicaNegocio/routes/usuario.routes.js';
import cargaCie10Routes from './newLogicaNegocio/routes/carga_datos_cie10.routes.js';



app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, x-access-token');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



app.use(express.json());

// rutas
app.use(agendamientoRoutes);
app.use(alarmaRoutes);
app.use(anamnesisRoutes);
app.use(antGinecoRoutes);
app.use(certificadoMedicoRoutes);
app.use(consultaMedicaRoutes);
app.use(dietaRoutes);
app.use(enfermedadCie10Routes);
app.use(especialidadRoutes);
app.use(exameFisicoRoutes);
app.use(historialMedicoRoutes);
app.use(medicamentoRoutes);
app.use(medicoRoutes);
app.use(pacienteRoutes);
app.use(personaRoutes);
app.use(recetaMedicaRoutes);
app.use(recetaMedicamentoRoutes);
app.use(rolRoutes);
app.use(signosVitalesRoutes);
app.use(soapRoutes);
app.use(usuarioRoutes);
app.use(cargaCie10Routes);

/*
async function connect(){
    const sequelize = new Sequelize('postgres://postgres:postgres@18.117.253.213:5432/proyectdb') // Example for postgres
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}*/


export default app