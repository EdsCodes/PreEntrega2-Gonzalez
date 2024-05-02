import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
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
                    <ItemCount inventario={item.inventario} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;