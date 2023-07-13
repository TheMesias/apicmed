//import { useState, useEffect } from "react"
//import { Grid, Container, Box, TextField, Button} from '@mui/material'
//import {Helmet} from "react-helmet";

import NavbarLeft from '../../components/navleftbar'
import NavBarTop from '../../components/navtopbar'
import Inicio from './Inicio'
import Pacientes from './Pacientes'
import HistorialMedico from './HistorialMedico'
import Medicos from './Medicos'
import Medicamentos from './Medicamentos'
import Certificados from './Certificados'
import MasOpciones from './MasOpciones'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConsultaMedica from './ConsulMedica'
import Cie10 from './Cie10'


export default function Home(){
    return(
        <>
        <div className="wrapper">
            
                <NavbarLeft/>
                
                

            

            <div className="main-panel">
                <NavBarTop/>

                <Routes >
                    <Route path='/' index element={ <Inicio/> } />
                    <Route path='/pacientes' element={ <Pacientes/> } />
                    <Route path='/historias_clinicas' element={ <HistorialMedico/> } />
                    <Route path='/medicos' element={ <Medicos/> } />
                    <Route path='/medicamentos' element={ <Medicamentos/> } />
                    <Route path='/certificados' element={ <Certificados/> } />
                    <Route path='/cie10' element={ <Cie10/> } />
                    <Route path='/opciones' element={ <MasOpciones/> } />

                    <Route path='/consulta' element={ <ConsultaMedica/> } />

                </Routes>
                
                <footer className="footer"></footer>
            </div>
        </div>



            

        </>
    )
}

