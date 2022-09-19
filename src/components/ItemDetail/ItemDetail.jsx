import ItemCount from "../ItemCount/ItemCount";
import icon from "../../assets/iconos/coffe.png"
import milkY from "../../assets/iconos/milk.png"
import milkN from "../../assets/iconos/no-milk.png"
import "./ItemDetail.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

const ItemDetail = ({datos})=>{
    
    const { cartList, addItem, isInCart, updateItem } = useContext(CartContext);

    let { idProduct, title, subtitle, description, ingredients, price, pictureUrl, roasted, milk, raiting, stock} = datos;

    const [itemCount, setItemCount] = useState(0);

    isInCart(idProduct) && (stock = stock - cartList.find( itemCart => itemCart.idProduct === idProduct ).cart  )
    
    const onAdd = (count) => { 
        setItemCount(count);
        isInCart(idProduct) ? updateItem(idProduct, count) : addItem(datos, count);
    };

    return (
        <>
            <div className="sm:flex w-11/12 mx-auto md:mx-0 flex flex-col md:flex-row justify-center">
                <div className=" w-12/12 md:w-6/12 flex md:justify-center mx-auto md:mr-0">
                    <div className="rounded-3xl relative z-0 flex flex-col mx-auto">
                        <img src={pictureUrl} className="itemDetail relative rounded-3xl  w-full sm:w-72 h-5/12 z-10" alt="" />
                        <article className="glasss absolute bottom-0 rounded-3xl w-full sm:w-72 h-32 z-20 p-5 flex justify-between">
                            <div className="h-100 flex flex-col justify-between items-start">
                                <article>
                                    <h1 className="text-primary text-lg font-medium">{title}</h1>
                                    <h3 className="text-xs md:text-sm font-light text-primary-focus">{subtitle}</h3>
                                </article>
                                <p className="rating rating-xs flex items-center">
                                    <input type="radio" name="rating-5" className="mask mask-star-2 mr-2 bg-orange-400"/>
                                    <span className="font-medium text-sm">{raiting}</span>
                                </p>
                            </div>
                            <div className=" flex flex-col justify-between w-24 h-full">
                                <div className="flex justify-between h-6/12">
                                    <div className="w-5/12 p-3 bg-base-100 text-sm rounded-xl">
                                        <img src={icon} className="w-full" alt="" />
                                    </div>
                                    <div className="w-5/12 p-3 bg-base-100 text-sm rounded-xl">
                                        <img src={ milk ? milkY : milkN } className="w-full" alt="" />
                                    </div>
                                </div>
                                <div className="h-6/12 roasted">
                                    <p className="roasted w-full h-full py-2 bg-base-100 text-sm rounded-lg">{roasted} Roasted</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="py-3 px-0 w-full md:w-6/12 mt-10 md:mt-0 ">
                    <article className="mb-6">
                        <p className="text-primary-focus font-normal">Descripcion</p>
                        <p className="text-primary font-normal">{description}</p>
                    </article>
                    <article className="mb-6">
                        <p className="text-primary-focus font-normal">Ingredientes</p>
                        <p className="text-primary font-normal">{ingredients}</p>
                    </article>
                    <div className="mb-6">
                        <p className="text-primary-focus font-normal">Tamaño</p>
                        <div className="flex justify-between mt-4">
                            <button className="btn btn-outline w-3/12 h-5 md:h-7 btn-active">S</button>
                            <button className="btn btn-outline w-3/12 h-5 md:h-7">M</button>
                            <button className="btn btn-outline w-3/12 h-5 md:h-7">L</button>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center">
                        {
                            itemCount === 0 
                            ? <ItemCount className="block" stock={stock} initial={1} onAdd={onAdd} />
                            : <Link to="/cart"> <button className="btn glass"> Checkout </button> </Link>
                        }
                        <div className="stat w-auto px-10">
                            <div className="stat-title">Precio:</div>
                            <div className="stat-value">
                                <p className="text-base-content w-20 text-center">$ <span className="text-primary">{price}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;