import { BiStore, BiUserCircle, BiCartAlt } from 'react-icons/bi';
import React, { useContext, useState } from 'react';
import { HeaderWrapper, Logo, DivCart } from './styles'
import CartContext from '../../context/CartContext'
import { QuickCartList } from '../quickCartList'
import { Link } from 'react-router-dom'


export const Header = ({clickBody}) => {
    const {CartData} = useContext(CartContext)
    const [quickViewCart, setQuickViewCart] = useState(false)
    const [clkBdy, setClkBdy] = useState(false)
    const reducer = (accumulator, currentValue) => accumulator + currentValue.qty_p;
    const totalUnits = CartData.reduce(reducer, 0)

    if(clickBody !== clkBdy){
        setQuickViewCart(false)
        setClkBdy(clickBody)
    }


    return (
        <HeaderWrapper >
            <Link to="/">
                <Logo>
                    <BiStore size='45px' />
                    <p>Antury<br/>e-commerce</p>
                </Logo>
            </Link>
            <DivCart >
                <BiUserCircle size='40px' /> 

                    <BiCartAlt size='40px' color="lightblue" cursor="pointer" 
                        onMouseEnter={()=>setQuickViewCart(true)} /> 
                    <h3>{totalUnits}</h3>
                    { quickViewCart && (
                        <QuickCartList data={CartData}/>
                        )
                    }
            </DivCart>
        </HeaderWrapper>
    )
}