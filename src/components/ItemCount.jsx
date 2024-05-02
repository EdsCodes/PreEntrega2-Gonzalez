import { useEffect, useState } from "react";

const ItemCount = ({ inventario }) => {
    const [counter, setCounter] = useState(1);
    const [itemInventario, setItemInventario] = useState(inventario);

    const aumentar = () => {
        if (counter < itemInventario) {
            setCounter(counter + 1);
        }
    }
    
    const disminuir = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const onAdd = () => {
        if (counter <= itemInventario) {
            setItemInventario(itemInventario - counter);
            setCounter(1);
            console.log("Agregaste " + counter + " a tu carrito de compras!")
        }
    }

    const agregarCarrito = () => {
        onAdd();
        //Espacio para function de notificacion de producto añadido (despues...) 
    }

    useEffect(() => {
        setItemInventario(inventario);
    }, [inventario])

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
                    <button type="button" className="btn" onClick={agregarCarrito}>Agrega al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;
