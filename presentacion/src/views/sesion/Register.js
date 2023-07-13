

import { Link } from 'react-router-dom';
export default function Register(){


    return(
        <>
            <div class="wrapper fadeInDown">
                <div id="formContent">
                    <h2 class="active"> Crear una cuenta </h2>
                    <div class="fadeIn first">
                    <img src="https://www.pngkey.com/png/full/33-337638_medicine-logo-png-1-medical-logo.png" id="icon" alt="User Icon" />
                    </div>
                    <form method="post" name="registration_form" action="">
                            Usuario: <br/>
                            <input type='text' name='username' id='username' /><br/>
                            Direccion de Email:
                            <input type="text" name="email" id="email" /><br/>
                            Contraseña: <input type="password" name="password" id="password"/><br/>
                            Confirmar contraseña: <input type="password" 
                                                    name="confirmpwd" 
                                                    id="confirmpwd" /><br/>
                            <Link to="/iniciar">
                                <input type="button" 
                                    value="Registrar" 
                                    onclick="" /> 
                            </Link>
                            
                        </form>
                        <p>Regresar al <Link to="/iniciar">inicio de sesión</Link>.</p>
                    <div id="formFooter">
                    <ul>
                        <li>Los nombres de usuario pueden contener solo dígitos, letras mayúsculas y minúsculas y guiones bajos</li>
                            <li>Los correos electrónicos deben tener un formato de correo electrónico válido</li>
                            <li>Las contraseñas deben tener al menos 6 caracteres</li>
                            <li>Las contraseñas deben contener
                                <ul>
                                    <li>Al menos una letra mayúscula (A..Z)</li>
                                    <li>Al menos una letra minúscula (a..z)</li>
                                    <li>Al menos un número (0..9)</li>
                                </ul>
                            </li>
                            <li>Su contraseña y confirmación deben coincidir exactamente</li>
                    </ul>
                    </div>

                </div>
            </div>
        </>
    )
}