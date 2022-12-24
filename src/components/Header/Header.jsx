import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header className="header w-full">
            <article>
                <h1 className="text-primary text-4xl font-bold">Bienvenido a Lacroix Patissier</h1>
                <p>¡Ven a descubrir los sabores y aromas únicos de nuestro café! Nuestra pasión por el café te inspirará para disfrutar cada sorbo. Con nosotros, obtendrás la experiencia única de explorar una nueva dimensión de deliciosas bebidas de café.</p>
                <Link to="/products" className="btn btn-outline">Ver el catalogo</Link>
            </article>
        </header>
    );
};

export default Header;