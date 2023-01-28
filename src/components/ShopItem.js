import React from 'react'

const ShopItem = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    let itemName = e.target.parentElement.children[1].firstChild.textContent
    let itemPrice = e.target.parentElement.children[2].firstChild.textContent.toString();
    //let itemImage = e.target.parentElement.children[0].firstChild.src
    console.log(`price: ${itemPrice} name: ${itemName}`)
    props.handleCartAdd(itemName, itemPrice)
  }

  return (
    <div className="shop-item-container">
    <div className="center-row">
      <img src={props.inventoryItem.image} alt='backpack'/>
    </div>
      <div className="center-row">
        <h3>
          {props.inventoryItem.name}
        </h3>
      </div>
      <div>
        <h3 className="center-col">
          ${props.inventoryItem.price}
        </h3>
      </div>
      <button onClick={(e) => handleSubmit(e)} className="add-to-cart-button" type="submit" >Add To Cart
      </button>
    </div>
  )
}

export default ShopItem