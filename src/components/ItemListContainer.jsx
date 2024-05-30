import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import ItemList from "./ItemList";
import Carousel from "./Carousel";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"; 

const ItemListContainer = () => {
    const [items, setItems] = useState(null); 
    const { id } = useParams();

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const db = getFirestore();
                const itemsCollection = collection(db, "prods");
                const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
                const snapShot = await getDocs(q);

                snapShot.empty 
                    ? (console.log("No se encontraron los productos del firestore"), setProductos([]))
                    : setItems(snapShot.docs.map(item => ({ id: item.id, ...item.data() })));

            } catch (error) {
                console.error("Error: ", error);
                setItems([]); 
            }
        };

        fetchItems();
    }, [id]);

    return (
        <>
            {!id && <Carousel />}
            <div className="container">
                <div className="row" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                    {items ? <ItemList items={items} /> : <p>Cargando...</p>}
                </div>
            </div>
        </>
    );
};

export default ItemListContainer;