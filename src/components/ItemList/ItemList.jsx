import Item from "../Item/Item";
import "./ItemList.css";
import Loader from "../Loader/Loader";

const ItemList = ({ datos }) => {
    if( datos.length > 0 ){
        return(
            <div className="itemList pt-24 pb-8 flex flex-nowrap overflow-x-scroll">
                {   
                    datos.map( item =>  <Item  key = {item.id} id = {item.id} title= {item.title} price= {item.price} image= {item.pictureUrl} rating={item.raiting} /> ) 
                }
            </div>
        )
    }
    else{
        return(
            <div className="itemList pt-24 pb-8 flex flex-nowrap overflow-x-scroll">
                <Loader/>
            </div>
        )
    }
};
export default ItemList;