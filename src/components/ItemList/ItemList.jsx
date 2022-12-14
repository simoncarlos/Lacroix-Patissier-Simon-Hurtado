import Item from "../Item/Item";

const ItemList = ({ datos }) => {
        return(
            <div className="itemList flex flex-wrap justify-evenly">
                {   
                    datos.map( item =>  <Item  key = {item.idProduct} id = {item.idProduct} title= {item.title} subtitle={item.subtitle} price= {item.price} image= {item.pictureUrl} rating={item.raiting} /> ) 
                }
            </div>
        )
    
};
export default ItemList;