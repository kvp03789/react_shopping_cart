//loop through array and count number of times item appears
export const checkQuantity = (array, item) => {
  console.log("here it is folks", array, item)
  let quantity = 1;
  for(let i = 0; i < array.length; i++){
    if(array[i].item.name === item.name){
      quantity++
    }
  }
  console.log(`item quantity is ${quantity}`)
  return quantity
}

//check through array for duplicates of item
export const checkDuplicate = (array, item) => {
  for(let i = 0; i < array.length; i++){
    if(array[i].item.name === item.name){
      return true
    }
  }
  return false
}