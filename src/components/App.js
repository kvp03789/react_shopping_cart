import React from "react";
import {useState, useEffect} from 'react'
import { Routes, Route } from "react-router-dom"
import Nav from "./Nav"
import Home from "./Home"
import Shop from "./Shop"
import {shopData, getMatchingItem} from '../data/shop.data.js'
import {users, getCurrentUser, setCart} from "../data/users"
import {checkQuantity, checkDuplicate} from '../utils'
import UserIcon from '../images/icons/user-icon.svg'

function App() {

  const [inventory, setInventory] = useState(shopData)
  const [cartContents, setCartContents] = useState([])
  const [count, setCount] = useState(0);
  const [currentUser, setCurrentUser] = useState(users[0])

  // useEffect(() => {
  //   setCurrentUser(users[0])
  //   //setCartContents(currentUser.cart)
  //   console.log(currentUser)
  // }, [currentUser])

  const handleCartAdd = (addedItemName) => {
    
    const newCartItem = {
      item: getMatchingItem(addedItemName),
      quantity: 1,
      key: count
    }
    const tempArray = [...currentUser.cart]
    if(checkDuplicate(currentUser.cart, newCartItem.item)){
      for(let i =0; i < tempArray.length; i++){
        if (tempArray[i].item.name === addedItemName){
          tempArray[i].quantity++
        }
      }
      setCurrentUser({name: 'Guest', cart: [...tempArray], icon: UserIcon})
    }else {
      const newCart = [...currentUser.cart, newCartItem]
      setCurrentUser({name: 'Guest', cart: [...newCart], icon: UserIcon})
      setCount(count+1)
    }

    setCount(count+1)
  }

  const handleCartRemove = (removedItem) => {
    console.log(`removed item is ${removedItem}`)
  }
  
  const handleQuantityChange = (itemName, newQuantity) => {
    console.log('quantity changed')
    const tempArray = [...currentUser.cart]
    tempArray.forEach((item) => {
      if(item.item.name === itemName.item.name){
        item.quantity = newQuantity
      }
    })
    const newestArray = tempArray.filter(item => {
      return item.quantity > 0
    })
    setCurrentUser({name: 'Guest', cart: [...newestArray], icon: UserIcon})
  }

  return (
    <div className="App">
      <Nav cartContents={currentUser.cart} currentUser={currentUser} handleCartRemove={handleCartRemove} handleQuantityChange={handleQuantityChange}/>
      <Routes>
        <Route path="/Home.js" element={<Home/>}/>
        <Route path="/Shop.js" element={<Shop shopInventory={inventory} handleCartAdd={(name, price) => handleCartAdd(name, price)}/>}/>
      </Routes>
    </div>
  );
}

export default App;
