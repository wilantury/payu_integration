import { BiStore, BiUserCircle, BiCartAlt } from 'react-icons/bi';
import React, { useContext } from 'react';
import { HeaderWrapper, Logo, DivCart } from './styles'
import CartContext from '../../context/CartContext'


export const Header = () => {
    const {CartData, setCartData} = useContext(CartContext)
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
                    <BiCartAlt size='40px' color="lightblue" /> 
                    <h3>{totalUnits}</h3>
                    
                </DivCart>
        </HeaderWrapper>
    )
}