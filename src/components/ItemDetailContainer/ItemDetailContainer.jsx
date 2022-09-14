
import {useEffect, useState } from "react";
import dataDB from "../../utils/data";
import asyncMock from "../../utils/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    useEffect( () => {
        asyncMock(2000, dataDB[3]) 
            .then(result => setItem(result))
            .catch(err => console.log(err) )
    }, [] );

    return (
        <section className="m-5 p-7 sm:p-15">
            <ItemDetail datos={item} />
        </section>
    );
}

export default ItemDetailContainer;