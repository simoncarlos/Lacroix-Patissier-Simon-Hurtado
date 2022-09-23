import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import CartCount from "../CartCount/CartCount";

const Cart = () => {
    
    const { cartList, clear, removeItem, findIndex, quantityProducts, totalPrice } = useContext(CartContext);
    const MySwal = withReactContent(Swal);
    const price = totalPrice(); 
    const quantity = quantityProducts();
    return(
        <section className="mt-10 px-6 flex flex-col align-middle">
            <h1 className="text-center text-4xl font-medium">Tu carrito</h1>
            {
                cartList.length !== 0
                ? <button className="btn my-14 mx-auto" onClick={clear}>Eliminar todos los item</button>
                : <div>
                    <Link to="/"><button> Volver al inicio </button></Link>
                    <h2 className="text-xl text-center my-14 mx-auto">Tu carrito está vacio</h2>
                </div>
            }
            <ul className="my-5 flex flex-wrap justify-center">
                {
                    cartList.map( product => 
                        <li key={product.idProduct} className="m-5">
                            <div className="relative mx-auto flex justify-start w-96 p-4 rounded-2xl bg-neutral-focus">
                                <div className="w-24 h-32 rounded-2xl overflow-hidden">
                                    <img src={product.pictureUrl} className="w-24" alt="" />
                                </div>
                                <div className="ml-4 flex flex-col justify-around w-4/6">
                                    <article>
                                        <h2 className="text-base font-medium text-primary">{product.title}</h2>
                                        <h6 className="text-sm font-light text-primary-focus">{product.subtitle}</h6>
                                    </article>
                                    <div className="flex justify-between">
                                        <p className="text-base-content font-medium">$ {product.price  * cartList[ findIndex(product.idProduct) ].cart}</p>
                                        <p className="text-base-content font-medium">Cantidad: { cartList[ findIndex(product.idProduct) ].cart }</p>
                                    </div>
                                    <div className="w-full">
                                        <CartCount id={product.idProduct} stock={product.stock}></CartCount>
                                    </div>
                                </div>
                                <button className="btn btn-circle absolute top-1 right-1 bg-neutral-focus border-none" onClick = { () => { 
                                    MySwal.fire({
                                        title: 'Esta seguro que desea eliminar?',
                                        text: "Si lo elimina debera volver a agregar al carrito",
                                        icon: 'warning',
                                        showCancelButton: true,
                                        confirmButtonColor: '#3085d6',
                                        cancelButtonColor: '#d33',
                                        confirmButtonText: 'Si, eliminar'
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            MySwal.fire(
                                                'Eliminado',
                                                'Su producto ha sido eliminado del carrito con exito.',
                                                'success'
                                            )
                                            removeItem(product.idProduct) 
                                        }
                                    })
                                    } } >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                        </li> 
                    )
                }
            </ul>
            {
                cartList.length !== 0 
                && <article className="w-96 p-4 mx-auto mb-20">
                    <h2 className="text-xl text-center my-14 mx-auto">Resumen de compra:</h2>
                    <div className="my-6 flex justify-between align-middle">
                        <p>Cantidad productos:</p>
                        <p> { quantity }</p>
                    </div>
                    <div className="my-6 flex justify-between align-middle">
                        <p>Precio: </p>
                        <p>$ { price }</p>
                    </div>
                    <div className="my-6 flex justify-between align-middle">
                        <p>IVA: </p>
                        <p>$ { (price * 0.21).toFixed(2) }</p>
                    </div>
                    <div className="my-6 flex justify-between align-middle">
                        <p>Precio final: </p>
                        <p>$ { price * 1.21 }</p>
                    </div>
                    <button className="btn btn-active w-full">Finalizar Compra</button>
                </article>
            }
        </section>
    );
}

export default Cart;