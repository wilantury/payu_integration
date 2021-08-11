import { BiStore, BiUserCircle, BiCartAlt } from 'react-icons/bi';
import React, { useContext, useState } from 'react';
import { HeaderWrapper, Logo, DivCart } from './styles'
import CartContext from '../../context/CartContext'
import { QuickCartList } from '../quickCartList'


export const Header = () => {
    const {CartData, setCartData} = useContext(CartContext)
    const [quickViewCart, setQuickViewCart] = useState(false)
    const reducer = (accumulator, currentValue) => accumulator + currentValue.qty_p;
    const totalUnits = CartData.reduce(reducer, 0)
    return (
        <HeaderWrapper>
                <Logo>
                    <BiStore size='45px' />
                    <p>Antury<br/>e-commerce</p>
                </Logo>
                <DivCart >
                    <BiUserCircle size='40px' /> 
                    <BiCartAlt size='40px' color="lightblue" onClick={()=>setQuickViewCart(!quickViewCart)}/> 
                    <h3>{totalUnits}</h3>
                    { quickViewCart && (
                        <QuickCartList data={CartData}/>
                      )
                    }
                </DivCart>
        </HeaderWrapper>
    )
}