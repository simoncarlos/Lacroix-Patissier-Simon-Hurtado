
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {

    stock === 0 && (initial = 0);

    const [count, setcount] = useState(initial); // stock 5 initial 1

    const incrementCount = () => { setcount(count+1) };
    const decrementCount = () => { setcount(count-1) };
    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center">
                <button className="btn btnCount mx-5 btn-circle btn-outline" onClick={ () => { decrementCount() } } disabled={ count === initial } > - </button>
                <p className="mx-3 text-lg font-medium text-primary">{count}</p>
                <button className="btn btnCount mx-5 btn-circle btn-outline" onClick={ () => { incrementCount() } } disabled={ count === stock } > + </button>                
            </div>
            <button className="btn btnCount mt-3" onClick={ () => { stock > 0 && onAdd(count) } } disabled={ stock===0 } > 
                Agregar al carrito 
            </button>
        </div>
    )
}
export default ItemCount;