import NavbarLeft from '../../components/navleftbar'
import { useState, useEffect } from 'react';

export default function Medicamentos(){

    const [medicamentos, setMedicamentos] = useState([])

    function getMedicamentos(){
        fetch(`http://localhost:4000/medicamentos`)
        .then((response) => response.json())
        .then((actualData) => setMedicamentos(actualData));
    }
    useEffect(() => {
        getMedicamentos()
    }, []);

    return(
        <>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar bar1"></span>
                            <span class="icon-bar bar2"></span>
                            <span class="icon-bar bar3"></span>
                        </button>
                        <a class="navbar-brand" href="#">Medicamentos</a>
                    </div>
                </div>
            </nav>


            
            <div class="content">
            
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="header">
                                    <h4 class="title">Nueva Entrada</h4>
                                    <p class="category">Aquí se escribe una nueva entrada para el medicamento.</p>
                                </div>
                                    <table class="table table-hover">
                                        <thead>
                                            <th>Nombre del medicamento</th>
                                            <th>Forma/Dosis</th>
                                            <th>Frecuencia</th>
                                        </thead>
                                        <tbody>							
                                            <tr>
                                                <td><input type="text" class="form-control" name="medication_name" placeholder="Nombre del medicamento"/></td>
                                                <td><textarea id="note" class="form-control" name="medication_dose" placeholder="Inyección, Tableta, Cápsula, Jarabe, Ungüento, Supositorio, etc."></textarea></td>
                                                <td><textarea id="note" class="form-control" name="medication_frequency" placeholder="Una vez al día / dos veces al día / tres veces al día / cada ___ horas / otro"></textarea></td>
                                            </tr>
                                        </tbody>
                                    </table>	
                                    <table class="table table-hover">	
                                        <thead>
                                        
                                            <th>Fecha de inicio de la receta</th>
                                            <th>Fecha de finalización de la receta</th>
                                            <th>Enlace a la base de datos</th>
                                            <th>Advertencias/Notas</th>
                                        </thead>
                                        <tbody>							
                                            <tr>
                                                <td><input type="date" class="form-control" name="prescription_begin" placeholder="Fecha de inicio de la receta"/></td>
                                                <td><input type="date" class="form-control" name="prescription_end" placeholder="Fecha de finalización de la receta"/></td>
                                                <td><input type="text" class="form-control" name="medication_link" placeholder="Enlace propio a la medicación"/></td>
                                                <td><textarea id="note" class="form-control" name="medication_warnings" placeholder="Advertencias / notas"></textarea></td>
                                                <td><button type="submit" class="btn btn-primary">Guardar entrada</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                            </div>
                        </div>

                    </div>
                </div>		
            
            
            
            
            
            
            
            
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="header">
                                    <h4 class="title">Lista de medicamentos</h4>
                                    <p class="category">Aquí hay una lista de todas las píldoras de medicamentos que tomó</p>
                                </div>
                                <div class="content table-responsive table-full-width">
                                    <table class="table table-hover">
                                        <thead>
                                            <th>Fecha de creación</th>
                                            <th>Nombre del medicamento</th>
                                            <th>Ver</th>
                                        </thead>

                                            <tbody>
                                                {medicamentos &&
                                                    medicamentos.map(({ createdAt, nombre, cod_medicamento }) => (
                                                    <tr>
                                                        <td>{createdAt}</td>
                                                        <td>{nombre}</td>
                                                        <td><a href={cod_medicamento}>Ver mas detalles</a></td>
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