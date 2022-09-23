import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import dataDB from "../../utils/data";
import asyncMock from "../../utils/asyncMock";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {

    const [data, setData] = useState([]);
    const { id } = useParams();
    const [loader, setLoader] = useState(true);


    useEffect( () => {
        setLoader(true);
        if( id ){
            asyncMock(2000, dataDB.filter( product => product.category === id  )) 
            .then(result => {
                setData(result);
                setLoader(false)
            })
            .catch(err => console.log(err) )
        } 
        else{
            asyncMock(2000, dataDB) 
                .then(result => {
                    setData(result)
                    setLoader(false)
                })
                .catch(err => console.log(err) ) 
        }
    }, [id] );

    if(loader){
        return (
            <section className="h-96 flex items-center justify-center">
                <Loader/>
            </section>
        );
    }
    else{
        return (
            <section className="py-5 px-5 lg:px-40">
                <ItemList datos={data} />
            </section>
        );
    }
}

export default ItemListContainer;