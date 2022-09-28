
import {useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebaseConfig"
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { id } = useParams();
    
    async function fetchData(id){

        const docRef = doc(db, "products", id );
        const docSnap = await getDoc(docRef);
        
        if( docSnap.exists() ){
            setItem( { idProduct: id, ...docSnap.data() } )
        }
        else{
            alert("No existe el id del producto ingresado");
            window.history.back();
        }

    }

    useEffect( () => {
        fetchData(id);
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