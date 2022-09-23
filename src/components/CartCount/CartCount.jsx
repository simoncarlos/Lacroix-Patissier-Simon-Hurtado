import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

const CartCount = ({id, stock}) => {

    const {setQuantity, cartProduct} = useContext(CartContext)
    const count = cartProduct(id);

    const increment = () => { setQuantity(id, count + 1) };
    const decrement = () => { setQuantity(id, count - 1) };

    return (
        <div className="flex items-center">
            <button className="btn btnCount mx-5 btn-circle btn-outline" onClick={ decrement } disabled={ count === 1 } > - </button>
            <p className="mx-3 text-lg font-medium text-primary">{count}</p>
            <button className="btn btnCount mx-5 btn-circle btn-outline" onClick={ increment } disabled={ count === stock } > + </button>                
        </div>
    );
}
export default CartCount;
