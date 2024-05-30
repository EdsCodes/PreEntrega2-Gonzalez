import { useState, useContext } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => { 
    const {cart, reset, getCounterProds, getAdicProducts} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [compraId, setCompraId] = useState("");
    const [errors, setErrors] = useState({});

    const comprar = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!nombre) newErrors.nombre = "Campo requerido";
        if (!email) newErrors.email = "Campo requerido";
        if (!telefono) newErrors.telefono = "Campo requerido";
        if (!direccion) newErrors.direccion = "Campo requerido";
        if (!ciudad) newErrors.ciudad = "Campo requerido";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const buyer = { nombre: nombre, email: email, telefono: telefono, direccion: direccion, ciudad: ciudad };
            const productos = cart.map(producto => ({ id: producto.id, title: producto.nombre, quantity: producto.cantidad, price: producto.precio }));
            const order = { buyer: buyer, productos: productos, total: getAdicProducts() };

            const db = getFirestore();
            const ordersCollection = collection(db, "ordenes_compra");
            addDoc(ordersCollection, order).then(data => {
                setCompraId(data.id);
                setNombre("");
                setEmail("");
                setTelefono("");
                setDireccion("");
                setCiudad("");
                reset();
            });
        }
    }
    
    if (getCounterProds() === 0 && !compraId) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <h3 className="TextoCheckOut">No se encontraron Productos en tu Carrito de compras!</h3>
                        <Link to={"/"} className="btnPagPpal btn btn-dark">
                            Volver a la Página Principal
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div className="container formCheckOut">
            {!compraId ?
            <div className="row">
                <div className="col">
                    <form onSubmit={comprar}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" value={nombre} onInput={(e) => setNombre(e.target.value)} />
                            {errors.nombre && <div className="text-danger">{errors.nombre}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" value={email} onInput={(e) => setEmail(e.target.value)} />
                            {errors.email && <div className="text-danger">{errors.email}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input type="number" className="form-control" id="telefono" value={telefono} onInput={(e) => setTelefono(e.target.value)} />
                            {errors.telefono && <div className="text-danger">{errors.telefono}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Dirección</label>
                            <input type="text" className="form-control" id="direccion" value={direccion} onInput={(e) => setDireccion(e.target.value)} />
                            {errors.direccion && <div className="text-danger">{errors.direccion}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ciudad" className="form-label">Ciudad</label>
                            <input type="text" className="form-control" id="ciudad" value={ciudad} onInput={(e) => setCiudad(e.target.value)} />
                            {errors.ciudad && <div className="text-danger">{errors.ciudad}</div>}
                        </div>
                        <button type="submit" className="btn BtnCompra">Comprar</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(producto => (
                                <tr key={producto.id}>
                                    <td><img src={producto.URLImagen} alt={producto.nombre} width={80} /></td>
                                    <td>{producto.nombre}</td>
                                    <td>x{producto.cantidad}</td>
                                    <td className="text-end">${producto.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3}><b>Total de tus productos</b></td>
                                <td className="text-end"><b>${getAdicProducts()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> : "" }
            <div className="row my-5">
                <div className="col text-center">
                    {compraId ? (
                        <div className="alert alert-light" role="alert">
                            Genial! Tu ID de Compra es: <b>{compraId}</b>
                            <br />
                            Te invitamos a seguir navegando en nuestra web, tenemos más para ti.
                        </div>
                    ) : ""}
                    <Link to={"/"} className="btnPagPpal btn btn-dark">
                        Volver a la Página Principal
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Checkout;