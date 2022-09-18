import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({id, title, subtitle, price, image, rating}) => {
    return(
        <div className="h-72 relative rounded-3xl bg-neutral-focus flex flex-col justify-between p-5 m-4 ">
            <div className="mx-auto w-36 h-36 rounded-3xl overflow-hidden">
                <img src={image} className="w-auto h-auto mx-auto" alt={`Foto de ${title}`} />
                <span className="itemRate absolute top-5 right-5 px-2 py-1 rating rating-xs flex items-center">
                    <input type="radio" name="rating-5" className="mask mask-star-2 mr-2 bg-orange-400"/>
                    <span className="font-medium text-sm">{rating}</span>
                </span>
            </div>
            <article className="">
                <h3 className="text-sm md:text-base font-medium text-primary">{title}</h3>
                <h6 className="text-xs md:text-sm font-light text-primary-focus">{subtitle}</h6>
            </article>
            <p className="text-base-content font-medium">$ <span className="text-primary">{price}</span></p>
            <button className="rounded-xl w-8 h-8 absolute bg-base-content border-primary right-5 bottom-5">
                <Link to= {`/item/${id}`} >
                    <p className="text text-accent">+</p>
                </Link>
            </button>
        </div>
    );
};
export default Item;