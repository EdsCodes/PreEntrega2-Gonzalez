import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (prod, cantidad) => {
        if (isInTheCart(prod.id)) {
            let product = cart.find(prod => prod.id === item.id);
            product.cantidad += cantidad;
            setCart([...cart]);
        } else {
            setCart([...cart, {...prod, cantidad:cantidad}]);
        }
    }

    const quitarItem = (id) => {
        const items = cart.filter(prod => prod.id !== id);
        setCart([...items]);
    }

    const reset = () => {
        setCart([]);
    }

    const isInTheCart = (id) => {
        return cart.some(prod => prod.id === id);
    }

    const getCounterProds = () => {
        return cart.reduce((acum, prod) => acum += prod.cantidad, 0);
    }

    const getAdicProducts = () => {
        return cart.reduce((acum, prod) => acum += prod.cantidad * prod.precio, 0);
    }

    return(
        <CartContext.Provider value={{cart, addItem, quitarItem, reset, isInTheCart, getCounterProds, getAdicProducts }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;