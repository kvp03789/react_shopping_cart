import React from 'react'
import { useState, useEffect} from "react"
import CartItem from './CartItem.js'


const Cart = (props) => {

  const getCartPrice = (cart) => {
    let price = 0;
    cart.forEach(item => {
      price += (item.item.price * item.quantity)
    })
    return (Math.floor(price * 100))/100
  }

  return (
    <div>
      <div className="cart-backdrop"></div>
      <div className="cart-container center-col">
        <button className="close-button" onClick={props.handleClick}>X</button>
        <h1>Your Cart</h1>
        {props.cartContents.length === 0
          ? <p>Your cart is empty.</p>
          : props.cartContents.map(item => (
            <div key={item.key} className="cart-list center-col">
              <CartItem cartItem={item} handleCartRemove={props.handleCartRemove} handleQuantityChange={props.handleQuantityChange}/>
            </div>
          ))
        }
        {
          props.cartContents.length > 0 && 
          <h3>Cart Total: ${getCartPrice(props.cartContents)}</h3>
        }
        {
          props.cartContents.length > 0 &&
          <div className="center-row checkout-button-container">
            <button className="checkout-button">Check Out</button>
          </div>
        }
        
      </div>
    </div>
  )
}

export default Cart