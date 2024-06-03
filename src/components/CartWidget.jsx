import { Link } from "react-router-dom";
import Cart3 from "../assets/images/cart3.svg";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
    const {getCounterProds} = useContext(CartContext);
    
    if (getCounterProds() > 0) {
        return (
            <button type="button" className="btn btn-light text-dark botonCarrito">
            <Link className="nav-link position-relative" to="/Cart">
                <img src={Cart3} alt="Imagen carrito" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {getCounterProds()}
                </span>
            </Link>
        </button>
        );
    } else 
    return (
        null
    );
};

export default CartWidget;