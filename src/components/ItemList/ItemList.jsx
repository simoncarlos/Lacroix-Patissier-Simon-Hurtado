import Item from "../Item/Item";
import Loader from "../Loader/Loader";

const ItemList = ({ datos }) => {
    if( datos.length > 0 ){
        return(
            <div className="itemList flex flex-wrap justify-evenly">
                {   
                    datos.map( item =>  <Item  key = {item.idProduct} id = {item.idProduct} title= {item.title} subtitle={item.subtitle} price= {item.price} image= {item.pictureUrl} rating={item.raiting} /> ) 
                }
            </div>
        )
    }
    else{
        return(
            <section className="h-96 flex items-center justify-center">
                <Loader/>
            </section>
        )
    }
};
export default ItemList;