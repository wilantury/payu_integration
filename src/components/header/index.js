import { BiStore, BiUserCircle, BiCartAlt } from 'react-icons/bi';
import React from 'react';
import { HeaderWrapper, Logo, DivCart } from './styles'


export const Header = () => {
    

    return (
        <HeaderWrapper>
                <Logo>
                    <BiStore size='45px' />
                    <p>Antury<br/>e-commerce</p>
                </Logo>
                <DivCart >
                    <BiUserCircle size='30px' /> 
                    <BiCartAlt size='30px' /> 
                    <h3>0</h3>
                </DivCart>
        </HeaderWrapper>
    )
}