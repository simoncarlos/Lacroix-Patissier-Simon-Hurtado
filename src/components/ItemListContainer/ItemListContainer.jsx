
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({greeting}) => {

    const onAdd = (count) => { alert("Se han añadido: " + count + " productos al carrito") };

    return (
        <section className="p-5">
            <h1>{greeting}</h1>
            <ItemCount stock={6} initial={1} onAdd={onAdd} />
        </section>
    );
}

export default ItemListContainer;