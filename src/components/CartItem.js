import React, { useEffect } from 'react'
import {useState} from 'react'

const CartItem = (props) => {

  const [quantity, setQuantity] = useState(props.cartItem.quantity)
  useEffect(() => {
    props.handleQuantityChange(props.cartItem, quantity)
  }, [quantity])

  const handleClick = () => {
    props.handleCartRemove()
  }

  const handleClickIncrease= (e) => {
    setQuantity(quantity+1)
  }

  const handleClickDecrease= (e) => {
    setQuantity(quantity-1)
  }

  return (
    <div className="cart-item">
      <div className="center-row">
        <div>
          <h3>{props.cartItem.item.name}</h3>
        </div>
        <div>
          <p>{props.cartItem.item.price}</p>
        </div>  
      </div>
      <div>
          <button onClick={props.handleCartRemove}>Remove</button>
      </div>
      <div>
        <div className="center-row">
          <button onClick={(e) => {handleClickDecrease(e)}}>-</button>
            <p>
              {quantity}
            </p>
          <button onClick={(e) => {handleClickIncrease(e)}}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem