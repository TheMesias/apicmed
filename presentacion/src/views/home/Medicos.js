import NavbarLeft from "../../components/navleftbar";
import { useState, useEffect } from "react";

export default function Medicos(){


    const [persona, setPersona] = useState([]);
    const [medicos, setMedicos] = useState([]);
    const [especialidad, setEspecialidad] = useState([]);



    function getPersona(){
        fetch(`http://localhost:4000/personas`)
        .then((response) => response.json())
        .then((actualData) => setPersona(actualData));
    }

    function getMedicos(){
        fetch(`http://localhost:4000/medicos`)
        .then((response) => response.json())
        .then((actualData) => setMedicos(actualData));
    }

    function getEspecialidad(){
        fetch(`http://localhost:4000/especialidades-medicas`)
        .then((response) => response.json())
        .then((actualData) => setEspecialidad(actualData));
    }
    useEffect(() => {
        getPersona()
        getMedicos()
        getEspecialidad()
        
    }, []);

    //http://localhost:4000/personas




    return(
        <>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar bar1"></span>
                            <span className="icon-bar bar2"></span>
                            <span className="icon-bar bar3"></span>
                        </button>
                        <a className="navbar-brand" href="#">Listado de Médicos</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        

                    </div>
                </div>
            </nav>


            <div className="content">
            
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="header">
                                    <h4 className="title">Nueva entrada</h4>
                                    <p className="category">Aquí ingresar datos del doctor</p>
                                </div>
                                    <table className="table table-hover">
                                        <thead>
                                            <th>Nombre del Doctor</th>
                                            <th>Especialidad</th>
                                            <th>Dirección</th>
                                            <th>Celular</th>
                                            <th>Email</th>
                                            <th>Cédula</th>
                                        </thead>
                                        <tbody>							
                                            <tr>
                                                <td><textarea type="text" className="form-control" name="doctor_name" placeholder="Nombre del Doctor"/></td>
                                                <td><textarea type="text" className="form-control" name="doctor_type" placeholder="Especialidad"/></td>
                                                <td><textarea type="text" className="form-control" name="address" placeholder="Dirección"/></td>
                                                <td><textarea type="text" className="form-control" name="phone" placeholder="Celular"/></td>
                                                <td><input type="text" className="form-control" name="email" placeholder="Email"/></td>
                                                <td><textarea type="text" className="form-control" name="treatment_period" placeholder="Cédula"/></td>
                                                <td><button type="submit" className="btn btn-primary">Save entry</button></td>

                                                <input type="hidden" name="csrf" value=""/>
                                            </tr>
                                        </tbody>
                                    </table>
                            </div>
                        </div>

                    </div>
                </div>	
            
            
            
            
            
            
            
            
            
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="header">
                                    <h4 className="title">Listado de doctores</h4>
                                    <p className="category">Aquí se listan los doctores</p>
                                </div>
                                <div className="content table-responsive table-full-width">
                                    <table className="table table-hover">
                                        <thead>
                                            <th>Nombre del Doctor</th>
                                            <th>Especialidad</th>
                                            <th>Dirección</th>
                                            <th>Celular</th>
                                            <th>Email</th>
                                            <th>Cédula</th>
                                        </thead>
                                        <tbody>
                                        
                                        {medicos &&
                                        medicos.map(({ nombres, cedula }) => (
                                            <tr>
                                                <td>{nombres}</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>{cedula}</td>
                                            </tr>
                                        ))}
                                        
                                        
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        
        </>
    )
}