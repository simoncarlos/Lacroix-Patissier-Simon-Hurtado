import {createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState( [] );
    
    const existsCart = () => {
        return ( cartList.length > 0 )
    }

    const totalPrice = () => {
        return cartList.reduce( (acc, numero) => { return acc + (numero.cart * numero.price) }, 0)
    }

    const quantityProducts = () => {
        return cartList.reduce( (acc, numero) => { return acc + numero.cart }, 0)
    }

    const cartProduct = (id) => {
        return cartList.find( itemCart => itemCart.idProduct === id ).cart
    }

    const setQuantity = ( id, quantity ) => {
        cartList[ findIndex(id) ].cart = quantity;
        setCartList([...cartList]);
    }

    const isInCart = ( id ) => {
        let isIn = false
        cartList.forEach( cartItem => (cartItem.idProduct === id) && (isIn = true) );
        return isIn
    }

    const findIndex = (id) =>{
        return cartList.findIndex( itemCart => itemCart.idProduct === id);
    }

    const updateItem = ( id, quantity ) => {
        cartList[ findIndex(id) ].cart += quantity;
        setCartList([...cartList]);
    }

    const addItem = (item, quantity, idProduct) => {
        if( isInCart(idProduct) ){
            updateItem(idProduct, quantity)
        }
        else{
            item.cart = quantity;
            setCartList( [...cartList, item] );
        }
    }

    const clear = () =>{
        setCartList([]);
    }

    const removeItem = ( idItem ) => {
        const newCartList = cartList.filter( cartElement => cartElement.idProduct !== idItem );
        setCartList( newCartList );
    }

    return(
        <CartContext.Provider value = { {cartList, existsCart, totalPrice, quantityProducts, isInCart, updateItem, addItem, clear, removeItem, findIndex, cartProduct, setQuantity} } >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;