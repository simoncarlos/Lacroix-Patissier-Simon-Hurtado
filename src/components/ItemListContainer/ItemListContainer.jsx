import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import dataDB from "../../utils/data";
import asyncMock from "../../utils/asyncMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect( () => {
        if( id ){
            asyncMock(2000, dataDB.filter( product => product.category === id  )) 
            .then(result => setData(result))
            .catch(err => console.log(err) )
        } 
        else{
            asyncMock(2000, dataDB) 
                .then(result => setData(result))
                .catch(err => console.log(err) ) 
        }
    }, [id] );

    return (
        <section className="py-5 px-5 lg:px-40">
            <ItemList datos={data} />
        </section>
    );
}

export default ItemListContainer;