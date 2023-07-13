import { NavLink } from "react-router-dom";

let activeStyle = {
    textDecoration: "underline",
    color: "#37C2EC"
};

let activeClassName = "underline";


export default function NavbarLeft(){

    return(
        <>
         <div className="sidebar" data-background-color="white" data-active-color="danger">

            <div className="sidebar-wrapper">
                    <div className="logo">
                        <NavLink to="/" className="simple-text" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }>
                            <br/> CMED SYSTEM
                        </NavLink>
                    </div>
                <ul className="nav">
                    <li>
                        <NavLink to="/" style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                                }>
                            <i className="ti-panel"></i>
                            <p>Inicio</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/pacientes" style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                                }>
                            <i className="ti-user"></i>
                            <p>Pacientes</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/historias_clinicas" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }>
                            <i className="ti-view-list-alt"></i>
                            <p>Historias Clínicas</p> 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/medicos" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }>
                            <i className="fas fa-user-md"></i>
                            <p>Médicos</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/medicamentos" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }>
                            <i className="fas fa-pills"></i>
                            <p>Medicamentos</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/certificados" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }>
                            <i className="fas fa-allergies"></i>
                            <p>Certificados</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cie10" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }>
                            <i className="fa fa-disease"></i>
                            <p>Estandar CIE10</p>
                        </NavLink>
                    </li>				
                    <li>
                        <NavLink to="/opciones" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }>
                            <i className="ti-more-alt"></i>
                            <p>Mas opciones</p>
                        </NavLink>
                    </li>		
                </ul>
            </div>
            </div>
        </>
    )

}