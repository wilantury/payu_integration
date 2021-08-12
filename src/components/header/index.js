import { BiStore, BiUserCircle, BiCartAlt } from 'react-icons/bi';
import React, { useContext, useState } from 'react';
import { HeaderWrapper, Logo, DivCart } from './styles'
import CartContext from '../../context/CartContext'
import { QuickCartList } from '../quickCartList'


export const Header = ({clickBody}) => {
    const {CartData, setCartData} = useContext(CartContext)
    const [quickViewCart, setQuickViewCart] = useState(false)
    const [clkBdy, setClkBdy] = useState(false)
    const reducer = (accumulator, currentValue) => accumulator + currentValue.qty_p;
    const totalUnits = CartData.reduce(reducer, 0)

    if(clickBody != clkBdy){
        setQuickViewCart(false)
        setClkBdy(clickBody)
    }

    function handleViewCart(){
        console.log("ver carrito")
    }

    return (
        <HeaderWrapper >
                <Logo>
                    <BiStore size='45px' />
                    <p>Antury<br/>e-commerce</p>
                </Logo>
                <DivCart >
                    <BiUserCircle size='40px' /> 
                    <BiCartAlt size='40px' color="lightblue" cursor="pointer" 
                        onClick={handleViewCart} onMouseEnter={()=>setQuickViewCart(true)} /> 
                    <h3>{totalUnits}</h3>
                    { quickViewCart && (
                        <QuickCartList data={CartData}/>
                      )
                    }
                </DivCart>
        </HeaderWrapper>
    )
}