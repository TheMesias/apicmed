
import { useState, useEffect } from 'react';

function Cie10() {

    const [cie10, setCie10] = useState([])

    function getCie10(){
        fetch(`http://localhost:4000/enfermedades-cie10`)
        .then((response) => response.json())
        .then((actualData) => setCie10(actualData));
    }
    useEffect(() => {
        getCie10()
    }, []);


    return (  
        <>
            <div className="content">
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h4 className="title">Listado de Enfermedades del estandar</h4>
                                <p className="category">Aquí se listan todas las enfermedades correspondientes al estandar internacional de enfermedades.</p>
                            </div>
                            <div className="content table-responsive table-full-width">
                                <table className="table table-hover">
                                    <thead>
                                        <th style={{textAlign:"center"}}>Capitulo</th>
                                        <th style={{textAlign:"center"}}>Nombre del Capítulo</th>
                                        <th style={{textAlign:"center"}}>Cod CIE10 General</th>
                                        <th style={{textAlign:"center"}}>Nombre CIE10 General</th>
                                        <th style={{textAlign:"center"}}>Cod CIE10 Especifico</th>
                                        <th style={{textAlign:"center"}}>Nombre CIE10 Especifico</th>
                                    </thead>
                                    <tbody>
                                    
                                    {cie10 &&
                                        cie10.map(({ capitulo, nom_capitulo, cod_cie10_3, descrip_cie10_3, cod_cie10_4, descrip_cie10_4 }) => (
                                        <tr>
                                            <td>{capitulo}</td>
                                            <td>{nom_capitulo}</td>
                                            <td>{cod_cie10_3}</td>
                                            <td>{descrip_cie10_3}</td>
                                            <td>{cod_cie10_4}</td>
                                            <td>{descrip_cie10_4}</td>
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
    );
}

export default Cie10;