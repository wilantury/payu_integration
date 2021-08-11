import React from 'react'
import { CartDetail } from './styles'

export const QuickCartList = ( props ) => {


    return (
        <div>
            <h2>Cart products</h2>
            {CartData.map( product => <li>{product.name}</li>)}
        </div>
    )
}