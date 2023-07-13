
import NavbarLeft from '../../components/navleftbar'
import { useState, useEffect } from "react";


export default function Pacientes(){

    const [persona, setPersona] = useState([]);
    const [body, setBody] = useState({ cedula:'', nombres:"", password: "12345", 
        apellidos:"", ocupacion:"",estado_civil:"", pais_origen:"", sexo:"",
        celular:"", direccion:"", fecha_nacimiento:"", lugar_nacimiento:"", cod_rol:3 })
    //const [cedula, setCedula] = useState('')

    // const [state, setState] = useState({
    //     name: "",
    //     age: "",
    // });
    
    function handleChange(event) {
        const value = event.target.value;
        setBody({
            ...body,
            [event.target.name]: value,
        });
    }



    async function postData() {
        try {
            const res = await fetch('http://localhost:4000/personas', {
                method: "post",
                headers: {
                "Content-Type": "application/json",
                "x-access-token": "token-value",
                },
                body: JSON.stringify(body),
            });
            if (!res.ok) {
                const message = `An error has occured: ${res.status} - ${res.statusText}`;
                throw new Error(message);
            }
            const data = await res.json();
            const result = {
                status: res.status + "-" + res.statusText,
                headers: {
                "Content-Type": res.headers.get("Content-Type"),
                "Content-Length": res.headers.get("Content-Length"),
                },
                data: data,
            };
        } catch (err) {
          console.log(err)
        }
    }


    function getPersona(){
        fetch(`http://localhost:4000/personas`)
        .then((response) => response.json())
        .then((actualData) => setPersona(actualData));
    }

    // function changeCedula(e){
    //     setCedula(e)
    // }
    // onChange={e => changeCedula(e.target.value)}

    // const handleChange = (event) => {
    //     const value = event.target.value;
    //     setBody({
    //       ...body,
    //       [event.target.name]: value
    //     });
    // };

    

    function guardarPaciente(){
        console.log("datos ", body);
        postData();
    }





    useEffect(() => {
        getPersona()
        
        
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
                            <a class="navbar-brand" href="#">Pacientes</a>
                        </div>
                        <div class="collapse navbar-collapse">
                            

                        </div>
                    </div>
                </nav>

                <div class="content">
                
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="header">
                                        <h4 class="title">+ Nueva Entrada</h4>
                                        <p class="category">Aquí se escribe una nueva entrada del paciente.</p>
                                    </div>
                                        <table class="table table-hover">
                                            <thead>
                                                <th>Cédula</th>
                                                <th>Nombres</th>
                                                <th>Apellidos</th>
                                            </thead>
                                            
                                            <tbody>							
                                                <tr>
                                                    <td><input value={body.cedula} onChange={handleChange} name="cedula" type="text" class="form-control" placeholder="Cédula"/></td>
                                                    <td><input value={body.nombres} onChange={handleChange} type="text" class="form-control" name="nombres" placeholder="Nombres"/></td>
                                                    <td><input value={body.apellidos} onChange={handleChange} type="text" class="form-control" name="apellidos" placeholder="Apellidos"/></td>
                                                </tr>
                                            </tbody>
                                        </table>	
                                        <table class="table table-hover">	
                                            <thead>
                                                <th>Ocupación</th>
                                                <th>Estado civil</th>
                                                <th>País de Origen</th>
                                                <th>Lugar de Nacimiento</th>
                                                <th>Fecha de Nacimiento</th>
                                            </thead>
                                            <tbody>							
                                                <tr>
                                                    <td><input type="text" value={body.ocupacion} onChange={handleChange} class="form-control" name="ocupacion" placeholder="Ocupación"/></td>
                                                    <td><input type="text" value={body.estado_civil} onChange={handleChange} class="form-control" name="estado_civil" placeholder="Estado civil"/></td>
                                                    <td><input type="text" value={body.pais_origen} onChange={handleChange} class="form-control" name="pais_origen" placeholder="País de origen"/></td>
                                                    <td><input type="text" value={body.lugar_nacimiento} onChange={handleChange} class="form-control" name="lugar_nacimiento" placeholder="Lugar de nacimiento"/></td>
                                                    <td><input type="date" value={body.fecha_nacimiento} onChange={handleChange} class="form-control" name="fecha_nacimiento" placeholder="Fecha de nacimiento"/></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="table table-hover">	
                                            <thead>
                                                <th>Sexo</th>
                                                <th>Celular</th>
                                                <th>Direccion</th>
                                            </thead>
                                            <tbody>							
                                                <tr>
                                                    <td><input type="text" value={body.sexo} onChange={handleChange} class="form-control" name="sexo" placeholder="Sexo"/></td>
                                                    <td><input type="text" value={body.celular} onChange={handleChange} class="form-control" name="celular" placeholder="Celular"/></td>
                                                    <td><input type="text" value={body.direccion} onChange={handleChange} class="form-control" name="direccion" placeholder="Dirección de domicilio"/></td>
                                                    <td><button onClick={guardarPaciente} type="submit" class="btn btn-primary">Guardar entrada</button></td>
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
                                        <h4 class="title">Lista de pacietes</h4>
                                        <p class="category">Aquí hay una lista de todos los pacientes de CMED</p>
                                    </div>
                                    <div class="content table-responsive table-full-width">
                                        <table class="table table-hover">
                                            <thead>
                                                <th>Cédula</th>
                                                <th>Nombres</th>
                                                <th>Apellidos</th>
                                                <th>Ocupación</th>
                                                <th>Estado civil</th>
                                                <th>País de origen</th>
                                                <th>Sexo</th>
                                                <th>Fecha de nacimiento</th>
                                            </thead>
                                                <tbody>
                                                {persona &&
                                                persona.map(({ nombres, apellidos, cedula, ocupacion, estado_civil, pais_origen, sexo, fecha_nacimiento}) => (
                                                    <tr>
                                                        <td>{cedula}</td>
                                                        <td>{nombres}</td>
                                                        <td>{apellidos}</td>
                                                        <td>{ocupacion}</td>
                                                        <td>{estado_civil=='S'?'Soltero':'Casado'}</td>
                                                        <td>{pais_origen}</td>
                                                        <td>{sexo}</td>
                                                        <td>{fecha_nacimiento}</td>
                                                    </tr>
                                                ))}
                                                <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                </tr>
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