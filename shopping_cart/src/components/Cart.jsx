const Cart = ({cart,handleProduct,handleDel}) => {
    const totalPrice = cart.reduce((price,item)=>price+item.quantity * item.price, 0)

  return (
    <div className="cart-items">
        <div className="cart-items-header">    Cart Items    </div>

            {cart.length===0&&(
                <div className="cart-items-empty">No items are added.</div>
            )}
                {
                    cart.map((item)=>(
                        <div key={item.id}>
                            <div className="cart-items-list">
                                <img src={item.image} className='cart-items-img' alt="item.title" />
                                <div className="cart-items-name">{item.title}</div>
                                <div className="cart-items-function">
                                    <button onClick={()=>handleProduct(item)} className="cart-items-add">+</button>
                                    <button onClick={()=>handleDel(item)} className="cart-items-remove">-</button>
                                    
                                </div>
                                    <div className="cart-item-price">
                                        {item.quantity}* {item.price}
                                    </div>
                            </div>
                            <div className="cart-items-total-price-name">
                                Total Price
                                <div className="cart-items-total-price">{totalPrice}</div>
                            </div>
                        </div>
                    ))
                }
    </div>
  )
}

export default Cart
