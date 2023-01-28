import Backpack from "../images/backpack.jpeg"
import BackpackPerson from "../images/backpack-person.webp"

export const shopData = [
  {name: 'Fake Men\'s Shirt', price: 19.99, image: Backpack, altImage: BackpackPerson, key: 0},
  {name: 'Fake Men\'s Joggers', price: 29.99, image: Backpack, altImage: BackpackPerson, key: 1},
  {name: 'Fake Sunglasses', price: 15.99, image: Backpack, altImage: BackpackPerson, key: 2},
  {name: 'Fake Unisex Jacket', price: 39.99, image: Backpack, altImage: BackpackPerson, key: 3},
  {name: 'Fake Scarf', price: 12.99, image: Backpack, altImage: BackpackPerson, key: 4},
  {name: 'Fake Backpack', price: 21.99, image: Backpack, altImage: BackpackPerson, key: 5},
]



export const getMatchingItem = (itemName) => {
  // const result = shopData.filter(item => item.name === itemName)

  // console.log(`added item's name is ${result.name}`)
  // return result
  for (let i = 0; i < shopData.length; i++){
    if (shopData[i].name == itemName){
      const result = shopData[i]
      console.log(`added item's name is ${result.name}`)
      return result
    }
  }
  
}