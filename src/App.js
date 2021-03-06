import './App.css';
import React , { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Header } from './components/header'
import { ProductsList } from './components/productsList'
import {ResponsePage} from './components/responsePage'
import { CartPage } from './components/cartPage'
import CartContext from '../src/context/CartContext'

function App() {
  const [CartData, setCartData] = useState([]);
  const value = { CartData, setCartData};
  const [clickBody, setClickBody] = useState(false);

  function handleClick(){
    setClickBody(!clickBody);
  }
  return (
    <Router>
      <CartContext.Provider value={value} >
        <div onClick={handleClick}>
          <Header clickBody = {clickBody}/>
          <Switch>
            <Route path="/" exact component={ProductsList}></Route>
            <Route path="/response" >
              <ResponsePage />
            </Route>
            <Route path="/cart" >
              <CartPage />
            </Route>
          </Switch>
        </div>
      </CartContext.Provider>
    </Router>
  );
}

export default App;
