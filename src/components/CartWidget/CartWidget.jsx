import Carrito from "../../assets/iconos/cart.svg";
import "./CartWidget.css";

const CartWidget = () => {
    return (
        <> 
            <div className="indicator w-12 mr-6">
                <span className="indicator-item badge badge-secondary">1</span> 
                <button className="">
                    <img src={Carrito} className="iconCart w-12" alt="Icono de carrito de compras" />
                </button>
            </div>
        </>
    )
}
export default CartWidget;