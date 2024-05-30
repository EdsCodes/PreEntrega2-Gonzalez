import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({inventario, onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [itemInventario, setItemInventario] = useState(inventario);
    const [mostrar, setMostrar] = useState(true);

    const aumentar = () => {
        if (counter < itemInventario) {
            setCounter(counter + 1);
        }
    };

    const disminuir = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    const addToCart = () => {
        if (counter <= itemInventario) {
            setItemInventario(itemInventario - counter);
            onAdd(counter); 
            setCounter(1);
            setMostrar(false);
        }
    };

    useEffect(() => {
        setItemInventario(inventario);
    }, [inventario]);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group BtnsCantidad" role="group">
                        <button type="button" className="btn btnDisminuir" onClick={disminuir}>-</button>
                        <button type="button" className="btn">{counter}</button>
                        <button type="button" className="btn btnAumentar" onClick={aumentar}>+</button>
                    </div>
                </div>
                <div className="col BtnCarrito">
                    {mostrar 
                        ? <button type="button" className="btn" onClick={addToCart}>Agregar al carrito</button>
                        : <Link to="/Checkout" className="btn" 
                            style={{
                                width: '150px',
                                height: 'auto',
                                borderRadius: '55px',
                                backgroundColor: '#001731',
                                color: 'azure',
                            }}>
                            Finalizar Compra
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemCount;
