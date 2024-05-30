import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import trashImg from "../assets/images/trash3-fill.svg";

const Cart = () => {
    const {cart, quitarItem, reset, getCounterProds, getAdicProducts} = useContext(CartContext);

    if (getCounterProds() == 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center TextoCart">
                        <h3>No se encontraron Productos en el Carrito!</h3>
                        <Link to={"/"} className="btn btnPagPpalCart">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={6} className="text-end"><button className="btn btn-dark" onClick={reset}>Vaciar Carrito</button></td>
                            </tr>
                            {cart.map(prod => (
                                <tr key={prod.id}>
                                    <td><img src={prod.URLImagen} alt={prod.nombre} width={120} /></td>
                                    <td className="align-middle text-start">{prod.nombre}</td>
                                    <td className="align-middle text-center">${prod.precio}</td>
                                    <td className="align-middle text-center">x{prod.cantidad}</td>
                                    <td className="align-middle text-center">${prod.cantidad * prod.precio}</td>
                                    <td className="align-middle text-end"><img src={trashImg} width={24} alt="Eliminar Producto" title="Eliminar Producto" onClick={() => {quitarItem(prod.id)}} /></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={4} className="text-center"><b>Total de tu carrito</b></td>
                                <td className="text-center"><b>${getAdicProducts()}</b></td>
                                <td className="text-end"><Link to={"/checkout"} className="btn btn-dark">Checkout</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;