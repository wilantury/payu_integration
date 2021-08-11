import { createContext } from 'react'

const CartContext = createContext({
    CartData:[],
    setCartData: ()=>{}
})

export default CartContext