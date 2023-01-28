import React from 'react'
import {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';
import CartIcon from '../images/icons/cart.png'

import Cart from './Cart.js'


const Nav = (props) => {
  const [showSidebar, setShowSidebar] = useState(false)

  const handleClick = () => {
    showSidebar ? setShowSidebar(false) : setShowSidebar(true)
    console.log('it works')
  }

  const getNumberOfItems = (cart) => {
    let num = 0;
    cart.forEach(item => {
      num += item.quantity
    })
    return num
  }

  const hideSidebar = () => {
    setShowSidebar(false)
  }

  return (
    <div>
    {showSidebar && <Cart handleClick={hideSidebar} handleCartRemove={props.handleCartRemove} handleQuantityChange={props.handleQuantityChange} cartContents={props.currentUser.cart}/>}
      <div className="nav center-row">
        <div className="nav-logo-container">
          <NavLink to="/Home.js">F A K E</NavLink>
        </div>
          <div className="nav-link-container center-row">
              <div className="center-col">
                <li>
                  <NavLink to="/Home.js">Home</NavLink>
                </li>
              </div>
              <div className="center-col">
                <li>
                  <NavLink to="/Shop.js">Shop</NavLink>
                </li>
              </div>
          </div>
          <div className="nav-user-container">
            <div className="nav-cart-container center-row" onClick={handleClick}>
              <img src={CartIcon} alt="Cart" className="small-icon"/>
              {
                props.cartContents.length > 0 &&
                <p className="cart-number center-row">{getNumberOfItems(props.cartContents)}</p>
              }
            </div>
            <div className="nav-user-icon-container center-row">
              <img src={props.currentUser.icon} className="user-icon small-icon"/>
            </div>
            <div className={"nav-user-name-text"}>
              <h3>{props.currentUser.name}</h3>
            </div>  
          </div>

      </div>
    </div>
  )
}

export default Nav