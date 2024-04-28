import logo from "../images/Electro_Store_logo.jpg";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid BarraNav">
            <nav className="row navbar navbar-expand-lg bg-body-light">
                <div className="container d-flex justify-content-between align-items-center BarraNavegacion">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo Electro Store" />
                    </a>
                    <button className="navbar-toggler ml-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <ul className="navbar-nav itemsBarraNav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Categorías</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Iniciar Sesión</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Nosotros</a>
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

