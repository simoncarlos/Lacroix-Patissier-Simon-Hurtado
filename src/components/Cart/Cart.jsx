import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

const Cart = () => {
    
    const { cartList, clear, removeItem } = useContext(CartContext);
    
    return(
        <section className="mt-10 px-6">
            <h1 className="text-center text-4xl font-medium">Tu carrito</h1>
            <button className="btn" onClick={clear}>Eliminar todos los item</button>
            <ul className="my-10">
                {
                    cartList.map( product => 
                        <li key={product.idProduct} className="flex" >
                            <div className="relative flex justify-start w-72 p-4 rounded-2xl bg-neutral-focus">
                                <div className="w-24 h-32 rounded-2xl overflow-hidden">
                                    <img src={product.pictureUrl} className="w-24" alt="" />
                                </div>
                                <div className="ml-4 flex flex-col justify-around">
                                    <article>
                                        <h2 className="text-base font-medium text-primary">{product.title}</h2>
                                        <h6 className="text-sm font-light text-primary-focus">{product.subtitle}</h6>
                                    </article>
                                    <div className="flex justify-between">
                                        <p className="text-base-content font-medium">$ {product.price}</p>
                                        <p>{product.cart}</p>
                                    </div>
                                </div>
                                <button className="btn btn-circle absolute top-1 right-1 bg-neutral-focus border-none" onClick = { () => { removeItem(product.idProduct) } } >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                        </li> 
                        
                    )
                }
            </ul>
        </section>
    );
}

export default Cart;