import TarjetaConsulta from "../../components/tarjetaConsulta";

import imagen from '../../static/css/consMedUsu.css'

function ConsultaMedica() {
    return ( 
        <>
            <div className="grid grid-rows-6 grid-flow-col gap-4 h-screen">
                <div className="row-span-4">


                    <div className="inf-user">
                        <div className="img-ico">
                            
                        </div>
                        <div className="nombre-pac-consul">
                            <h3 className="consul-bold">JIMMY EDISON GRANIZO RAMOS</h3>
                        </div>
                        <div className="inf-per-consul">
                            INFORMACION PERSONAL
                        </div>
                        <div className="datos-paciente">
                                <div className="consul-ced">
                                    <div class="font-bold">Cédula</div>
                                    <div>060417373-2</div>
                                </div>
                                <hr/>
                                <div className="consul-ocupacion">
                                    <div class="font-bold">Ocupacion</div>
                                    <div>Aguatero</div>
                                </div>
                                <hr/>
                                <div className="consul-anios">
                                    <div class="font-bold">Edad</div>
                                    <div>28</div>
                                </div>
                                <hr/>
                                <div className="consul-sexo">
                                    <div class="font-bold">Sexo</div>
                                    <div>Masculino</div>
                                </div>
                                <hr/>
                                <div className="consul-estado">
                                    <div class="font-bold">Estado Civil</div>
                                    <div>Soltero</div>
                                </div>
                                <hr/>
                                <div className="consul-paisori">
                                    <div class="font-bold">Pais de Origen</div>
                                    <div>Ecuador</div>
                                </div>
                                <hr/>
                                <div className="consul-celu">
                                    <div class="font-bold">Celular</div>
                                    <div>09999999990</div>
                                </div>
                                <hr/>
                                <div className="consul-direcc">
                                    <div class="font-bold">Dirección</div>
                                    <div style={{padding:"0 10px"}}>A lado de la casa de la vecina.</div>
                                </div>
                        </div>
                        <div className="btn-historial">
                            <button type="button" className="btn">Ver Historial Medico</button>
                        </div>     
                    </div>


                </div>

                



                <div className="col-span-4  grid-rows-2">
                    <div className="h-1/3 py-8 px-8">
                        <h3 className="consul-bold">EXAMEN FISICO</h3>
                        <div className="grid-flow-col mx-20">
                            <div class="">
                                <label>OBSERVACIONES MEDICAS</label><br/>
                                <textarea style={{height:"15rem", fontSize:"18pt"}} type="text"  name="Campo" placeholder="Escriba aquí..."/>
                            </div>
                            <div class="">
                                <label>CHEQUEO PACIENTE</label><br/>
                                <textarea style={{height:"15rem", fontSize:"18pt"}} type="text"  name="Campo" placeholder="Escriba aquí..."/>
                            </div>
                            <div class="">
                                <label>DIAGNOSTICO</label><br/>
                                <textarea style={{height:"15rem", fontSize:"18pt"}} type="text"  name="Campo" placeholder="Escriba aquí..."/>
                            </div>
                            <div class="">
                                <label>CONCLUSIÓN</label><br/>
                                <textarea style={{height:"15rem", fontSize:"18pt"}} type="text"  name="Campo" placeholder="Escriba aquí..."/>
                            </div>
                            
                        </div>
                        <button type="submit" className="btn">TERMINAR</button>
                    </div>
                </div>
                

                <div className="row-span-4 col-span-3 bg-sky-100 ">

                    

                    <div class="h-2/6 mx-8 py-8 px-8">
                        <h2 class="text-black font-bold">ANTECEDENTES GINECOOBSTETRICOS</h2>
                        <div class="grid grid-rows-3 grid-flow-col">
                            <div class="">
                                <label>MENARCA</label><br/>
                                <input type="date"  name="Campo" placeholder="Escriba aquí..."/>
                            </div>
                            <div class="">
                                <label>ULTIMA FECHA DE MENSTRUACION</label><br/>
                                <input type="date"  name="Campo" placeholder="Escriba aquí..."/>
                            </div>
                            <div class="">
                                <label>TIPO DE CICLO MENSTRUAL</label><br/>
                                <select id="tipoCicloMenstrual">
                                    <option value="R">REGULAR</option>
                                    <option value="I">IRREGULAR</option>
                                </select>
                            </div>
                            <div class="">
                                <label>DURACION CICLO MENSTRUAL</label><br/>
                                <input type="number"  name="Campo" placeholder="Escriba aquí..."/>
                            </div>
                            <div class="">
                                <label>DISMINORREA</label><br/>
                                <select id="disminorrea">
                                    <option value="S">SI</option>
                                    <option value="N">NO</option>
                                </select>
                            </div>
                            <div class="">
                                <label>CANTIDAD DE EMBARAZOS</label><br/>
                                <input type="number"  name="Campo" placeholder="Escriba aquí..."/>
                            </div>
                            <div class="">
                                <label>CANTIDAD DE ABORTOS</label><br/>
                                <input type="number"  name="Campo" placeholder="Escriba aquí..."/>
                            </div>
                            <div class="">
                                <label>CANTIDAD DE CESAREAS</label><br/>
                                <input type="number"  name="Campo" placeholder="Escriba aquí..."/>
                            </div>
                            <div class="">
                                <label>CANTIDAD DE PARTOS NORMALES</label><br/>
                                <input type="number"  name="Campo" placeholder="Escriba aquí..."/>
                            </div>
                            <div class="">
                                <label>HIJOS VIVOS</label><br/>
                                <input type="number"  name="Campo" placeholder="Escriba aquí..."/>
                            </div>
                            <div class="">
                                <label>METODO ANTICONCEPTIVO</label><br/>
                                <input type="text"  name="Campo" placeholder="Escriba aquí..."/>
                            </div>
                        </div>
                    </div>

                    

                    <div class="h-1/4 mx-8 py-8 px-8">
                        <h2 class="text-black font-bold">ANAMNESIS</h2>
                        <div class="grid grid-rows-2 grid-flow-col gap-4">
                            <div class="">
                                <label for="consulGS">GRUPO SANGUINEO</label><br/>
                                <input type="text"  name="consulGS" style={{width:"30%"}} placeholder="Escriba aquí..."/>
                            </div>
                            <div class="">
                                <label>ANTECEDENTES PATOLOGICOS PERSONALES</label><br/>
                                <textarea type="text"  name="Campo" placeholder="Escriba aquí..."/>
                            </div>
                            <div class="">
                                <label>ANTECEDENTES PATOLOGICOS FAMILIARES</label><br/>
                                <textarea type="text"  name="Campo" placeholder="Escriba aquí..."/>
                            </div>
                            <div class="">
                                <label>ALERGIAS</label><br/>
                                <textarea type="text"  name="Campo" placeholder="Escriba aquí..."/>
                            </div>
                        </div>
                    </div>

                    
                    <div class="h-1/3 mx-8 py-8 px-8">
                    <h2 class="text-black font-bold">SIGNOS VITALES</h2>
                    <div class="grid grid-rows-3 grid-flow-col">
                        <div class="">
                            <label>ALTURA</label><br/>
                            <input type="text"  name="Campo" placeholder="Escriba aquí..."/>
                        </div>
                        <div class="">
                            <label>PESO</label><br/>
                            <input type="text"  name="Campo" placeholder="Escriba aquí..."/>
                        </div>
                        <div class="">
                            <label>TEMPERATURA</label><br/>
                            <input type="text"  name="Campo" placeholder="Escriba aquí..."/>
                        </div>
                        <div class="">
                            <label>FRECUENCIA RESPIRATORIA</label><br/>
                            <input type="text"  name="Campo" placeholder="Escriba aquí..."/>
                        </div>
                        <div class="">
                            <label>PRESION ARTERIAL</label><br/>
                            <input type="text"  name="Campo" placeholder="Escriba aquí..."/>
                        </div>
                        <div class="">
                            <label>FRECUENCIA CARDIACA</label><br/>
                            <input type="text"  name="Campo" placeholder="Escriba aquí..."/>
                        </div>
                    </div>
                </div>

                </div>
            </div>            
        </>
     );
}

export default ConsultaMedica;
/*


<div className="inf-user">
        <div className="img-ico">
            
        </div>
        <div className="Editar_name">
            <h6>JIMMY EDISON GRANIZO RAMOS</h6>
        </div>
        <div className="btn">
            <button type="button" className="btn btn-primary">INFORMACION PERSONAL</button>
            <button type="button" className="btn btn-secondary">INFORMACION CONTACTO</button>
        </div>
        <div className="btn-historial">
            <button type="button" className="btn btn-link">Ver Historial Medico</button>
        </div>
        <div className="datos-paciente">
                <div className="img-ced">
                    <img src="ico/tarjeta-de-identificacion.png" width="40" height="40" >
                </div>
                060417373-2
                <hr/>
                <div className="img-anios">
                    <img src="ico/usuario-anio.png" width="40" height="40" >
                </div>
                18 anios
                <hr/>
                <div className="img-sexo">
                    <img src="ico/generos.png" width="40" height="40" >
                </div>
                masculino
                <hr/>
                <div className="img-estado">
                    <img src="ico/anillo-de-bodas.png" width="40" height="40" >
                </div>
                soltero
                <hr/>
                <div className="img-gruposang">
                    <img src="ico/donacion-de-sangre.png" width="40" height="40" >
                </div>
                O+
                <hr/>
                <div className="img-naciona">
                    <img src="ico/hablar.png" width="40" height="40" >
                </div>
                Ecuatoriano
                <hr/>
                <div className="img-fechanac">
                    <img src="ico/cumpleanos.png" width="40" height="40" >
                </div>
                22/01/1998
        </div>      
    </div>  























<div className="grid grid-rows-3 grid-flow-col gap-4">
  <div className="row-span-3 ...">01</div>
  <div className="col-span-2 ...">02</div>
  <div className="row-span-2 col-span-2 ...">03</div>
</div>




<div className="columns-2 ">
                <div className="columns-2 bg-slate-700 seiz">
                    jeje
                </div>
                <div className="columns-3">
                    <div className="columns-1">
                        col1
                    </div>
                    <div className="columns-1">
                        col2
                    </div>
                    <div className="columns-1">
                        col3
                    </div>
                </div>
            </div>*/