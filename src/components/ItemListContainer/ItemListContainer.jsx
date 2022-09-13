import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import dataDB from "../../utils/data";
import fetchAsyncMock from "../../utils/fetchAsyncMock";

const ItemListContainer = ({greeting}) => {

    const [data, setData] = useState([]);

    useEffect( () => {
        fetchAsyncMock(2000, dataDB) // datafromDB = async mock
            .then(result => setData(result))
            .catch(err => console.log(err) )
    }, [] );

    return (
        <section className="p-5">
            <h1>{greeting}</h1>
            <ItemList datos={data} />

        </section>
    );
}

export default ItemListContainer;