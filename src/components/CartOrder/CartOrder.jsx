const CartOrder = ({state, data}) => {

    return (
        <>
            {
                state
                &&  <>
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">¡Muchas gracias por su compra {data.buyer.name}!</h3>
                            <p className="py-4">Su monto total de la compra es: {data.total}</p>
                            <p>Su id de compra es: {data.id}</p>
                            <div className="modal-action">
                                <label htmlFor="my-modal-6" className="btn">Close</label>
                            </div>
                        </div>
                </>
            }
        </>
    )
}

export default CartOrder;