
import { Link } from 'react-router-dom';
import '../../static/css/iniciar.css';


export default function Login(){


    return(
        <>
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <h2 className="active"> Sign In </h2>

                <div className="fadeIn first">
                <img src="https://www.pngkey.com/png/full/33-337638_medicine-logo-png-1-medical-logo.png" id="icon" alt="User Icon" />
                </div>

                <form action="/" name="login_form">
                    <input type="text" id="login" className="fadeIn second" name="email" placeholder="Email"/>
                    <input type="password" id="password" className="fadeIn third" name="password" placeholder="Contraseña"/>
                    <input type="submit" className="fadeIn fourth" value="Login" onclick=""/>
                </form>
                
                <div id="formFooter">
                <p>Si no tiene un inicio de sesión, por favor <Link to="/registrarse" >Crear una cuenta</Link></p>
                </div>

            </div>
        </div>
        
        </>
    )
}