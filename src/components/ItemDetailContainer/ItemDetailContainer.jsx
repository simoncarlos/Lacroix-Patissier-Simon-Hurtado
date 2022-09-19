
import {useEffect, useState } from "react";
import dataDB from "../../utils/data";
import asyncMock from "../../utils/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { id } = useParams();
    
    useEffect( () => {
        if( id ){
            asyncMock(2000, dataDB.find( product => product.idProduct === parseInt(id) ) ) 
                .then(result => setItem(result))
                .catch(err => console.log(err) )
        }
    }, [id]);
    
    if( Object.keys(item).length !== 0 ){
        return (
            <section className="m-5 p-7 sm:p-15">
                <ItemDetail datos={item} />
            </section>
        )
    }
    else{
        return (
            <section className="h-96 flex items-center justify-center">
                <Loader/>
            </section>
        )
    }
}

export default ItemDetailContainer;