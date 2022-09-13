
import { useEffect, useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {

    stock === 0 && (initial = 0);

    const [count, setcount] = useState(initial);

    useEffect(() => {
        if( stock === 0 ){        
            document.querySelectorAll(".btnCount").forEach( boton => {
                boton.className += " btn-disabled ";
            });
        }
    });

    const incrementCount = () => { setcount(count+1) };
    const decrementCount = () => { setcount(count-1) };

    return (
        <div className="m-8 flex flex-col items-center">
            <div className="flex items-center">
                <button className="btn btnCount mx-5" onClick={ () => { count > initial && decrementCount() } } disabled={stock===0} > - </button>
                <p className="mx-5">{count}</p>
                <button className="btn btnCount mx-5" onClick={ () => { count < stock && incrementCount() } } disabled={stock===0} > + </button>                
            </div>
            <button className="btn btnCount mt-3" onClick={ () => { stock > 0 && onAdd(count) } } disabled={stock===0} > 
                Agregar al carrito 
            </button>
        </div>
    )
}
export default ItemCount;