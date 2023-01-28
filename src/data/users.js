import UserIcon from '../images/icons/user-icon.svg'

export const users = [
  {name: 'Guest', cart: [], icon: UserIcon},
  {name: 'f1rstpers0n', cart: []}
]

export function getCurrentUser() {
  return users[0]
}

export const setCart = (newCart) => {
  users[0].cart = newCart
}