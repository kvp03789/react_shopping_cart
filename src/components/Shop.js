import React from 'react'
import {useState} from 'react'
import ShopItem from './ShopItem'

const Shop = (props) => {

  return (
      <div className="store-container">
        {
          props.shopInventory.map(item => (
            <div key={item.key} className="store-item">
              <ShopItem inventoryItem={item} handleCartAdd={(name, price) => props.handleCartAdd(name, price)}/>
            </div>
          ))
        }
      </div>
  )
}

export default Shop