import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
        console.log("Agregaste: " + quantity + " producto(s) al carrito de compras!");
    }

    return (
        <div className="container cardprodDetalle">
            <div className="row">
                <div className="imgCardDetalle">
                    <img src={item.URLImagen} className="img-fluid" alt={item.nombre} />
                </div>
                <div className="col container-fluid seccionTextoDetalle">
                    <h1 className="tituloDetalleProd">{item.nombre}</h1>
                    <p className="precioProducto">${item.precio}</p>
                    <p className="DescripcProducto">{item.descripcion}</p>
                    <ItemCount inventario={item.inventario} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail; 