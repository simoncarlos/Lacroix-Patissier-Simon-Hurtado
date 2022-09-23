import Carrito from "../../assets/iconos/cart.svg";
import "./CartWidget.css";

const CartWidget = ( {quantity, exists} ) => {
    return (
        <> 
            <div className="indicator w-12 mr-6">
                {
                    ( exists ) && <span className="indicator-item badge badge-secondary">{ quantity }</span> 
                }
                <button className="">
                    <img src={Carrito} className="iconCart w-12" alt="Icono de carrito de compras" />
                </button>
            </div>
        </>
    )
}
export default CartWidget;