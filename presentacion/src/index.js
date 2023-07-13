import React from 'react';
import ReactDOM from 'react-dom/client';
import './static/css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./views/sesion/Login.js";
import Register from "./views/sesion/Register.js";
import Home from './views/home/Home.js';
import HistorialMedico from './views/home/HistorialMedico.js';
import Medicos from './views/home/Medicos';
import Medicamentos from './views/home/Medicamentos';
import Pacientes from './views/home/Pacientes';


import './static/css/input.css'
import ConsultaMedica from './views/home/ConsulMedica';
import MasOpciones from './views/home/MasOpciones';
import Certificados from './views/home/Certificados';
import Cie10 from './views/home/Cie10.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route path="historias_clinicas" element={<HistorialMedico />}/>
          <Route path="medicos" element={<Medicos />}/>
          <Route path="pacientes" element={<Pacientes />}/>
          <Route path="medicamentos" element={<Medicamentos />}/>
          <Route path="consulta" element={<ConsultaMedica/>}/>
          <Route path="certificados" element={<Certificados/>}/>
          <Route path="cie10" element={<Cie10/>}/>
          <Route path="opciones" element={<MasOpciones/>}/>
        </Route>
        <Route path="iniciar" element={<Login />}/>
        <Route path="registrarse" element={<Register />}/>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

/*
  <React.StrictMode>
    <App />
  </React.StrictMode>




  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="iniciar" element={<Login />}/>
      <Route path="registrarse" element={<Register />}/>
      <Route path="historias_clinicas" element={<HistorialMedico />}/>
      <Route path="medicos" element={<Medicos />}/>
      <Route path="pacientes" element={<Pacientes />}/>
      <Route path="medicamentos" element={<Medicamentos />}/>
    </Routes>
  </BrowserRouter>


 */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
