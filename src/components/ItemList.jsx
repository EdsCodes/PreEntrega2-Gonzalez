import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <>
            {items.map(productos => (
                <Item key={productos.id} item={productos} />
            ))}
        </>
    )
}

export default ItemList;