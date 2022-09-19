import {createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState( [] );
    
    const isInCart = ( id ) => {
        let isIn = false
        cartList.forEach( cartItem => (cartItem.idProduct === id) && (isIn = true) );
        return isIn
    }

    const updateItem = ( id, quantity ) => {
        const position = cartList.findIndex( itemCart => itemCart.idProduct === id); 
        cartList[position].cart += quantity;
    }

    const addItem = (item, quantity) => {
        item.cart = quantity;
        setCartList( [...cartList, item] );
    }

    const clear = () =>{
        setCartList([]);
    }

    const removeItem = ( idItem ) => {
        const newCartList = cartList.filter( cartElement => cartElement.idProduct !== idItem );
        setCartList( newCartList );
    }

    return(
        <CartContext.Provider value = { {cartList, isInCart, updateItem, addItem, clear, removeItem} } >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;