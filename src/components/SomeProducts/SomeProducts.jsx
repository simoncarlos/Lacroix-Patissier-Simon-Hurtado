import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig"

const SomeProducts = () => {

    const [data, setData] = useState([]);
    const { id } = useParams();
    const [loader, setLoader] = useState(true);

    async function fetchData(id){
        let querySnapshot

        if(id){
            const filter = query( collection(db, "products"), where( 'category' , '==' , id ) )
            querySnapshot = await getDocs( filter )
        }
        else{
            querySnapshot = await getDocs(collection(db, "products"))
        }

        const dataFromDB = querySnapshot.docs.map( (product) => (
            {
                idProduct: product.id,
                ...product.data()
            }
        ))
        const productList = dataFromDB.filter( (product, index) => index % 4 == 0 && product )

        setData( productList );
        setLoader(false);
    }

    useEffect( () => {
        setLoader(true);
        fetchData(id);
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
                <h2 className="text-2xl my-12">Algunos de nuestros productos..</h2>
                <ItemList datos={data} />
            </section>
        );
    }
};
export default SomeProducts;