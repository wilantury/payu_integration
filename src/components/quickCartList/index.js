import React from 'react'
import { CartListWrapper } from './styles'

export const QuickCartList = ( {data} ) => {
    
    const total = data.reduce( (acum, current) => acum+(current.price * current.qty_p ), 0);
    const tax_p = 0.19;
    return (
        <CartListWrapper>
            <h2>Cart products</h2>
            <ul>
                <li><p><h5>Product</h5></p><p><h5>Quantity</h5></p><p><h5>Price</h5></p></li>
                {data.map( product => <li><p>{product.name}</p><p>{product.qty_p}</p><p>{product.price * product.qty_p}</p></li>)}
            </ul>
            <h5>Total: {total}</h5>
            <h5>Tax {tax_p*100}%: {total*tax_p}</h5>
            <h5>Total inc. Tax: {total*tax_p + total}</h5>
        </CartListWrapper>
    )
}