import NavbarLeft from "../../components/navleftbar";
import { useState, useEffect } from "react";

export default function HistorialMedico(){
    

    const [historialM, setHistorialM] = useState([]);



    function getHM(){
        fetch(`http://localhost:4000/historiales-medicos`)
        .then((response) => response.json())
        .then((actualData) => setHistorialM(actualData));
    }

    useEffect(() => {
        getHM()
        
    }, []);


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
                            <a className="navbar-brand" href="#">Historiales clínicos</a>
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
                                        <h4 className="title">Buscar Paciente</h4>
                                        <p className="category">Busqueda por número de cedula</p>

                                        <div className="box">
                                            <div className="container-1">
                                                <span className="icon"><i className="fa fa-search"></i></span>
                                                <input type="search" id="search" placeholder="Buscar..." />
                                            </div>
                                        </div>
                                    </div>
                                        <table className="table table-hover">
                                            <thead>
                                                <th>Cédula</th>
                                                <th>Nombres</th>
                                                <th>Apellidos</th>
                                                <th>Sexo</th>
                                                <th>Celular</th>
                                            </thead>
                                            <tbody>							
                                                <tr>
                                                    <td><input type="text" className="form-control" name="location" placeholder="Cédula"/></td>
                                                    <td><input type="text" className="form-control" name="responsive_doctor" placeholder="Nombres"/></td>
                                                    <td><textarea id="note" className="form-control" name="issue_description" placeholder="Apellidos"></textarea></td>
                                                    <td><textarea id="note" className="form-control" name="diagnosis" placeholder="Sexo"></textarea></td>
                                                    <td><textarea id="note" className="form-control" name="prescribed_solution" placeholder="Celular"></textarea></td>
                                                    <td><button type="submit" className="btn btn-primary">Cita Médica</button></td>
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
                                        <h4 className="title">Historial médico</h4>
                                        <p className="category">Aquí se muestra el historial médico</p>
                                    </div>
                                    <div className="content table-responsive table-full-width">
                                        <table className="table table-hover">
                                            <thead>
                                                <th>Código de historia Clínica</th>
                                                <th>Número de historia clínica</th>
                                                <th>Nombre Propietario</th>
                                            </thead>
                                            
                                            
                                                <tbody>


                                                {historialM &&
                                                historialM.map(({ cod_historia, num_historia }) => (
                                                    <tr>
                                                        <td>{cod_historia}</td>
                                                        <td>{num_historia}</td>
                                                        <td>Willy Romero</td>
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