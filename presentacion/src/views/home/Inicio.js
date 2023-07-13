
import patients from '../../static/images/patients.png'
import calendario from '../../static/images/calendario.png'
import corazon from '../../static/images/corazon.png'
import usuario1 from '../../static/images/usuario1.jpg'
import telefono from '../../static/images/tel.png'
import documents from '../../static/images/Documents.png'

import '../../static/css/inicio.css'
import { Link } from 'react-router-dom'

export default function Inicio(){

    return(
        <>
        <div className="content">
                <div className="cartas">
                    <div className="carta">
                        <div className="img__carta">
                            <img src={patients} alt="patients" srcSet=""/>
                        </div>
                        <div>
                            <p id="carta__titulo">Pacientes</p>
                            <p id="carta__number">45</p>
                        </div>
                    </div>
                    <div className="carta">
                        <div className="img__carta">
                            <img src={calendario} alt="patients" srcSet=""/>
                        </div>
                        <div>
                            <p id="carta__titulo">Citas</p>
                            <p id="carta__number">25</p>
                        </div>
                    </div>
                    <div className="carta">
                        <div className="img__carta">
                            <img src={corazon} alt="patients" srcSet=""/>
                        </div>
                        <div>
                            <p id="carta__titulo">Tratamientos</p>
                            <p id="carta__number">402</p>
                        </div>
                    </div>
                </div>

                <div class="columns-2 mt-32 ">
                    <div>
                        <h3 class="font-bold text-6xl">Próximos pacientes</h3>
                    </div>
                    <div>
                        <h3 class="font-bold text-6xl">Paciente actual</h3>
                    </div>
                </div>
                <div className="today">
                    <div className="usuarios">
                        <div className="usuario">
                            <div className="usuario__img">
                                <img src={usuario1} alt="usuario"/>
                        </div>
                        <div className="usuario__info">
                            <p id="usuario__nombre">Beth Mccoy</p>
                            <p id="usuario__estado">Scaling</p>
                        </div>
                        <div className="usuario__info">
                            <p id="usuario__time">12:00</p>
                        </div>
                    </div>
                    <div className="usuario">
                        <div className="usuario__img">
                            <img src={usuario1} alt="usuario"/>
                        </div>
                        <div className="usuario__info">
                            <p id="usuario__nombre">Mario Mccoy</p>
                            <p id="usuario__estado">Medical Checkup</p>
                        </div>
                        <div className="usuario__info">
                            <p id="usuario__time">14:00</p>
                        </div>
                    </div>
                    <div className="usuario">
                        <div className="usuario__img">
                            <img src={usuario1} alt="usuario"/>
                        </div>
                        <div className="usuario__info">
                            <p id="usuario__nombre">Alberto Mccoy</p>
                            <p id="usuario__estado">Priksa masuk angun</p>
                        </div>
                        <div className="usuario__info">
                            <p id="usuario__time">20:00</p>
                        </div>
                    </div>
                    <div className="usuario">
                        <div className="usuario__img">
                            <img src={usuario1} alt="usuario"/>
                        </div>
                        <div className="usuario__info">
                            <p id="usuario__nombre">Pedro Mccoy</p>
                            <p id="usuario__estado">Scaling</p>
                        </div>
                        <div className="usuario__info">
                            <p id="usuario__time">22:00</p>
                        </div>
                    </div>
                </div>
                <div className="usuario__details">
                    <div className="details__header">
                        <div className="img__details">
                            <img src={usuario1} alt=""/>
                        </div>
                        <div className="details__info">
                            <p id="details__nombre">Beth Mccoy</p>
                            <p id="details__dir">2235 Avondale Ave Pasadena, </p> 
                            <p id="details__dir">Oklahoma 83900</p>
                        </div>
                    </div>
                    <div className="details__body">
                        <div>
                            <p id="db_titulo">D.O.V</p>
                            <p id="db_descrip">29 February 1999</p>
                        </div>
                        <div>
                            <p id="db_titulo">Sexo</p>
                            <p id="db_descrip">Masculino</p>
                        </div>
                        <div>
                            <p id="db_titulo">Peso</p>
                            <p id="db_descrip">56kg</p>
                        </div>
                        <div>
                            <p id="db_titulo">Altura</p>
                            <p id="db_descrip">172 cm</p>
                        </div>
                        <div>
                            <p id="db_titulo">Ultima cita</p>
                            <p id="db_descrip">02 Jan 2020</p>
                        </div>
                        <div>
                            <p id="db_titulo">Fecha de ultimo ingreso</p>
                            <p id="db_descrip">19 Des 2018</p>
                        </div>
                    </div>
                    <div className="details__enfermedades">
                        <p id="de_uno">Asma</p>
                        <p id="de_dos">Hipertención</p>
                        <p id="de_tres">Alergia</p>
                    </div>
                    <div className="details__footer">
                        <div className="details__botons">
                            <button className="boton telefono">
                                <img src={telefono} alt="" srcSet=""/>
                                (593) 9999-99999
                            </button>
                            <Link to='/consulta'>
                                <button className="boton documentos">
                                    <img src={documents} alt="" srcSet=""/>
                                    Iniciar Consulta
                                </button>
                            </Link>
                        
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}