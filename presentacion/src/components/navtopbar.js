import { Link } from "react-router-dom";

export default function NavBarTop(){
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
                        <a className="navbar-brand" href="#">Bienvenido Admin</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="ti-panel"></i>
                                    <p>&nbsp;Estadísticas</p>
                                </a>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="ti-bell"></i>
                                        <p className="notification">5&nbsp;</p>
                                        <p>Notificaciones</p>
                                        <b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Notification 1</a></li>
                                    <li><a href="#">Notification 2</a></li>
                                    <li><a href="#">Notification 3</a></li>
                                    <li><a href="#">Notification 4</a></li>
                                    <li><a href="#">Another notification</a></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/iniciar">
                                    <p>Cerrar Sesión</p>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}