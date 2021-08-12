import './App.css';
import React , { useState } from 'react'

import { Header } from './components/header'
import { ProductsList } from './components/productsList'
import CartContext from '../src/context/CartContext'

function App() {
  const [CartData, setCartData] = useState([]);
  const value = { CartData, setCartData};
  const [clickBody, setClickBody] = useState(false);

  function handleClick(){
    setClickBody(!clickBody);
  }
  return (
    <CartContext.Provider value={value} >
      <div onClick={handleClick}>
        <Header clickBody = {clickBody}/>
        <ProductsList />
      </div>
    </CartContext.Provider>
  );
}

export default App;
