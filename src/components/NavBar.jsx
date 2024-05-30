import { NavLink } from "react-router-dom";
import logo from "../assets/images/Electro_Store_logo.jpg";
import CartWidget from "../components/CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid BarraNav">
            <nav className="row navbar navbar-expand-lg bg-body-light">
                <div className="container d-flex justify-content-between align-items-center BarraNavegacion">
                    <NavLink className="navbar-brand nav-link textoNavbar" to={"/"}>
                        <img src={logo} alt="Logo Electro Store" />
                    </NavLink>
                    <button className="navbar-toggler ml-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <ul className="navbar-nav itemsBarraNav">
                            <li className="nav-item">
                                <NavLink className="nav-link textoNavbar" to={"/"}>Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link textoNavbar" to={"/categoria/celulares"}>Celulares</NavLink>                            
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link textoNavbar" to={"/categoria/tablets & Pcs"}>Tablets & Pcs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link textoNavbar" to={"/categoria/audifonos"}>Audifonos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link textoNavbar" to={"/categoria/smartwatches"}>Smartwatches</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link textoNavbar" to={"/categoria/otros gadgets y accesorios"}>Otros</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center">
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;

