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
    
    const { addItem, isInCart, cartProduct } = useContext(CartContext);

    const { idProduct, title, subtitle, description, ingredients, price, pictureUrl, roasted,  raiting, stock, percentageCoffe, percentageMilk} = datos;

    const [itemCount, setItemCount] = useState(0);

    const newStock = isInCart(idProduct) ? (stock - cartProduct(idProduct)) : stock
    
    const onAdd = (count) => { 
        setItemCount(count);
        addItem(datos, count, idProduct);
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
                                        <img src={icon} className="w-full" alt="Icono de café" />
                                    </div>
                                    <div className="w-5/12 p-3 bg-base-100 text-sm rounded-xl">
                                        <img src={ percentageMilk > 0 ? milkY : milkN } className="w-full" alt="" />
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
                    <article className="mb-14 md:mb-6">
                        <p className="text-primary-focus font-normal mb-3">Caracteristicas</p>
                        <div className="flex items-center md:justify-start justify-around">
                            <div className="w-24 bg-neutral-focus text-sm rounded-xl p-4 flex items-center justify-around mr-6">
                                <p className="roasted bg-neutral-focus text-sm rounded-lg">{percentageCoffe}%</p>
                                <img src={ icon } className="w-5" alt="Logo de café" />
                            </div>
                            <div className="w-24 bg-neutral-focus text-sm rounded-xl p-4 flex items-center justify-around">
                                <p className="roasted bg-neutral-focus text-sm rounded-lg">{percentageMilk}%</p>
                                <img src={ percentageMilk > 0 ? milkY : milkN } className="w-5" alt="Logo de milk" />
                            </div>
                        </div>
                    </article>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center">
                        {
                            itemCount === 0 
                            ? <ItemCount className="block" stock={newStock} initial={1} onAdd={onAdd} />
                            : <Link to="/cart"> <button className="btn glass"> Checkout </button> </Link>
                        }
                        <div className="stat px-10">
                            <div className="stat-title text-center md:text-left">Precio:</div>
                            <div className="stat-value">
                                <p className="text-base-content text-center md:text-left">$ <span className="text-primary">{price}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;