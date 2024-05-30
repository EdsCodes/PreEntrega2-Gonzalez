import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [cargando, setCargando] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchItem = async () => {
            const db = getFirestore();
            const docRef = doc(db, "prods", id);
            try {
                const prod = await getDoc(docRef);
                if (prod.exists()) {
                    setItem({ id: prod.id, ...prod.data() });
                } else {
                    setItem(null);
                }
            } catch (error) {
                console.error("Error fetching document:", error);
                setItem(null);
            } finally {
                setCargando(false);
            }
        };

        fetchItem();
    }, [id]);

    return (
        <div className="container">
            <div className="row" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                {cargando 
                    ? <div className="cargando">Cargando...</div> 
                    : item 
                        ? <ItemDetail item={item} />
                        : <div>Item not found</div>
                }
            </div>
        </div>
    );
}

export default ItemDetailContainer;