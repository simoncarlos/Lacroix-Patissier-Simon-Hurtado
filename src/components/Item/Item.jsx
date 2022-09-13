import img from "../../assets/products/machiato.png"
import latte from "../../assets/products/latte.png"

const Item = ({ title, description, price, pictureUrl}) => {
    return(
        <div className="h-72 relative rounded-3xl bg-neutral-focus flex flex-col justify-between p-5 mx-4 ">
            <div className="mx-auto w-36 h-36 rounded-3xl overflow-hidden">
                <img src={latte} className="w-auto h-auto mx-auto" alt={`Foto de ${title}`} />
            </div>
            <article className="">
                <h3 className="text-sm md:text-base font-small text-primary">{title}</h3>
            </article>
            <p className="text-base-content font-medium">$ <span className="text-primary">{price}</span></p>
            <button className="rounded-xl w-8 h-8 absolute bg-base-content border-primary right-5 bottom-5">
                <p className="text text-accent">+</p>
            </button>
        </div>
    );
};
export default Item;
//`../../assets/products/${img}`