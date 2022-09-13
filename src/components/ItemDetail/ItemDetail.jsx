const ItemDetail = ({datos})=>{
    const {id, title, description, price, pictureUrl} = datos;
    return (
        <>
            <h1>{title}</h1>
        </>
    );
}

export default ItemDetail;