
import {useEffect, useState } from "react";
import dataDB from "../../utils/data";
import fetchAsyncMock from "../../utils/fetchAsyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {

    const onAdd = (count) => { alert("Se han añadido: " + count + " productos al carrito") };
    const [item, setItem] = useState({});

    useEffect( () => {
        fetchAsyncMock(2000, dataDB[1]) // datafromDB = async mock
            .then(result => setItem(result))
            .catch(err => console.log(err) )
    }, [] );

    return (
        <section className="p-5">
            <ItemDetail datos={item} />
            <ItemCount stock={0} initial={1} onAdd={onAdd} />
        </section>
    );
}

export default ItemDetailContainer;