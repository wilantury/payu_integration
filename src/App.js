import './App.css';
import React , { useState } from 'react'

import { Header } from './components/header'
import { ProductsList } from './components/productsList'
import CartContext from '../src/context/CartContext'

function App() {
  const [CartData, setCartData] = useState([])
  const value = { CartData, setCartData}
  return (
    <CartContext.Provider value={value} >
      <Header />
      <ProductsList />
    </CartContext.Provider>
  );
}

export default App;
