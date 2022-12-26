import Header from "../Header/Header";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import cafe from "../../assets/iconos/cafe-icon.svg";
import granos from "../../assets/iconos/grano-icon.svg";
import capsulas from "../../assets/iconos/capsulas-icon.svg";
import SomeProducts from "../SomeProducts/SomeProducts";
const Body = () => {
    return(
        <section>
            <Header/>
            <article className="h-screen md:h-96 flex flex-col md:flex-row items-center justify-evenly">
                <div className="h-32 flex flex-col items-center justify-between">
                    <img src={ cafe } className="h-20 opacity-60" alt="Icono de café" />
                    <h3 className="text-primary opacity-80">Cafe de alta calidad</h3>
                </div>
                <div className="h-32 flex flex-col items-center justify-between">
                    <img src={ granos } className="h-20 opacity-60" alt="Icono de granos" />
                    <h3 className="text-primary opacity-80">Granos seleccionados</h3>
                </div>
                <div className="h-32 flex flex-col items-center justify-between">
                    <img src={ capsulas } className="h-20 opacity-60" alt="Icono de capsulas" />
                    <h3 className="text-primary opacity-80">Capsulas personalizables</h3>
                </div>
            </article>
            <SomeProducts/>
        </section>
    );
};

export default Body;