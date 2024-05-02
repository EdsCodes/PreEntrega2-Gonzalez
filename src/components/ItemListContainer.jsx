import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "./json/productos.json";
import ItemList from "./ItemList";
import Carousel from "./Carousel";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? productos.filter(item => item.categoria === id) : productos);
            }, 2000)
        });

        promesa.then(respuesta => {
            setItems(respuesta);
        });
    }, [id]);

    return (
        <>
            {id ? "" : <Carousel />}
            <div className="container">
                <div className="row" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                    <ItemList items={items} />
                </div>
            </div>
        </>
    );
}

export default ItemListContainer;