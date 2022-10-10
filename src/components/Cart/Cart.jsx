import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import CartCount from "../CartCount/CartCount";
import { increment, serverTimestamp, doc, setDoc, collection, updateDoc } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";
import Loader from "../Loader/Loader";

const Cart = () => {
    
    const [cartOrder, setCartOrder] = useState(false);
    const [idOrder, setIdOrder] = useState({});

    const { cartList, clear, removeItem, findIndex, quantityProducts, totalPrice } = useContext(CartContext);
    const MySwal = withReactContent(Swal);
    const price = totalPrice(); 
    const quantity = quantityProducts();

    const createOrder = async () => {
        const itemsForDB = cartList.map( item => ({
            id: item.idProduct,
            title: item.title,
            price: item.price,
            quantity: item.cart
        }) )
        let order = {
            buyer:{
                name: "Diego Simon",
                email: "diegoestushoi@gmail.com",
                phone: "1173688676"
            },
            items: itemsForDB,
            date: serverTimestamp(),
            total: (price * 1.21)
        }
        const newOrderRef = doc( collection(db, "orders") )
        await setDoc( newOrderRef, order)

        cartList.forEach( async(product) => {

            const itemRef = doc(db, "products", product.idProduct);
            await updateDoc( itemRef , {
                stock: increment( -parseInt(product.cart) )
            });

        });
        setIdOrder({...order, id: newOrderRef.id });
        setCartOrder(true);
    }

    return(
        <section className="mt-10 px-6 flex flex-col align-middle">
            <h1 className="text-center text-4xl font-medium">Tu carrito</h1>
            {
                cartList.length !== 0
                ? <button className="btn my-14 mx-auto" onClick={clear}>Eliminar todos los item</button>
                : <div className="flex flex-col align-middle">
                    <h2 className="text-xl text-center my-14 mx-auto">Tu carrito está vacio..</h2>
                    <Link to="/" className="mx-auto"><button className="btn"> Volver al inicio </button></Link>
                </div>
            }
            <ul className="my-5 flex flex-wrap justify-center">
                {
                    cartList.map( product => 
                        <li key={product.idProduct} className="m-5">
                            <div className="relative mx-auto flex justify-start w-80 p-4 rounded-2xl bg-neutral-focus">
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
                && <article className="w-80 mx-auto mb-20">
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
                    

                    <label htmlFor="my-modal-6" className="btn modal-button w-full" onClick={createOrder}>Finalizar Compra</label>
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />

                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box ">
                            {
                                cartOrder
                                ? <>
                                    <h3 className="font-bold text-lg">¡Muchas gracias por su compra {idOrder.buyer.name}!</h3>
                                    <p className="py-4">Su monto total de la compra es: ${idOrder.total}</p>
                                    <p>Su id de compra es: {idOrder.id}</p>
                                </>
                                : <div className="h-40 w-full flex items-center justify-center">
                                    <Loader />
                                </div>
                            }
                            <div className="modal-action">
                                <label htmlFor="my-modal-6" className="btn" onClick={clear}>Close</label>
                            </div>
                        </div>
                    </div>

                </article>
            }
        </section>
    );
}

export default Cart;