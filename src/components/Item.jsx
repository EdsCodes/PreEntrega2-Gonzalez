import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="col cardProducto">
            <Link to={"/item/" + item.id} className="text-decoration-none">
                <div className="card">
                    <img src={item.URLImagen} className="img-fluid" alt={item.nombre} />
                    <div className="card-body">
                        <p className="textoCard">{item.nombre}<br /><span className="card-text"><b>${item.precio}</b></span></p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item;