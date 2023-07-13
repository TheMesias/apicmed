


function Certificados() {
    return (  
        <>
            <div className="content">
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h4 className="title">Elija una consulta médica</h4>
                                <p className="category">Aquí se presentan todas las consultas médicas de las cuales puede realizar un certificado médico.</p>
                            </div>
                            <div className="content table-responsive table-full-width">
                                <table className="table table-hover">
                                    <thead>
                                        <th>Nombre del Doctor</th>
                                        <th>Especialidad</th>
                                        <th>Paciente</th>
                                        <th>Contacto Paciente</th>
                                    </thead>
                                    <tbody>
                                    
                                    <tr>
                                        <td>Jhony Riera</td>
                                        <td>Medico General</td>
                                        <td>Willy Romero</td>
                                        <td>0992736491</td>
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
    );
}

export default Certificados;